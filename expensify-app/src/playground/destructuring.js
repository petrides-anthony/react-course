//
// Object Destructuring
//

// const person = {
//     name: 'Tony',
//     age: 27,
//     location: {
//         city: 'London',
//         temp: 92
//     }
// };

// const {name: firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age}.`)

// const {city, temp: temperature} = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} degrees in ${city}.`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Publish'} = book.publisher;

// console.log(publisherName); // Penguin, Self-Publish

//
// Array Destructuring
//

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
// const [, city, state = 'New York', zip] = address;
// console.log(`You are in ${city} ${state}.`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item;

// grab first and third items using array destructuring
console.log(`A medium ${itemName} costs ${mediumPrice}`);