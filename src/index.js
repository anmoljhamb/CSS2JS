const Convert = require("./Convert")
const path = require("path")
const express = require("express")
const app = express() 


const port = 9000
const hostname = "localhost"

app.use(express.static(path.join(__dirname, "..", "static")))
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "..", "templates"))


app.get("/", (req, res) => {
    res.render("index")
})


app.listen(port, hostname, () => {
    console.log(`Listening on the url: http://${hostname}:${port}`);
})