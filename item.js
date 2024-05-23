const items = require("./fakeDb");

class Item {
    constructor(name, price) {
        this.name = name;
        this. price = price;

        items.push(this);
    }
/* Find all items */
    static findAll() {
        return items
    }

    /* Find specific name */
    static find(name) {
        // .find finds the element of name that is equal to name
        const found = items.find(v => v.name === name);
        // handle error
        if(found === undefined) {
            throw { message: "Not Found", status: 404 }
        }
        return found
    }

    static update(name, data) {
        let found = Item.find(name);
        if(found === undefined) {
            throw { message: "Not Found", status: 404 }
        }
        found.name = data.name;
        found.price = data.price;

        return found;
    }

    static delete(name) {
        // find the index of the name you're looking for
        let found = items.findIndex(v => v.name === name);
        // if the index is not found, throw error message
        if(found === -1) {
            throw { message: "Not Found", status: 404}
        }
        // splice takes the index found in "found", removes it, and doesn't replace it
        items.splice(found, 1);
    }
}

module.exports = Item;
