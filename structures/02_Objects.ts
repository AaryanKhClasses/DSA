// Objects:
// An object is a collection of key-value pairs, where each key is a string (or Symbol) and the value can be any data type.
// Objects are used to store data in a structured way, allowing for easy access and manipulation of the data.
// In TypeScript, objects can be defined using the `object` type or by creating an interface or class.
// For defining an object, we need to specify the structure of the object, including the types of its properties.
// Note than an object is not iterable like an array, so we cannot use a for loop to iterate through its properties directly.
// Example of an object representing a person
type PersonInfo = {
    name: string
    age: number
    isEmployed?: boolean
}

let person: PersonInfo = {
    name: 'John Doe',
    age: 30,
    isEmployed: true
}

console.log(person) // Output: { name: 'John Doe', age: 30, isEmployed: true }

// Accessing properties of an object
console.log(person.name) // Output: John Doe
console.log(person['age']) // Output: 30
// Here we can access properties using both dot notation and bracket notation.
// For bracket notation, the property name must be a string or a variable containing a string.

// Adding a new property to an object
// person.email = 'john.doe@example.com' 
// This adds a new property `email` to the `person` object. However, this is not type-safe.
// To ensure type safety, we should define the `email` property in the `Person` interface.

// Deleting a property from an object
delete person.isEmployed // This removes the `isEmployed` property from the `person` object.
// Note that deleting properties is not recommended in TypeScript as it can lead to runtime errors if the property is accessed later.
// Also, for deleting properties, the property must be optional in the interface or type definition.

// Objects with functions (methods):
type Car = {
    make: string
    model: string
    year: number
    logName: () => void // Method to get the car's name
}

let testCar: Car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020,
    logName: function() {
        console.log(`${this.year} ${this.make} ${this.model}`)
    }
}

testCar.logName() // Output: 2020 Toyota Corolla

// Object.keys() and Object.values():
// These methods are used to get the keys and values of an object as arrays.
console.log(Object.keys(person)) // Output: [ 'name', 'age' ]
console.log(Object.values(person)) // Output: [ 'John Doe', 30 ]

// Object.entries() returns an array of key-value pairs.
console.log(Object.entries(person)) // Output: [ [ 'name', 'John Doe' ], [ 'age', 30 ] ]

// Merging objects:
type AdditionalPersonInfo = {
    email: string
    phone: string
}

let additionalInfo: AdditionalPersonInfo = {
    email: 'john.doe@example.com',
    phone: '123-456-7890'
}
// Using Object.assign() to merge objects
let mergedPerson = Object.assign({}, person, additionalInfo)
console.log(mergedPerson) // Output: { name: 'John Doe', age: 30, email: 'john.doe@example.com', phone: '123-456-7890' }
// Alternatively, we can use the spread operator to merge objects
let mergedPersonWithSpread = { ...person, ...additionalInfo }
console.log(mergedPersonWithSpread) // Output: { name: 'John Doe', age: 30, email: 'john.doe@example.com', phone: '123-456-7890' }
// Note that when merging objects, if there are properties with the same name, the last one will overwrite the previous ones.
// TypeScript also allows for more complex object structures, such as nested objects and arrays within objects.
