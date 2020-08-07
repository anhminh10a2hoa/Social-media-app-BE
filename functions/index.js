const functions = require("firebase-functions");

const express = require("express");
const app = express();

const FBAuth = require("./util/fbAuth");
const { getAllScreams, postOneScream } = require("./handlers/screams");
const { signup, login } = require("./handlers/users");

// Scream routes
app.get("/screams", getAllScreams);
app.post("/scream", FBAuth, postOneScream);

//Signup route
app.post("/signup", signup);
app.post("/login", login);

exports.api = functions.region("europe-west1").https.onRequest(app);
