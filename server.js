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
const postSchema = mongoose.Schema({
    email: String,
    password: String,
    name: String,
    responseDate: Date
});

const Post = mongoose.model("Post", postSchema);

app.get("/", (req, res) => {
    res.send("Express is here");
});

app.post("/RSVP", (req, res) => {
    Post.create({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        responseDate: req.body.responseDate
    }).then(doc => console.log(doc))
    .catch(err => console.log(err));
});

app.get("/guests", (req, res) => {
    Post.find().then(items => res.json(items))
    .catch((err) => console.log(err));
});


app.listen(3001, function() {
    console.log("Server is running");
});