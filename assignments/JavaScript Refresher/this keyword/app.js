// arrow functions help us with arrow functions.
// this keyword.

class NameField {
    constructor(name) {
        const field = document.createElement('li');
        field.textContent = name;
        const nameListHook = document.querySelector('#names');
        nameListHook.appendChild(field);
    }
}

class NameGenerator { //this is the class
    constructor() { // this is the python equivalent of self __init__ class initializer called constructor
        const btn = document.querySelector('button'); // select html tag
        this.names = ['David', 'Ameerah']; // attribute a variable accesible anywhere within the class. "this" is the equivalent of self in python.
        this.currentName = 0;
        btn.addEventListener('click', () => {
            this.addName()
        } ); // this. used to access class methods/attributes
        // without the () function has to wait for event listener.

        // this in more cases refers to the class itself unless the "this" is being called by another object like in this case the button.
        // by adding .bind(this) at the end of a method call it forces "this" behavior to be the one attached to the class instead of what called it.
        // by using anonymous arrow functions "this" problem goes away completely.    
    }

    addName() { // this is a class method (doesn't use the function keyword)
        const name = new NameField(this.names[this.currentName]); // creating an instance of another class.
        this.currentName++;
        // handle the end of the array
        if (this.currentName > this.names.length - 1) {
            this.currentName = 0;
        }
    }
}

const gen = new NameGenerator(); // this is the class instance (requires the use of new keyword initialize object.)