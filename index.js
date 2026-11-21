import express from "express"
import dotenv from "dotenv"
dotenv.config()

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.get("/twitter", (req, res) => {
    res.send("Gauarav.com")
})

app.listen(process.env.PORT, () => {
    console.log(`The app is listening on port number: ${port}`);
})