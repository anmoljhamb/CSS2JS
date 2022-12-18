const CSSParse = require("./CSSParse")

const convert = (cssString) => {
    const parser = new CSSParse(cssString)
    let convertedString = "const dom = (query) => document.querySelector(query)\n\n\n"
    parser.forEach((selector) => {
        tempString = ""
        selector.forEach((property) => {
            tempString += `dom("${selector.query}").style.setProperty("${property.name}", "${property.value}")\n`
        })
        tempString += "\n\n"
        convertedString += tempString
    })
    return convertedString.trim("\n")
}

module.exports = convert