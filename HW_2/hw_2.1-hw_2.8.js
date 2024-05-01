// Масиви та об'єкти:
// - 2.1. Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let colors = ['green', 'blue', 'black', 'white', 'pink', 'violet', 'orange', 'gold', 'deep purple', 'grey'];

console.error('task_2.1');
console.log(colors);
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(colors[3]);
console.log(colors[4]);
console.log(colors[5]);
console.log(colors[6]);
console.log(colors[7]);
console.log(colors[8]);
console.log(colors[9]);
//---------------------end--------------------------


// - 2.2. Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book_1 = {
    title: '1984',
    pageCount: 120,
    genre: 'Science Fiction'
}
let book_2 = {
    title: 'The Master and Margarita',
    pageCount: 300,
    genre: 'Magical Realism'
}
let book_3 = {
    title: 'Harry Potter and the Philosopher’s Stone',
    pageCount: 500,
    genre: 'Fantasy'
}
//---------------------end--------------------------


// - 2.3 Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// let authors = [];
let book_4 = {
    title: '1984',
    pageCount: 120,
    genre: 'Science Fiction',
    authors: ['George Orwell', '43']
}
let book_5 = {
    title: 'The Master and Margarita',
    pageCount: 300,
    genre: 'Magical Realism',
    authors: ['Mikhail Bulgakov', '54']
}
let book_6 = {
    title: 'Harry Potter and the Philosopher’s Stone',
    pageCount: 500,
    genre: 'Fantasy',
    authors: ['J.K. Rowling', '45']
}
//---------------------end--------------------------


// - 2.4 Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача
let users = [
    {
        name: 'James',
        username: 'james-93',
        password: 'Lirecre-11'
    }, {
        name: 'Robert',
        username: 'robert-92',
        password: '12345678'
    }, {
        name: 'John',
        username: 'john_pohn_33',
        password: 'vfdLLL-23'
    }, {
        name: 'Michael',
        username: 'mike_33123',
        password: 'Ndnd-2f'
    }, {
        name: 'David',
        username: 'tsar_david',
        password: 'erer-77df'
    }, {
        name: 'William',
        username: 'will_bill_mill',
        password: '11111111'
    }, {
        name: 'Richard',
        username: 'king_rick',
        password: 'admin-11'
    }, {
        name: 'Joseph',
        username: 'joseph_789',
        password: 'varivYY_23'
    }, {
        name: 'Thomas',
        username: 'Tom_best_man',
        password: 'pas$w0rd'
    }, {
        name: 'Christopher',
        username: 'strange_person',
        password: '00000000'
    }
];
console.error('task_2.4')
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);
//---------------------end--------------------------


// - 2.5. описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
// Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2.
// Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
let temp_data = [
    {
        date: '2024-04-01',
        temp_morning: '7',
        temp_afternoon: '15',
        temp_evening: '10'
    }, {
        date: '2024-04-02',
        temp_morning: '8',
        temp_afternoon: '23',
        temp_evening: '12'
    }, {
        date: '2024-04-03',
        temp_morning: '5',
        temp_afternoon: '12',
        temp_evening: '5'
    }, {
        date: '2024-04-04',
        temp_morning: '12',
        temp_afternoon: '22',
        temp_evening: '9'
    }, {
        date: '2024-04-05',
        temp_morning: '8',
        temp_afternoon: '21',
        temp_evening: '10'
    }, {
        date: '2024-04-06',
        temp_morning: '7',
        temp_afternoon: '19',
        temp_evening: '8'
    }, {
        date: '2024-04-07',
        temp_morning: '8',
        temp_afternoon: '23',
        temp_evening: '10'
    }
]
//---------------------end--------------------------


// Логічні розгалуження:
//  - 2.6. Є змінна х, якій ви надаєте довільне числове значення.
//    Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//    Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = [1, 0, -3];
if (x[0] !== 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}

if (x[0] !== 1) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}

if (x[0] !== 2) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}
//---------------------end--------------------------


// - 2.7. Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години
// попадає число (в першу, другу, третю или четверту частину години).
let time = 33

console.error('task 2.7')
if (time >= 0 && time < 15) {
    console.log('I part of the hour')
} else if (time >= 15 && time < 30) {
    console.log('II part of the hour')
} else if (time >= 30 && time < 45) {
    console.log('III part of the hour')
} else if (time >= 45 && time < 60) {
    console.log('IV part of the hour')
} else {
    console.log('error number')
}
//---------------------end--------------------------


// - 2.8. У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).

let day = 20;
console.error('task 2.8')
if (day > 0 && day <= 10) {
    console.log('I part of the month')
} else {
    if (day > 10 && day <= 20) {
        console.log('II part of the month')
    } else {
        if (day > 20 && day <= 31) {

        } else {
            console.log('error number')
        }
    }
}
//---------------------end--------------------------
