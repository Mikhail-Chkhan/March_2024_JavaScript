// - 3.1 За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
document.write(`<h2 id="number_task">TASK 3.1</h2>`)
for (let i = 0; i < 10; i++) {
    document.write(`<div><p>Lorem ipsum dolor sit amet</p></div>`)
}
// -----------------------------------------------
// - 3.2 За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
document.write(`<br> <h2 id="number_task">TASK 3.2</h2>`)
for (let i = 0; i < 10; i++) {
    document.write(`<div> <p> ${i}  -  Lorem ipsum dolor sit amet.</p></div>`)
}
// -----------------------------------------------
// - 3.3 За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
document.write(`<br>  <h2 id="number_task">TASK 3.3</h2>`)
let i = 0
while (i < 20) {
    document.write(`<h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, tempore?<h1/>`)
    i++
}
// -----------------------------------------------
// - 3.4 За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
document.write(`<br>  <h2 id="number_task">TASK 3.4</h2>`)
let j = 0
while (j < 20) {
    document.write(`<h1> ${j}  Lorem ipsum dolor sit amet, consectetur.</h1>`)
    j++
}
// -----------------------------------------------
// - 3.5 Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву


document.write(`<br>  <h2 id="number_task">TASK 3.5</h2>`)
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// for (const listOfItemsKey in listOfItems) {
//     console.log (listOfItemsKey)
// }
document.write(`<ul>`)
for (let k = 0; k < listOfItems.length; k++) {
    document.write(`<li>${listOfItems[k]}</li>`)
}
document.write(`</ul>`)
// -----------------------------------------------

//    - 3.6 Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// ШАБЛОН
// <div class="product-card">
//       <h3 class="product-title">TITLE. Price - PRICE</h3>
//      <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
document.write(`<br>  <h2 id="number_task">TASK 3.5</h2>`)
for (let k = 0; k < products.length; k++) {
    document.write(`<div class="product-card">`)
    document.write(`<h3>${products[k].title} .Price - ${products[k].price} </h3> `)
    document.write(`<img src='${products[k].image}' alt="product" class="product-image">`)
    document.write(`</div>`)
}
// -----------------------------------------------


//     3.6  - є масив
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
document.write(`<br>  <h2 id="number_task">TASK 3.6</h2>`)

document.write(`<h3 >user status true:</h3>`)
for (let k = 0; k < users.length; k++) {
    if (users[k].status === true) {
        document.write(`<p> name: ${users[k].name}    age: ${users[k].age} </p>`)
}
    
}
document.write(`<h3 >user status false:</h3>`)
let index = 0
while (index<users.length) {
    if (users[index].status === false) {
        document.write(`<p> name: ${users[index].name}    age: ${users[index].age} </p>`)
    }
    index++
}

document.write(`<h3 >user age more 30:</h3>`)
for (const user in users) {
    if (users[user].age > 30) {
        document.write(`<p> name: ${users[user].name}   age: ${users[user].age} </p>`)
    }
}
