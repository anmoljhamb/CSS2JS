const CSSParse = require("./CSSParse")
const fs = require("fs")
const path = require("path")

let cssString = fs.readFileSync(path.join(__dirname, "sample.css"), "utf-8")
cssParse = new CSSParse(cssString)