import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

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

app.post("/InviteGuest", (req, res) => {
    Guests.create({
        email: req.body.email,
        code: req.body.code,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        rsvp: Boolean,
        responseDate: Date
    }).then(doc => console.log(doc))
    .catch(err => console.log(err));
});

app.get("/RSVPCode", (req, res) => {
    Guests.find({code: 'req'}).then(items => res.json(items))
    .catch((err) => console.log(err));
});

app.get("/guests", (req, res) => {
    Guests.find().then(items => res.json(items))
    .catch((err) => console.log(err));
});

app.delete("/delete/:id", (req, res) => {
    Guests.findByIdAndDelete({_id: req.params.id})
    .then(doc => console.log(doc))
    .catch((err) => console.log(err));
});

app.put("/update/:id", (req, res) => {
    Guests.findByIdAndUpdate({_id: req.params.id}, {
        email: req.body.email,
        code: req.body.code,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        rsvp: Boolean,
        responseDate: Date
    })
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
});

app.post("/AddEvent", (req, res) => {
    Event.create({
        event: req.body.event,
        date: req.body.date,
        time: req.body.time,
        location: req.body.location,
        description: req.body.description
    }).then(doc => console.log(doc))
    .catch(err => console.log(err));
});

app.get("/Events", (req, res) => {
    Event.find().then(items => res.json(items))
    .catch((err) => console.log(err));
});

//finds a list of users going to event #1
app.get("/RSVPed", (req, res) => {
    Guests.find( {event1: true})
    .catch((err) => console.log(err));
});

app.post("/RSVP", (req, res) => {
    Guests.findByIdAndUpdate(guest_id: req.gid, {event1: true})
})



app.listen(3001, function() {
    console.log("Server is running");
});