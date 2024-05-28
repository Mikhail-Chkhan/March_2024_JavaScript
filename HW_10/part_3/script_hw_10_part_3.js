// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,
// в масив sessions зберігається інформація про дату та час відвідування сторінки.
// Є ще сторінка sessions.html (назва довільна),
// при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
// let sessions = []
let link = function () {
    let a = document.createElement('a')
    a.classList.add('sessions')
    a.href = "sessions.html"
    a.innerText = 'click on me'
    document.body.appendChild(a)
}


let creat_div_visit = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(i)
        let div = document.createElement('div')
        div.classList.add('visit_block')
        let date_str = arr[i].visit_date.replace('T', '  ')
        date_str = date_str.replace('Z', '')
        date_str = date_str.substring(0, 20)
        div.innerText = `visit ${i + 1}: ${date_str}`
        document.body.appendChild(div)
    }
}

window.onload = function () {
    if (window.location.href.includes("sessions.html")) {
        let arr = JSON.parse(localStorage.getItem('sessions'))
        creat_div_visit(arr)

    } else {
        link()
        let date = new Date()
        let current_time = date.toISOString()
        if (!localStorage.getItem('sessions')) {
            localStorage.setItem('sessions', JSON.stringify([{'visit_date': current_time}]))
        } else {
            let sessions = JSON.parse(localStorage.getItem('sessions'))
            sessions.push({'visit_date': current_time})
            localStorage.setItem('sessions', JSON.stringify(sessions))
        }
    }
}
// let date = new Date()
// console.log(date.toTimeString())
// console.log(date.toISOString())
// console.log(date.toDateString())
// console.log(date.toUTCString())
// =========================