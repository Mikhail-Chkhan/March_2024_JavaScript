// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
let users = [
    {name: 'John', age: 25, id: 1},
    {name: 'Jane', age: 30, id: 2},
    {name: 'Mike', age: 35, id: 3},
    {name: 'Alice', age: 28, id: 4},
    {name: 'Bob', age: 45, id: 5},
    {name: 'Mary', age: 32, id: 6},
    {name: 'Tom', age: 40, id: 7},
    {name: 'Anna', age: 22, id: 8},
    {name: 'Jack', age: 50, id: 9},
    {name: 'Laura', age: 27, id: 10},
    {name: 'John', age: 33, id: 11},
    {name: 'Jane', age: 44, id: 12},
    {name: 'Mike', age: 29, id: 13},
    {name: 'Alice', age: 23, id: 14},
    {name: 'Bob', age: 38, id: 15},
    {name: 'Mary', age: 26, id: 16},
    {name: 'Tom', age: 34, id: 17},
    {name: 'Anna', age: 36, id: 18},
    {name: 'Jack', age: 41, id: 19},
    {name: 'Laura', age: 37, id: 20},
    {name: 'John', age: 31, id: 21},
    {name: 'Jane', age: 52, id: 22},
    {name: 'Mike', age: 24, id: 23},
    {name: 'Alice', age: 43, id: 24},
    {name: 'Bob', age: 48, id: 25},
    {name: 'Mary', age: 27, id: 26},
    {name: 'Tom', age: 39, id: 27},
    {name: 'Anna', age: 29, id: 28},
    {name: 'Jack', age: 35, id: 29},
    {name: 'Laura', age: 45, id: 30},
    {name: 'John', age: 40, id: 31},
    {name: 'Jane', age: 38, id: 32},
    {name: 'Mike', age: 32, id: 33},
    {name: 'Alice', age: 31, id: 34},
    {name: 'Bob', age: 44, id: 35},
    {name: 'Mary', age: 50, id: 36},
    {name: 'Tom', age: 28, id: 37},
    {name: 'Anna', age: 39, id: 38},
    {name: 'Jack', age: 33, id: 39},
    {name: 'Laura', age: 29, id: 40},
    {name: 'John', age: 36, id: 41},
    {name: 'Jane', age: 42, id: 42},
    {name: 'Mike', age: 26, id: 43},
    {name: 'Alice', age: 47, id: 44},
    {name: 'Bob', age: 53, id: 45},
    {name: 'Mary', age: 31, id: 46},
    {name: 'Tom', age: 46, id: 47},
    {name: 'Anna', age: 25, id: 48},
    {name: 'Jack', age: 42, id: 49},
    {name: 'Laura', age: 33, id: 50},
    {name: 'John', age: 29, id: 51},
    {name: 'Jane', age: 49, id: 52},
    {name: 'Mike', age: 37, id: 53},
    {name: 'Alice', age: 32, id: 54},
    {name: 'Bob', age: 41, id: 55},
    {name: 'Mary', age: 36, id: 56},
    {name: 'Tom', age: 30, id: 57},
    {name: 'Anna', age: 48, id: 58},
    {name: 'Jack', age: 39, id: 59},
    {name: 'Laura', age: 28, id: 60},
    {name: 'John', age: 34, id: 61},
    {name: 'Jane', age: 40, id: 62},
    {name: 'Mike', age: 33, id: 63},
    {name: 'Alice', age: 30, id: 64},
    {name: 'Bob', age: 50, id: 65},
    {name: 'Mary', age: 27, id: 66},
    {name: 'Tom', age: 42, id: 67},
    {name: 'Anna', age: 44, id: 68},
    {name: 'Jack', age: 46, id: 69},
    {name: 'Laura', age: 35, id: 70},
    {name: 'John', age: 41, id: 71},
    {name: 'Jane', age: 51, id: 72},
    {name: 'Mike', age: 23, id: 73},
    {name: 'Alice', age: 34, id: 74},
    {name: 'Bob', age: 38, id: 75},
    {name: 'Mary', age: 49, id: 76},
    {name: 'Tom', age: 45, id: 77},
    {name: 'Anna', age: 37, id: 78},
    {name: 'Jack', age: 28, id: 79},
    {name: 'Laura', age: 40, id: 80},
    {name: 'John', age: 35, id: 81},
    {name: 'Jane', age: 39, id: 82},
    {name: 'Mike', age: 31, id: 83},
    {name: 'Alice', age: 27, id: 84},
    {name: 'Bob', age: 46, id: 85},
    {name: 'Mary', age: 30, id: 86},
    {name: 'Tom', age: 33, id: 87},
    {name: 'Anna', age: 43, id: 88},
    {name: 'Jack', age: 47, id: 89},
    {name: 'Laura', age: 50, id: 90},
    {name: 'John', age: 32, id: 91},
    {name: 'Jane', age: 48, id: 92},
    {name: 'Mike', age: 22, id: 93},
    {name: 'Alice', age: 39, id: 94},
    {name: 'Bob', age: 51, id: 95},
    {name: 'Mary', age: 25, id: 96},
    {name: 'Tom', age: 43, id: 97},
    {name: 'Anna', age: 38, id: 98},
    {name: 'Jack', age: 36, id: 99},
    {name: 'Laura', age: 37, id: 100}
]

let watch_users = (arr, start, step) => {

    for (let i =0; i < step; i++) {
        let div = document.createElement('div')
        div.classList.add('user_card')
        let id = document.createElement('p')
        let name = document.createElement('p')
        let age = document.createElement('p')

        id.innerText = `id: ${arr[start].id}`
        name.innerText = `name: ${arr[start].name}`
        age.innerText = `age: ${arr[start].age}`
        start++

        let box = document.getElementById('div_box')
        div.append(id, name, age)
        box.appendChild(div)
    }
}

window.onload = function () {
    localStorage.setItem('page', '1')
    let div = document.createElement('div')
    div.id = 'div_box'
    document.body.appendChild(div)
    watch_users(users, 0, 10)
}


let prev = document.createElement('button')
let next = document.createElement('button')
prev.id = 'prev'
next.id = 'next'
prev.innerText = 'Prev'
next.innerText = 'Next'
document.body.append(prev, next)

let cl_prev = document.getElementById('prev')
cl_prev.onclick = function () {
    let page = localStorage.getItem('page')
    page--
    if (page > 0) {
        localStorage.setItem('page', page)
        let box = document.getElementById('div_box')
        box.innerText = ''
        // watch_users(users, (page * 10 - 1), (page * 10 + 10 - 1))
        watch_users(users, page * 10 , 10)
    }
}


let cl_next = document.getElementById('next')
cl_next.onclick = function () {
    let page = localStorage.getItem('page')
    page++
    if (page*10 < users.length) {
        localStorage.setItem('page', page)
        let box = document.getElementById('div_box')
        box.innerText = ''
        // watch_users(users, (page * 10 - 1), (page * 10 + 10 - 1))
        watch_users(users, page * 10, 10)
    }
}