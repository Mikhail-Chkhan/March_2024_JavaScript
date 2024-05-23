// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let Arr = ['Main', 'Products', 'About us', 'Contacts']

//VERSION 1
// let ul = document.createElement('ul')
// for (const item of Arr) {
//     let li = document.createElement('li')
//     li.innerText = item
//     ul.appendChild(li)
// }
// document.body.appendChild(ul)
//_________________________________________

// VERSION 2
let ul_list = (arr) => {
    let ul = document.createElement('ul')
    for (const item of arr) {
        let li = document.createElement('li')
        li.innerText = item
        ul.appendChild(li)
    }
    return ul
}
let list = ul_list(Arr)
document.body.appendChild(list)
//_________________________________________


// - Є масив. Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let div_box = document.createElement('div')
div_box.classList.add('div_box')

for (const course of coursesAndDurationArray) {
    let div = document.createElement('div')
    div.classList.add('div_course')
    let h2 = document.createElement('h2')
    h2.innerText = course.title
    let p = document.createElement('p')
    p.innerText = 'Duration: ' + course.monthDuration
    div.append(h2, p)
    div_box.appendChild(div)
}
document.body.appendChild(div_box)
//______________________________________________________________________


// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
// з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

let courses_output = (courses) => {
    let div_box = document.createElement('div')
    div_box.classList.add('div_box')
    courses.forEach((course) => {
        let div = document.createElement('div')
        div.classList.add('item')
        let h1 = document.createElement('h1')
        h1.classList.add('heading')
        h1.innerText = course.title
        let p = document.createElement('p')
        p.classList.add('description')
        p.innerText = 'Duration: ' + course.monthDuration
        div.append(h1, p)
        div_box.appendChild(div)
    })
    document.body.appendChild(div_box)
}
courses_output(coursesAndDurationArray)