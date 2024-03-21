const express = require('express'),
    JWT = require('./backend/JWT'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    rsvp = require("./backend/rsvp.js");

const dotenv = require('dotenv');
const { Int32 } = require('mongodb');
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

//eventually this should be removed due to security issues but while testing I'll leave it
mongoose.connect(process.env.DB_CONN).catch(err => console.log(err));

//DB SCHEMA AND MODEL
const guestSchema = mongoose.Schema({
    email: String,
    code: String,
    firstName: String,
    lastName: String,
    sangeet: Number,
    maiyan: Number,
    mendhi: Number,
    choora: Number,
    sikh: Number,
    civil: Number
});

const secretSchema = mongoose.Schema({
    JWTSecret: String
});

const Guests = mongoose.model("Guests", guestSchema);

const Secrets = mongoose.model("Secrets", secretSchema);

app.get("/", (req, res) => {
    res.send("Express is here");
});

app.post("/InviteGuest", async (req, res) => {
    //generates a random 5-digit rsvp code
    var rsvpCode = rsvp.makeCode(5);

    //checks if the code is already assigned to a guest
    var codeExists = await Guests.find({code: rsvpCode}, {code:1}).exec();
    console.log(codeExists);
    console.log("break");

    //if the code exists, generate a new 5-digit code until a unique code is found
    while (codeExists.length > 0) {
        rsvpCode = rsvp.makeCode(5);
        codeExists = await Guests.find({code: rsvpCode}, {code:1}).exec();
        console.log(codeExists);
    }

    //create the guest in the db
    Guests.create({
        email: req.body.email,
        code: rsvpCode,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        sangeet: req.body.sangeet,
        maiyan: req.body.maiyan,
        mendhi: req.body.mendhi,
        choora: req.body.choora,
        sikh: req.body.sikh,
        civil: req.body.civil
    }).then(doc => console.log(doc))
    .catch(err => console.log(err));
});

//fetches a complete list of guests
app.get("/guests", (req, res) => {
    Guests.find().then(items => res.json(items))
    .catch((err) => console.log(err));
});


//check if a guest exists using CODE
app.get("/RSVPCode", async(req, res) => {
    try {
        console.log(req.query.code);
        const guest = await Guests.find({code: req.query.code})
        .catch((err) => console.log(err));
        
        console.log("Returned from Query");
        console.log(guest[0]);
        res.send(guest[0]);

    } catch(error) {
        console.log(error);
    }
});

//check if a guest exists using EMAIL
app.get("/RSVPEmail", async(req, res) => {
    try {
        console.log(req.query.email);
        const guest = await Guests.find({email: req.query.email})
        .catch((err) => console.log(err));
        
        console.log("Returned from Query");
        console.log(guest[0]);
        res.send(guest[0]);

    } catch(error) {
        console.log(error);
    }
});


app.delete("/delete/:id", (req, res) => {
    Guests.findByIdAndDelete({_id: req.params.id})
    .then(doc => console.log(doc))
    .catch((err) => console.log(err));
});

//update a guests information by id
app.put("/update/:id", (req, res) => {
    Guests.findByIdAndUpdate({_id: req.params.id}, {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        sangeet: req.body.sangeet,
        maiyan: req.body.maiyan,
        mendhi: req.body.mendhi,
        choora: req.body.choora,
        sikh: req.body.sikh,
        civil: req.body.civil
    })
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
});

app.put("/update/:id", (req, res) => {
    Guests.findByIdAndUpdate({_id: req.params.id}, {
        eventName: eventName
    })
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
});

//update user's rsvp status
app.put("/rsvpEvent", (req, res) => {
    console.log(req.body);
    console.log(req.body.email);
    console.log(req.body.eventName);
    console.log(req.body.rsvpValue);
    {req.body.eventName == "Sangeet & Jaggo" ? 
        Guests.findByIdAndUpdate({id: "651cd6eebab2bb16c54faf13"}, {
            sangeet: req.body.rsvpValue,
        })
        : req.body.eventName == "Mendhi" ?
        Guests.findByIdAndUpdate({id: "651cd6eebab2bb16c54faf13"}, {
            maiyan: req.body.rsvpValue,
        })
        : req.body.eventName == "Choora" ?
        Guests.findByIdAndUpdate({id: "651cd6eebab2bb16c54faf13"}, {
            choora: req.body.rsvpValue,
        })
        : req.body.eventName == "Anand Karaj (Sikh Ceremony)" ?
        Guests.findByIdAndUpdate({id: "651cd6eebab2bb16c54faf13"}, {
            sikh: req.body.rsvpValue,
        })
        : req.body.eventName == "Civil Ceremony & Reception" ?
        Guests.findByIdAndUpdate({id: "651cd6eebab2bb16c54faf13"}, {
            civil: 2,
        })
        : req.body.eventName == "Maiyan" ?
        Guests.findByIdAndUpdate({_id: "651cd6eebab2bb16c54faf13"}, {
            Maiyan: req.body.rsvpValue,
        })
    : Guests.findByIdAndUpdate({_id: "651cd6eebab2bb16c54faf13"}, {
        Maiyan: req.body.rsvpValue,
    })
    }
});

////////////////////////////////////////////////////
////////////////JWT Functions///////////////////////
////////////////////////////////////////////////////

//returns data from JWT payload
app.post('/decodeJWT', async(req, res) => {
    //set Secret
    const secret = await Secrets.find()
        .catch((err) => console.log(err));

    const secretKey = secret[0].JWTSecret;

    //set JWT
    const jwtToVerify = req.body.Token;
    //validate JWT
    const validated = await JWT.verifyJWT(jwtToVerify, secretKey);
    console.log(validated);
    //if valid, decode the payload
    if (validated){
        console.log("JWT to decode: " + jwtToVerify);
        const decoded = await JWT.decodeJWT(jwtToVerify);
        console.log("decoded token: " + decoded);
        res.send(decoded);
    } else {
        throw new Error("Invalid Signature!");
    }
});

app.post('/JWT', async(req, res) => {
    console.log("==========================================called JWT on server.js==========================================");
    //set Secret
    const secret = await Secrets.find()
        .catch((err) => console.log(err));
    
    const secretKey = secret[0].JWTSecret;

    console.log(req.body);
    const JasonWebToken = await JWT.getJWT(req.body, secretKey);
    console.log("JWT Returned by the function: " + JasonWebToken);
    const decoded = await JWT.decodeJWT(JasonWebToken);
    console.log("decoded token: " + decoded);
    console.log(req.body);
    const validated = await JWT.verifyJWT(JasonWebToken, secretKey);
    console.log(validated);
    res.send(JasonWebToken);

});

//returns true if valid JWT
app.post('/verifyJWT', async(req, res) => {
    //set Secret
    const secret = await Secrets.find()
        .catch((err) => console.log(err));

    const secretKey = secret[0].JWTSecret;

    const jwtToVerify = req.body.Token;
    console.log("JWT to verify: " + jwtToVerify);
    const validated = await JWT.verifyJWT(jwtToVerify, secretKey);
    console.log(validated);
    res.send(req.body); 
});


app.listen(3001, function() {
    console.log("Server is running");
});