const express = require('express'),
    JWT = require('./backend/JWT.js'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    rsvp = require("./backend/rsvp.js");

const path = require('path');

const dotenv = require('dotenv');
const { Int32 } = require('mongodb');
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/dist')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
}

//eventually this should be removed due to security issues but while testing I'll leave it
mongoose.connect("mongodb+srv://michaelsault:70OByv77QoUUlQLb@cluster0.rrfulxt.mongodb.net/?retryWrites=true&w=majority").catch(err => console.log(err));

// Test connection
mongoose.connection.once('open', function () {
    console.log('MongoDB database connection established successfully')
});

//DB SCHEMA AND MODEL
const guestSchema = mongoose.Schema({
    familyID: String,
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

//DB SCHEMA AND MODEL
const RSVPSchema = mongoose.Schema({
    familyID: String,
    email: String,
    firstName: String,
    lastName: String,
    sangeet: Number,
    maiyan: Number,
    mendhi: Number,
    choora: Number,
    sikh: Number,
    civil: Number,
    diet: String,
    comment: String
});

const secretSchema = mongoose.Schema({
    JWTSecret: String
});

const Guests = mongoose.model("Guests", guestSchema);

const RSVPs = mongoose.model("RSVPs", RSVPSchema);

const Secrets = mongoose.model("Secrets", secretSchema);

app.get("/", (req, res) => {
    res.send("Express is here");
});

app.post("/InviteGuest", async (req, res) => {

    console.log(req.body.familyID);
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
        familyID: req.body.familyID,
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

//create a new rsvp response entry
app.post("/submitRSVP", async (req, res) => {
    RSVPs.create({
        familyID: req.body.familyID,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        sangeet: req.body.sangeet,
        maiyan: req.body.maiyan,
        mendhi: req.body.mendhi,
        choora: req.body.choora,
        sikh: req.body.sikh,
        civil: req.body.civil,
        diet: req.body.diet,
        comment: req.body.comment
    }).then(doc => console.log(doc))
    .catch(err => console.log(err));
});

//fetches a complete list of guests
app.get("/getGuests", (req, res) => {
    console.log("ran the guests function from server.js");
    //res.send("ran the guests function from server.js");
    
    const guestList = Guests.find().then(items => res.json(items))
    .catch((err) => console.log(err));

    console.log(guestList);
    res.send(guestList);
    
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

//check if a guest exists using EMAIL
app.get("/getFamily", async(req, res) => {
    try {
        console.log(req.query.firstName);
        console.log(req.query.lastName);
        const guest = await Guests.find({firstName: req.query.firstName, lastName: req.query.lastName})
        .catch((err) => console.log(err));
        
        console.log("Returned from Query");
        console.log(guest[0].familyID);

        const family = await Guests.find({familyID: guest[0].familyID})
        .catch((err) => console.log(err));

        console.log(family);

        res.send(family);

    } catch(error) {
        console.log(error);
    }
});

//delete a guest from the db
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
app.put("/rsvpEvent", async (req, res) => {

    var rsvpValue = req.body.rsvpValue;
    var rsvpValue2 = Number(rsvpValue);
    console.log(rsvpValue, rsvpValue2);

    var user = await Guests.find({email: req.body.email}).exec();
    console.log(user[0]._id);
    console.log(req.body.email);

    {req.body.eventName == "Sangeet & Jaggo" ? 
        Guests.findByIdAndUpdate({_id: user[0]._id}, {
            sangeet: rsvpValue,
        })
        .then((doc) => console.log(doc))
        .catch((err) => console.log(err))
        : req.body.eventName == "Mendhi" ?
        Guests.findByIdAndUpdate({_id: user[0]._id}, {
            mendhi: rsvpValue,
        })
        .then((doc) => console.log(doc))
        .catch((err) => console.log(err))
        : req.body.eventName == "Choora" ?
        Guests.findByIdAndUpdate({_id: user[0]._id}, {
            choora: rsvpValue,
        })
        .then((doc) => console.log(doc))
        .catch((err) => console.log(err))
        : req.body.eventName == "Anand Karaj (Sikh Ceremony)" ?
        Guests.findByIdAndUpdate({_id: user[0]._id}, {
            sikh: rsvpValue,
        })
        .then((doc) => console.log(doc))
        .catch((err) => console.log(err))
        : req.body.eventName == "Civil Ceremony & Reception" ?
        Guests.findByIdAndUpdate({_id: user[0]._id}, {
            civil: rsvpValue,
        })
        .then((doc) => console.log(doc))
        .catch((err) => console.log(err))
        : req.body.eventName == "Maiyan" ?
        Guests.findByIdAndUpdate({_id: user[0]._id}, {
            maiyan: rsvpValue,
        })
        .then((doc) => console.log(doc))
        .catch((err) => console.log(err))
        : console.log("No Update");
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


app.listen(PORT, function() {
    console.log("Server is running");
});