// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// Додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car {
    constructor(brand, model, year, max_speed, engine_displacement) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.max_speed = max_speed;
        this.engine_displacement = engine_displacement;
    }
}

Car.prototype.drive = function () {
    return `їдемо зі швидкістю ${this.max_speed} на годину`
}
const car_1 = new Car('Audi', 'A4', '2012', 190, '2.0')
console.log(car_1.drive())

// -----------------------------------------------
class CarExtended extends Car {
    constructor(brand, model, year, max_speed, engine_displacement, info) {
        super(brand, model, year, max_speed, engine_displacement);
        this.info = function () {
            return (
                `brand: ${this.brand},
model: ${this.model},
year: ${this.year},
max_speed: ${this.max_speed},
engine_displacement: ${this.engine_displacement}`);
        }
    }
}

const car_2 = new CarExtended('Mercedes-Benz', 'C-Class', '2018', 220, '2.2');
console.log(car_2.info())

// -----------------------------------------------
class CarIncSpead extends Car {
    constructor(brand, model, year, max_speed, engine_displacement, increaseMaxSpeed) {
        super(brand, model, year, max_speed, engine_displacement);
        this.increaseMaxSpeed = function (newSpeed) {
            if (this.max_speed < newSpeed) {
                this.max_speed = newSpeed
            }
            return this.max_speed
        }
    }
}

const car_3 = new CarIncSpead('Mercedes-Benz', 'C-Class', '2018', 220, '2.2');
console.log(car_3.max_speed)
car_3.increaseMaxSpeed(330)
console.log(car_3.max_speed)

// -----------------------------------------------
class archangeYearC extends Car {
    constructor(brand, model, year, max_speed, engine_displacement, changeYear) {
        super(brand, model, year, max_speed, engine_displacement);
        this.changeYear = function (newValue) {
            this.year = newValue
        };
    }
}

const car_4 = new archangeYearC('Tesla', 'Model S', '2020', 200, 'Electric');
car_4.changeYear(2024)
console.log(car_4.year)

// -----------------------------------------------
class CarWithDriver extends Car {
    constructor(brand, model, year, max_speed, engine_displacement, addDrive) {
        super(brand, model, year, max_speed, engine_displacement);
        this.addDriver = function (driver) {
            this.driver = driver
        }
    }
}

const car_5 = new CarWithDriver('Toyota', 'Camry', '2019', 180, '2.5');
car_5.addDriver({name: 'Roman', surname: 'Shevchenko', document: 'ERT523523'})
console.log(car_5)
// -----------------------------------------------


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.error('Finde Cinderella')
function Cinderella(name, age, foot_size) {
    this.name = name;
    this.age = age;
    this.foot_size = foot_size
}
class Prince {
    constructor(name, age, foot_size) {
        this.name = name;
        this.age = age;
        this.princess = {foot_size}
    }
}

const girls = [
    ['Masha', 20, 34],
    ['Sasha', 22, 35],
    ['Zolushka', 25, 36],
    ['Alina', 21, 37],
    ['Natasha', 23, 38],
    ['Valera', 24, 38.5],
    ['Angelina', 26, 39],
    ['Veronika', 28, 40],
    ['Yulia', 22, 40.5],
    ['Valera', 27, 41]
];
let cinderellas = []
for (const girl of girls) {
    cinderellas.push(new Cinderella(girl[0], girl[1], girl[2]))
}

let prince = new Prince('Alexander', 33, 36)

for (const cinderella of cinderellas) {
    if (cinderella.foot_size === prince.princess.foot_size) {
        console.log(cinderella)
    }
}

let cinderella = cinderellas.find((cinderella) =>    cinderella.foot_size === prince.princess.foot_size)
console.log(cinderella)