class Property {
    // Property, like color: white;
    static pattern = /(.+):(.+);/
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }

    toString() {
        return `${this.name}: ${this.value};`
    }
}


class Selector {
    // the selectory query for a css BLOCK.
    // for example, .container 
    static pattern = /(.+)\{/
    constructor(query) {
        this.query = query;
        this.properties = []
    }


    addProperty(property) {
        this.properties.push(property)
    }


    getProperty(n) {
        return this.properties[n]
    }


    getProperties() {
        return this.properties
    }

    toString() {
        string = `${this.query} {\n`
        this.properties.forEach(property => {
            string += `${property.toString()}\n`
        })
        string += "}"
        return string
    }
}



const findAll = (re, string) => {
    re = new RegExp(re, "g")
    const matches = []
    let match = re.exec(string)
    while (match != null) {
        matches.push(match)
        match = re.exec(string)
        break
    }
    return matches
}


class CSSParse {
    constructor(cssString) {
        // Takes in cssString as constructor.
        this.cssString = cssString;
        // find all selectors
        const selectors = findAll(Selector.pattern, this.cssString)
        selectors.forEach((selector) => {

            /*
                startIndex: index of { from selector {property: value} 
                endIndex: index of } from selector { property: value}
                patternString = cssString[startIndex:startIndex+endIndex] 
            */

            const startIndex = selector.index + selector[0].length
            console.log(selector);
            const endIndex = /\}/.exec(this.cssString.slice(startIndex)).index
            const patternString = this.cssString.slice(startIndex, startIndex + endIndex)
        })
    }
}


module.exports = CSSParse