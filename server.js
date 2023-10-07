const express = require('express'),
cors = require('cors'),
mongoose = require('mongoose'),
rsvp = require("./backend/rsvp.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

//eventually this should be removed due to security issues but while testing I'll leave it
mongoose.connect("mongodb+srv://michaelsault:70OByv77QoUUlQLb@cluster0.rrfulxt.mongodb.net/?retryWrites=true&w=majority").catch(err => console.log(err));

//DB SCHEMA AND MODEL
const guestSchema = mongoose.Schema({
    email: String,
    code: String,
    firstName: String,
    lastName: String,
    rsvp: Boolean,
    responseDate: Date
});

const Guests = mongoose.model("Guests", guestSchema);

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
        //rsvp: Boolean,
        //responseDate: Date
    }).then(doc => console.log(doc))
    .catch(err => console.log(err));
});

//fetches a complete list of guests
app.get("/guests", (req, res) => {
    Guests.find().then(items => res.json(items))
    .catch((err) => console.log(err));
});

//check if a guest exists
app.get("/RSVPCode", (req, res) => {
    console.log(req.query.code);
    Guests.find({code: req.query.code}).then(items => res.json(items))
    .catch((err) => console.log(err));
});


app.listen(3001, function() {
    console.log("Server is running");
});