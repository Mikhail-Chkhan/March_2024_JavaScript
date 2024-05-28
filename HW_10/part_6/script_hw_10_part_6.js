// - створити інпут який приймає вік людини та кнопку яка підтверджує дію
// 2При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let form = document.createElement('form')
let input = document.createElement('input')
let button = document.createElement('button')

form.id = 'check_age'
input.id = 'user_age'
button.id = 'button_age'

button.innerText = 'Send'
input.name = 'age'
input.placeholder = 'enter your age. Example: 31'

form.append(input, button)
document.body.appendChild(form)

let check_fun = (age) => {
    if (!isFinite(age) || age < 0) {
        // console.log(`Your data is incorrect: ${age}`)
        localStorage.setItem('age', '')
        localStorage.setItem('adultContent', 'false')
        modal_win(`Access denied \n Your data is incorrect: ${age}`)
    } else if (age < 18) {
        // console.log(`You are too young: ${age}`)
        localStorage.setItem('age', age)
        localStorage.setItem('adultContent', 'false')
        modal_win(`Access denied \n You are too young: ${age}`)
    } else {

        localStorage.setItem('age', age)
        localStorage.setItem('adultContent', 'true')
        modal_win(`Welcome`)
    }
}

let modal_win = (massage) => {
    let div = document.createElement('div')
    let p = document.createElement('p')
    let button = document.createElement('button')

    div.id = 'modal'
    p.id = 'text'
    button.id = 'ok'

    p.innerText = `${massage}`
    button.innerText = 'OK'

    div.append(p, button) // template modal window
    document.body.appendChild(div)

    let ok = document.getElementById('ok')
    ok.onclick = function () {
        let div = document.getElementById('modal')
        div.remove()
    }
}

let check = document.getElementById('check_age')
check.onsubmit = function (ev) {
    ev.preventDefault()
    check_fun(this.age.value)
}