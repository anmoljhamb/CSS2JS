class Property {
    // Property, like color: white;
    constructor(name, value){
        this.name = name;
        this.value = value;
    }

    toString(){
        return `${this.name}: ${this.value};`
    }
}


class Selector{
    // the selectory query for a css BLOCK.
    // for example, .container 
    constructor(query){
        this.query = query;
        this.properties = [] 
    }

    
    addProperty(property){
        this.properties.push(property)
    }


    getProperty(n){
        return this.properties[n]
    }


    getProperties(){
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


class CSSParse{
    constructor(cssString)
    {
        // Takes in cssString as constructor.
        this.cssString = cssString;
    }
}


module.exports = CSSParse