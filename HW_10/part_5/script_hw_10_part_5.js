// - Створити довільний елемент з id = text та створити кнопку.
// Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let button = document.createElement('button')
button.id = 'but'
button.innerText = 'Click to me'
document.body.appendChild(button)

let div = document.createElement('div')
div.id = 'text'
document.body.appendChild(div)

let cleaner = document.getElementById('but')
cleaner.onclick = function () {
    let text = document.getElementById('text')
    text.remove()
}