// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
fetch('https://dummyjson.com/carts')
    .then(res => res.json())
fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    // .then(console.log)
    .then(res => {
        let shoppBasket = res
        console.log(shoppBasket.carts)
        carts(shoppBasket.carts)
    })


let main = document.createElement('main')
main.id = 'main'
document.body.appendChild(main)


let carts = (carts) => {
    carts.forEach((cart) => {
        let div_order = document.createElement('div')
        let div_detail_order = document.createElement('div')
        div_order.classList.add('order')
        div_detail_order.classList.add('detail_order')

        let orderId = document.createElement('h3')
        let discountedTotal = document.createElement('p')
        let total = document.createElement('p')
        let totalProducts = document.createElement('p')
        let totalQuantity = document.createElement('p')
        let userId = document.createElement('p')
        orderId.innerText = `Order ID:  ${cart.id}`
        discountedTotal.innerText = `Discounted Total:  ${cart.discountedTotal}`
        total.innerText = `Total:  ${cart.total}`
        totalProducts.innerText = `Total Products:  ${cart.totalProducts}`
        totalQuantity.innerText = `Total Quantity:  ${cart.totalQuantity}`
        userId.innerText = `User ID:  ${cart.userId}`

        // discountedTotal
        // total
        // totalProducts
        // totalQuantity
        // userId

        div_detail_order.append(orderId, userId, totalProducts, totalQuantity, total, discountedTotal)
        div_order.appendChild(div_detail_order)
        for (const item of cart.products) {
            product_card (item, div_order)

        }

        let main = document.getElementById('main')
        main.appendChild(div_order)


    })
}

let product_card = (product, div_order) => {
    let div = document.createElement('div')
    let div_img = document.createElement('div')
    let text = document.createElement('div')
    div.classList.add('product')
    div_img.classList.add('div_img')
    text.classList.add('text')

    let id = document.createElement('p')
    let title = document.createElement('h3')
    let price = document.createElement('p')
    let quantity = document.createElement('p')
    let total = document.createElement('p')
    let discountPercentage = document.createElement('p')
    let discountedTotal = document.createElement('p')
    let thumbnail = document.createElement('img')

    id.innerText = `product ID: ${product.id}`
    title.innerText = `${product.title}`
    price.innerText = `price: ${product.price}`
    quantity.innerText = `quantity: ${product.quantity}`
    total.innerText = `total: ${product.total}`
    discountPercentage.innerText = `Percentage discount: ${product.discountPercentage}`
    discountedTotal.innerText = `Total discounted: ${product.discountedTotal}`
    thumbnail.src = `${product.thumbnail}`

    div_img.appendChild(thumbnail)
    text.append(title, id, price, quantity, total, discountedTotal, discountPercentage)
    div.append(div_img, text)
    // let order = document.getElementsByClassName('order')
    div_order.appendChild(div)

}

// carts(shoppBasket)

// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
// Інгредієнти повинні бути список під час відображення.
//
//  - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)