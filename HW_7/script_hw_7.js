// - 7.1 Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User (id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone
}
/// -----------------------------------------------

// 7.2 створити пустий масив, наповнити його 10 об'єктами new User(....)
console.error('Task 7.2')
let Users  = []
let user_1 = new User(8, 'Masha','Smokovich', 'mail_1@gmail.com', '+380440000001')
let user_2 = new User(7, 'Misha','Mokovich', 'mail_2@gmail.com', '+380440000002')
let user_3 = new User(3, 'Sasha','Palayn', 'mail_3@gmail.com', '+380440000003')
let user_4 = new User(10, 'Dasha','Batun', 'mail_4@gmail.com', '+380440000004')
let user_5 = new User(5, 'Vasay','Sarcisov', 'mail_5@gmail.com', '+380440000005')
let user_6 = new User(6, 'Petay','Grinvich', 'mail_6@gmail.com', '+380440000006')
let user_7 = new User(2, 'Ruslan','Paranovich', 'mail71@gmail.com', '+380440000007')
let user_8 = new User(1, 'Denis','Myshkin', 'mail_8@gmail.com', '+380440000008')
let user_9 = new User(9, 'Alina','Ananas', 'mail_9@gmail.com', '+380440000009')
let user_10 = new User(4, 'Marina','Derby', 'mail_10@gmail.com', '+380440000010')
Users.push(user_1)
Users.push(user_2)
Users.push(user_3)
Users.push(user_4)
Users.push(user_5)
Users.push(user_6)
Users.push(user_7)
Users.push(user_8)
Users.push(user_9)
Users.push(user_10)
console.log(Users)
/// -----------------------------------------------

// - 7.3 Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.error('Task 7.3')
let Users_paired = Users.filter((user) => {
        return user.id  % 2 === 0
})
console.log(Users_paired)
/// -----------------------------------------------

// - 7.4 Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.error('Task 7.4')
let Users_sort_ASC = Users.sort((user_1, user_2) => user_1.id - user_2.id)
console.log(Users_sort_ASC)
// let Users_sort_DESC = Users.sort((user_1, user_2) => user_2.id - user_1.id)
// console.log(Users_sort_DESC)
/// -----------------------------------------------

// - 7.5 створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

// class Client {
//     constructor (id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }

class Client extends User{
    constructor (id, name, surname , email, phone, order) {
        super (id, name, surname , email, phone);
        this.order = order;

    }
}
/// -----------------------------------------------

// 7.6 створити пустий масив, наповнити його 10 об'єктами Client
const orders = [
    {id: 1, order: ["backpack","passport","tickets","sunglasses","sunscreen","camera","map"]},
    {id: 2, order: ["chicken breast","potatoes","garlic","olive oil","rosemary","salt"]},
    {id: 3, order: ["notebooks","pencils","erasers","ruler","glue"]},
    {id: 5, order: ["hammer","nails","screwdriver","wrench","measuring tape","level","saw","pliers","drill"]},
    {id: 4, order: ["blanket","basket","sandwiches","fruits","juice","napkins","paper plates","cups"]},
    {id: 6, order: ["broom","mop","vacuum","duster"]},
    {id: 8, order: ["shovel","rake","hose"]},
    {id: 7, order: ["flour","sugar","baking powder","eggs","butter","milk","vanilla extract","salt","baking soda","chocolate chips"]},
    {id: 9, order: ["soccer ball","tennis racket","basketball","running shoes","yoga mat","dumbbells","helmet"]},
    {id: 10, order: ["food bowl","water bowl","leash","collar","pet bed","toys"]}
];

let clients = Users.map ((user) => {
    let find_order =  orders.find ((id) => id.id === user.id)
    user.order = find_order.order
    return user
})
console.error('Task 7.6')
console.log(clients)
/// -----------------------------------------------

// - 7.7 Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let clients_order_sort = clients.sort ((client_1, client_2) => client_1.order.length - client_2.order.length)
console.error('Task 7.7')
console.log(clients_order_sort)
// -----------------------------------------------

//Task 7.8
// - творити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
console.error('Task 7.8')
function Car (brand, model, year, max_speed, engine_displacement) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.max_speed = max_speed;
    this.engine_displacement = engine_displacement
}
const car_1 = new Car('Audi', 'A4','2012',190, '2.0')
//const car_2 = new Car('BMW', 'X5', '2015', 250, '3.0');
// const car_3 = new Car('Mercedes-Benz', 'C-Class', '2018', 220, '2.2');
//const car_4 = new Car('Tesla', 'Model S', '2020', 200, 'Electric');
// const car_5 = new Car('Toyota', 'Camry', '2019', 180, '2.5');
console.log(car_1)
// -----------------------------------------------

// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
Car.prototype.drive = function () {
    return `їдемо зі швидкістю ${this.max_speed}`;
};

const car_2 = new Car('BMW', 'X5', '2015', 250, '3.0');
console.log(car_2.drive())
// -----------------------------------------------

// додати в об'єкт функції:
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
Car.prototype.info = function () {
    return (
`brand: ${this.brand},
model: ${this.model},
year: ${this.year},
max_speed: ${this.max_speed},
engine_displacement: ${this.engine_displacement}`
    )
}
const car_3 = new Car('Mercedes-Benz', 'C-Class', '2018', 220, '2.2');
console.log(car_3.info())
// -----------------------------------------------

// додати в об'єкт функції:
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
Car.prototype.increaseMaxSpeed= function (newSpeed) {
    if (this.max_speed < newSpeed) {
        this.max_speed = newSpeed
    }
    return this.max_speed
}
const car_4 = new Car('Tesla', 'Model S', '2020', 200, 'Electric');
console.log(car_4.max_speed)
console.log(car_4.increaseMaxSpeed(230))
console.log(car_4.max_speed)
// -----------------------------------------------

// додати в об'єкт функції:
// -- changeYear (newValue) - змінює рік випуску на значення newValue
Car.prototype.changeYear = function (newValue) {
    this.year =newValue
}
const car_5 = new Car('Toyota', 'Camry', '2019', 180, '2.5');
car_5.changeYear('2012')
console.log(car_5.year)
// -----------------------------------------------

// додати в об'єкт функції:
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
Car.prototype.addDriver = function (driver) {
    this.driver = driver
}
const car_6 = new Car('Toyota', 'Camry', '2019', 180, '2.5')
car_6.addDriver({name:'Roman', surname:'Shevchenko', document:'ERT523523'})
console.log(car_6)
// -----------------------------------------------





//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
//
//
// Через Array.prototype. створити власний foreach, filter, map