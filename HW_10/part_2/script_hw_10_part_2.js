// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
window.onload = function () {
    let index= ''
    if (localStorage.getItem('index')) {
        index = localStorage.getItem('index')

    } else {
        index = '0'
    }
    index++
    let div = document.createElement('div')
    div.innerText = `${index}`
    document.body.appendChild(div)
    console.log(index)
    localStorage.setItem('index', index)
}