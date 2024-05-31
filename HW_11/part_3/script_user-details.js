const id = new URLSearchParams(window.location.search).get("id");
console.log(id)

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(response => {
        let user = response
        console.log(user)

        let div = document.createElement('div')
        let div_name = document.createElement('div')
        let div_contact = document.createElement('div')
        let div_address = document.createElement('div')
        let div_work = document.createElement('div')
        div.classList.add('user_detail')
        div_name.id = 'id_name'
        div_contact.id = 'id_contact'
        div_address.id = 'id_address'
        div_work.id = 'id_work'

        add_p(user.name, div_name)
        add_p(` (${user.username})`,div_name)
        add_p(`phone:  +${user.phone}`,div_contact)
        add_p(`email:  ${user.email}`,div_contact)
        add_p(`website: ${user.website}`,div_contact)

        add_p(`city: ${user.address.city}`,div_address)
        add_p(`street: ${user.address.street}`,div_address)
        add_p(`suite: ${user.address.suite}`,div_address)
        add_p(`zipcode: ${user.address.zipcode}`,div_address)
        add_p(`lat: ${user.address.geo.lat}`,div_address)
        add_p(`lng: ${user.address.geo.lng}`,div_address)

        add_p(`company name: ${user.company.name}`,div_work)
        add_p(`catch Phrase: ${user.company.catchPhrase}`,div_work)
        add_p(`position: ${user.company.bs}`,div_work)

        div.append(div_name,div_contact,div_work,div_address)
        document.body.appendChild(div)

    });

let add_p = (value,tag) => {
   let p = document.createElement('p')
    p.innerText = value
    tag.appendChild(p)
}