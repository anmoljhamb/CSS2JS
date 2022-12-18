const CSSParse = require("./CSSParse")
const fs = require("fs")
const path = require("path")

let cssString = fs.readFileSync(path.join(__dirname, "test.css"), "utf-8")
cssParse = new CSSParse(cssString)
console.log(cssParse.selectors[0].query);