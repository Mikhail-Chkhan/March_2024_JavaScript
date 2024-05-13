// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - 5.1 створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
document.write('<h2>Tack 5.1</h2>')
let areas___rectangle = (side_a, side_b) => side_a * side_b
document.write(`<p>${areas___rectangle(5,6)}</p>`)
// -----------------------------------------------

// - 5.2 створити функцію яка обчислює та повертає площу кола з радіусом r
document.write('<h2>Tack 5.2</h2>')
let area___circle = (radius) => 3.141592 * radius
document.write(`<p>${area___circle(7)}</p>`)
// -----------------------------------------------

// - 5.3 створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let area___cylinder = (height, radius) =>  2 * 3.141592 * radius * height
document.write('<h2>Tack 5.3</h2>')
document.write(`<p>${area___cylinder(10,12)}</p>`)
// -----------------------------------------------

// - 5.4 створити функцію яка приймає масив та виводить кожен його елемент
cars = ["BMW", "Toyota", "Honda", "Ford", "Chevrolet", "Audi"];
let array_output = (array) => {
    for (const item of array) {
        document.write(`<p>${item}  </p>`)
    }
}
document.write('<h2>Tack 5.4</h2>')
array_output(cars)
// -----------------------------------------------

// - 5.5 створити функцію яка створює параграф з текстом. Текст задати через аргумент
document.write('<h2>Tack 5.5</h2>')
let create___paragraf = (text) => {
    document.write(`<p>${text}</p>`)
}
create___paragraf('створити функцію яка створює параграф з текстом. Текст задати через аргумент')
// -----------------------------------------------

// - 5.6 створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
document.write('<h2>Tack 5.6</h2>')
let create_list = (text) => {
    document.write(`<ul>`)
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
create_list('random text')
// -----------------------------------------------

// - 5. 7 створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
document.write('<h2>Tack 5.7</h2>')
let create_list_index = (text, index) => {
    document.write(`<ul>`)
    for (let i = 0; i < index; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
create_list_index('random text', 5)
// -----------------------------------------------

// - 5.8 створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
document.write('<h2>Tack 5.8</h2>')
array = [42, "Hello", true, 3.14, "World", false, 7, "JavaScript", true, 9.99]
let output___arr = (arr) => {
    document.write(`<ul>`)
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`)
    }
    document.write(`</ul>`)
}
output___arr(array)
// -----------------------------------------------

// - 5.9 створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
document.write(`<h2>task 5.9</h2>`)
let users = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Alice", age: 30 },
    { id: 3, name: "Bob", age: 40 },
    { id: 4, name: "Emma", age: 35 },
    { id: 5, name: "Michael", age: 28 },
    { id: 6, name: "Sophia", age: 22 },
    { id: 7, name: "David", age: 45 },
    { id: 8, name: "Olivia", age: 27 },
    { id: 9, name: "Daniel", age: 32 },
    { id: 10, name: "Emily", age: 38 }
]
let display___users = (array) => {
    document.write(`<div class="box_for_user_card">`)
    for (const user of array ) {
        document.write(`<div class="user_card">`)
        for (user_key in user ) {
            document.write(`<p>${user_key}: ${user[user_key]}</p>`)
        }
        document.write(`</div>`)
    }
    document.write(`</div>`)
}
display___users(users)
// -----------------------------------------------

// - 5.10 створити функцію яка повертає найменьше число з масиву
document.write(`<h2>task 5.10</h2>`)
let mas___number = [1,5,5,7,-1,1.2,5,-15,53,23,-2,-700,5]
let search_min_number = (mas) => {
    let min = mas[0];
    for (let i = 1; i < mas.length; i++) {
        if (mas[i]<min) {
            min=mas[i]
        }
    }
    return min
}
document.write(`<p>min = ${search_min_number(mas___number)}</p>`)
// -----------------------------------------------

// - 5.11 створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
document.write(`<h2>task 5.11</h2>`)
let sum = (arr) => {
    let sum = 0
    for (const arrElement of arr) {
        sum = sum + arrElement
    }
    return sum
}
document.write(`<p>sum = ${sum(mas___number)}</p>`)
// -----------------------------------------------

// - 5.12 створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
document.write(`<h2>task 5.12</h2>`)
let swap = (arr,index1,index2) =>{
    if (index1 < arr.length && index2 < arr.length && index1 >=  0 && index2 >= 0) {
        let cache = arr [index1]
        arr [index1] = arr [index2];
        arr [index2] = cache;
        return arr
    }
    else {
        throw new Error("item with that index doesn't have in array")
    }
}
let item_1 = 52
let item_2 = 1
try {
    document.write(`<p> ${swap(mas___number, item_1, item_2)}</p>`)
    document.write(`<p> ${swap(mas___number, item_2, item_1)}<p> `)
}
catch (err) {
    console.error(`item with that index doesn't have in array or index is not number`)
    document.write(`<p>item with that index doesn't have in array or index is not number<p> `)
}
// -----------------------------------------------

// - 5.13 Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
document.write(`<h2>task 5.13</h2>`)
let currencyRates = [
    { currency: 'USD', value: 40 },
    { currency: 'UAH', value: 1 },
    { currency: 'EUR', value: 42 },
    { currency: 'GBP', value: 50 },
    { currency: 'JPY', value: 0.24 },
    { currency: 'AUD', value: 20.1 }
];
let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    let rate = 0
    for (const currencyValue of currencyValues) {
        if (currencyValue.currency === exchangeCurrency) {
            rate = currencyValue.value
        }
    }
    return sumUAH / rate
}
document.write(`<p> ${exchange(10000, currencyRates, 'EUR')}</p>`)
// -----------------------------------------------
