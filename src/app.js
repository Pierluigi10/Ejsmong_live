import express from "express";
import path from "path";

const app = express();
const __dirname = path.resolve(path.dirname(""));
const port = 3044;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './public/views'));