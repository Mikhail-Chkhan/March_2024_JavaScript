// - 4.1 створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function ares (side_a, side_b){
    let result = side_a * side_b
    console.log(result)
}
console.error('task_4.1')
ares (12,18)
// -----------------------------------------------

// - 4.2 створити функцію яка обчислює та повертає площу кола з радіусом r
function area___circle (radius){
    return 3.141592 * radius
}
console.error('task_4.2')
console.log(area___circle(3))
// -----------------------------------------------

// - 4.3 створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// S(біч.) = 2πRH
function area___cylinder (height, radius) {
    return 2 * 3.141592 * radius * height
}
console.error('task_4.3')
console.log(area___cylinder(21,15))
// -----------------------------------------------

// - 4.4 створити функцію яка приймає масив та виводить кожен його елемент
cars = ["BMW", "Toyota", "Honda", "Ford", "Chevrolet", "Audi"];
function output___cars (arr) {
    for (const arrElement of arr) {
        console.log(arrElement)
    }
    }
console.error('task_4.3')
output___cars(cars)
// -----------------------------------------------
// - 4.5 створити функцію яка створює параграф з текстом. Текст задати через аргумент
function create___paragraf (text) {
    document.write(`<p>${text}</p>`)
}
document.write(`<h3>task 4.5</h3>`)
create___paragraf('створити функцію яка створює параграф з текстом. Текст задати через аргумент')
// -----------------------------------------------
// - 4.6 створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function create___list (text) {
    document.write(`<ul>`)
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
document.write(`<h3>task 4.6</h3>`)
create___list('text for task 4.6')
// -----------------------------------------------

// - 4.7 створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function create___list_with_index (text,index) {
    document.write(`<ul>`)
    for (let i = 0; i < index; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
document.write(`<h3>task 4.7</h3>`)
create___list_with_index('text for task 4.7', 7)
// -----------------------------------------------

// - 4.8 створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
array = [42, "Hello", true, 3.14, "World", false, 7, "JavaScript", true, 9.99]
function output___arr (arr) {
    document.write(`<ul>`)
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`)
    }
    document.write(`</ul>`)
}
document.write(`<h3>task 4.8</h3>`)
output___arr(array)
// -----------------------------------------------

// - 4.9 створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
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
function display___users (array) {
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
document.write(`<h3>task 4.9</h3>`)
display___users(users)
// -----------------------------------------------

// - 4.10 створити функцію яка повертає найменьше число з масиву
let mas___number = [1,5,5,7,-1,1.2,5,-15,53,23,-2,-700,5]
function search_min_number (mas) {
    let min = mas[0];
    for (let i = 1; i < mas.length; i++) {
        if (mas[i]<min) {
            min=mas[i]
        }
    }
    return min
}
console.error('task_4.10')
console.log(search_min_number(mas___number))
// -----------------------------------------------

// - 4.11 створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
function  sum (arr) {
    let sum = 0
    for (const arrElement of arr) {
        sum = sum + arrElement
    }
    return sum
}
console.error('task_4.11')
console.log(sum(mas___number))
// -----------------------------------------------

// - 4.12 створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
//          Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap (arr,index1,index2) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (i!==index1 && i!==index2){
            result[i] = arr[i]
        }
        else if (i === index1){
            result[i] = arr[index2]
        }
        else  if (i === index2) {
            result[i] = arr[index1]
        }

    }
    console.log(result)
}
console.error('task_4.12')
swap(mas___number, 1,7)
swap(mas___number, 7,1)
// -----------------------------------------------

// - 4.13 Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//          Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let currencyRates = [
    { currency: 'USD', value: 40 },
    { currency: 'UAH', value: 1 },
    { currency: 'EUR', value: 42 },
    { currency: 'GBP', value: 50 },
    { currency: 'JPY', value: 0.24 },
    { currency: 'AUD', value: 20.1 }
];
//debugger
function exchange(sumUAH,currencyValues,exchangeCurrency) {
    let rate = 0
    for (const currencyValue of currencyValues) {
        if (currencyValue.currency === exchangeCurrency) {
            rate = currencyValue.value
        }
    }
    console.log ( sumUAH / rate )
}
exchange(10000, currencyRates, 'EUR')