// - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)
//
let baseUrl = 'http://jsonplaceholder.typicode.com'
let getUsers = baseUrl +'/users'
fetch(getUsers)
    .then(response => response.json())
    .then(response => {
        let users = response
        console.log(users )
        users_table (users)
    });

let users_table = (users) => {
    let div_header = document.createElement('div')
    let div_id_header = document.createElement('div')
    let div_name_header = document.createElement('div')

    div_header.classList.add('header')
    div_id_header.classList.add('id')
    div_name_header.classList.add('name')

    div_id_header.innerText ='user id'
    div_name_header.innerText ='user name'
    div_header.append(div_id_header, div_name_header)
    document.body.appendChild(div_header)

    users.forEach((user)=> {
        let div = document.createElement('div')
        let div_id = document.createElement('div')
        let div_name = document.createElement('div')
        let user_link = document.createElement('a')
        div.id = `${user.id}`
        div.classList.add('user')
        div_id.classList.add('id')
        div_name.classList.add('name')

        user_link.href = `user-details.html?id=${user.id}`
        user_link.innerText =`${user.name}`
        div_id.innerText = `${user.id}`
        div_name.appendChild(user_link)
        div.append(div_id, div_name)

        document.body.appendChild(div)
    })
}