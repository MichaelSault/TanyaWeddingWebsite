const express = require('express'),
    cors = require('cors'),
    mongoose = require('mongoose');

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
    family: String,
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
    email: String,
    firstName: String,
    lastName: String,
    sangeet: Number,
    maiyan: Number,
    mendhi: Number,
    choora: Number,
    sikh: Number,
    civil: Number,
    rsvpAttendence: String,
    rsvpDiet: String
});

const secretSchema = mongoose.Schema({
    JWTSecret: String
});

const Guests = mongoose.model("Guests", guestSchema);

const RSVPs = mongoose.model("RSVPs", RSVPSchema);


const RSVPCode = async(rsvpCode) => {
    try {
        console.log(rsvpCode);
        const guest = await Guests.find({code: rsvpCode})
        .catch((err) => console.log(err));
        
        console.log("Returned from Query");
        console.log(guest[0]);
        return(guest[0]);

    } catch(error) {
        console.log(error);
    }
}

const RSVPEmail = async(rsvpEmail) => {
    try {
        console.log(rsvpEmail);
        const guest = await Guests.find({code: rsvpEmail})
        .catch((err) => console.log(err));
        
        console.log("Returned from Query");
        console.log(guest[0]);
        return(guest[0]);

    } catch(error) {
        console.log(error);
    }
}

module.exports = {
    RSVPCode,
    RSVPEmail
}