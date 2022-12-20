const Convert = require("./Convert")
const path = require("path")
const express = require("express")
const app = express()
const bodyParser = require("body-parser")


const port = 9000
const hostname = "localhost"


app.use(express.static(path.join(__dirname, "..", "static")))
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "..", "templates"))


app.get("/", (req, res) => {
    res.render("index")
})


app.post("/convert", (req, res) => {
    const converted = Convert(req.body.css)
    res.json({
        "converted": converted,
        "message": "ok"
    })
})


app.listen(port, () => {
    console.log(`Listening on the url: http://${hostname}:${port}`);
})