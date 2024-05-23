//
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
let div_box = document.createElement('div')
div_box.classList.add('div_box')
document.body.appendChild(div_box)

let div_wrap = document.createElement('div')
div_wrap.innerText = 'wrap'
div_wrap.classList.add('wrap')
div_box.appendChild(div_wrap)

let div_collapse = document.createElement('div')
div_collapse.innerText = 'collapse'
div_collapse.classList.add('collapse')
div_box.appendChild(div_collapse)

let div_alpha = document.createElement('div')
div_alpha.innerText = 'alpha'
div_alpha.classList.add('alpha')
div_box.appendChild(div_alpha)

let div_beta = document.createElement('div')
div_beta.innerText = 'beta'
div_beta.classList.add('beta')
div_box.appendChild(div_beta)


let div_copy = div_box.cloneNode()
div_copy.appendChild(div_wrap.cloneNode())
div_copy.appendChild(div_collapse.cloneNode())
div_copy.appendChild(div_alpha.cloneNode())
div_copy.appendChild(div_beta.cloneNode())
document.body.appendChild(div_copy)
