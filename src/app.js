import express from "express";
import path from "path";
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/mongoConference");
const speakerSchema = mongoose.Schema({
  name: String,
  country: String,
});
const SpeakerModel = mongoose.model("Speaker", speakerSchema);

const app = express();
const __dirname = path.resolve(path.dirname(""));
const port = 3044;
const staticDirectory = path.join(__dirname, "./public");
app.use(express.static(staticDirectory));

app.set("view engine", "ejs");
app.use(express.static(staticDirectory));

app.set("views", path.join(__dirname, "./src/views"));

app.get("/", (req, res) => {
  res.render("index", {
    pageTitle: "Welcome",
  });
});

app.get("/speakers", (req, res) => {
  res.render("speakers", {
    pageTitle: "Speakers",
  });
});

app.get("/presentations", (req, res) => {
  res.render("presentations", {
    pageTitle: "Presentations",
  });
});

app.listen(port, () => {
  console.log(`Now listening on port http://localhost:${port}`);
});
