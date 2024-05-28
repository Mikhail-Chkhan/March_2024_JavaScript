// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

let form = document.createElement('form')
let colum = document.createElement('input')
let row = document.createElement('input')
let content = document.createElement('input')
let button = document.createElement('button')

form.id = 'create_table'
colum.id = 'colum'
row.id = 'row'
content.id = 'content'
button.id = 'button'

colum.name = 'colum'
row.name = 'row'
content.name = 'content'

colum.placeholder = 'Enter the number of columns'
row.placeholder = 'Enter the number of rows'
content.placeholder = 'Enter the text for table'
button.innerText = 'Create'

form.append(colum, row, content, button)
document.body.appendChild(form)

let create_table = (columns, rows, content) => {
    let form = document.getElementById('create_table')
    console.log(columns, rows, content)
    form.remove()

    let div_box = document.createElement('div')
    div_box.classList.add('box')

    let i = 0
    while (i < columns) {
        let div_columns = document.createElement('div')
        div_columns.classList.add('columns')
        let j = 0
        while (j < rows) {
            let div_rows = document.createElement('div')
            div_rows.classList.add('rows')
            div_rows.innerText = content
            div_columns.appendChild(div_rows)
            j++
        }
        div_box.appendChild(div_columns)
        i++
    }
    document.body.appendChild(div_box)

}

form.onsubmit = function (ev) {
    ev.preventDefault()

    create_table(this.colum.value, this.row.value, this.content.value)
}