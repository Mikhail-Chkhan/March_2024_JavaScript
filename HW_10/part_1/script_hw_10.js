// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів,
// та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
let form1 = document.createElement('form')
form1.classList.add('create_user')

let name = document.createElement('input')
name.name = 'name'
name.className = 'name'
name.placeholder = 'name'

let surname = document.createElement('input')
surname.name = 'surname'
surname.className = 'surname'
surname.placeholder = 'surname'

let age = document.createElement('input')
age.name = 'age'
age.className = 'age'
age.placeholder = 'age'

let button = document.createElement('button')
button.name = 'button'
button.className = 'button'
button.innerText = 'create'

form1.append(name, surname, age, button)
document.body.appendChild(form1)

let users = []

let creat_user_div = (user) => {
    let div = document.createElement('div')
    div.className = 'user'
    let p_name = document.createElement('p')
    p_name.innerText = `user name: ${user.name}`
    let p_surname = document.createElement('p')
    p_surname.innerText = `user surname: ${user.surname}`
    let p_age = document.createElement('p')
    p_age.innerText = `age: ${user.age}`
    div.append(p_name, p_surname, p_age)
    document.body.appendChild(div)
}

form1.onsubmit = function (create_user) {
    create_user.preventDefault()
    let user = {
        name: this.name.value,
        surname: this.surname.value,
        age: this.age.value,
    }
    users.push(user)
    console.log(users)
    creat_user_div(users[users.length-1])
}




// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
//
//
//
//
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//
//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
//
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається