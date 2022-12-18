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
        let string = `${this.query} {\n`
        this.properties.forEach(property => {
            string += `${property.toString()}\n`
        })
        string += "}"
        return string
    }

    forEach(callback){
        this.properties.forEach(el => callback(el))
    }
}



const findAll = (re, string) => {
    re = new RegExp(re, "g")
    const matches = []
    let match = re.exec(string)
    while (match != null) {
        matches.push(match)
        match = re.exec(string)
    }
    return matches
}


class CSSParse {
    constructor(cssString) {
        // Takes in cssString as constructor.
        this.cssString = cssString;
        this.selectors = []
        // find all selectors
        findAll(Selector.pattern, this.cssString).forEach((selector) => {

            /*
                startIndex: index of { from selector {property: value} 
                endIndex: index of } from selector { property: value}
                propertyString = cssString[startIndex:startIndex+endIndex] 
            */

            const startIndex = selector.index + selector[0].length
            const selectorName = selector[1].trim()
            const currentSelector = new Selector(selectorName)
            const endIndex = /\}/.exec(this.cssString.slice(startIndex)).index
            const propertyString = this.cssString.slice(startIndex, startIndex + endIndex)
            const properties = findAll(Property.pattern, propertyString)
            properties.forEach(prop => {
                const propName = prop[1].trim()
                const propValue = prop[2].trim()
                currentSelector.addProperty(new Property(propName, propValue))
            })
            this.selectors.push(currentSelector)
        })
    }


    forEach(callback){
        this.selectors.forEach(el => callback(el))
    }
}


module.exports = CSSParse