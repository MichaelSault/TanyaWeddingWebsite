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