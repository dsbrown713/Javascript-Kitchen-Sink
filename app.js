const num_of_states = 50
let my_name = "Dalton"
let nine = 5+4

function sayHello() {
    console.log("Hello World!")
}

sayHello()

function checkAge(name, age) {
    if (age < 21) {
        console.log("Sorry %s, you aren't old enough to view this page!", name)
    } else {
        console.log("Welcome to the club %s", name)
    }
}

checkAge("Charles", 21)
checkAge("Abby", 27)
checkAge("James", 18)
checkAge("John", 17)

let fav_veggies = ["Sweet Potato", "Spinach", "Asparagus"]

for (let veg of fav_veggies) {
    console.log(veg)
}

let pet = {
    "name": "Jesse",
    "breed": "Border Collie"
}

console.log("My dog's name is %s and he is a %s", pet.name, pet.breed)

let people = [
    {name: "Kayla", age: 19},
    {name: "Ricky", age: 28},
    {name: "Robert", age: 25},
    {name: "Carina", age: 24},
    {name: "Erik", age: 18}
]

for (let person of people) {
    checkAge(person.name, person.age)
}

function getLength(word) {
    return word.length
}

let world_len = getLength("Hello World!")
if (world_len % 2 == 0 ) {
    console.log('The world is nice and even!')
} else {
    console.log('The world is an odd place!')
}

