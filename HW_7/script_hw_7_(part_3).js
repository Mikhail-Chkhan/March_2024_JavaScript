// Через Array.prototype. створити власний foreach, filter, map
//function Array () {}

let cards = [
    {Value: '2', Suite: 'Spades', Color: 'Black'},
    {Value: '3', Suite: 'Spades', Color: 'Black'},
    {Value: '4', Suite: 'Spades', Color: 'Black'},
    {Value: '5', Suite: 'Spades', Color: 'Black'},
    {Value: '6', Suite: 'Spades', Color: 'Black'},
    {Value: '7', Suite: 'Spades', Color: 'Black'},
    {Value: '8', Suite: 'Spades', Color: 'Black'},
    {Value: '9', Suite: 'Spades', Color: 'Black'},
    {Value: '10', Suite: 'Spades', Color: 'Black'},
    {Value: 'Jack', Suite: 'Spades', Color: 'Black'},
    {Value: 'Queen', Suite: 'Spades', Color: 'Black'},
    {Value: 'King', Suite: 'Spades', Color: 'Black'},
    {Value: 'Ace', Suite: 'Spades', Color: 'Black'},
    {Value: '2', Suite: 'Hearts', Color: 'Red'},
    {Value: '3', Suite: 'Hearts', Color: 'Red'},
    {Value: '4', Suite: 'Hearts', Color: 'Red'},
    {Value: '5', Suite: 'Hearts', Color: 'Red'},
    {Value: '6', Suite: 'Hearts', Color: 'Red'},
    {Value: '7', Suite: 'Hearts', Color: 'Red'},
    {Value: '8', Suite: 'Hearts', Color: 'Red'},
    {Value: '9', Suite: 'Hearts', Color: 'Red'},
    {Value: '10', Suite: 'Hearts', Color: 'Red'},
    {Value: 'Jack', Suite: 'Hearts', Color: 'Red'},
    {Value: 'Queen', Suite: 'Hearts', Color: 'Red'},
    {Value: 'King', Suite: 'Hearts', Color: 'Red'},
    {Value: 'Ace', Suite: 'Hearts', Color: 'Red'},
    {Value: '2', Suite: 'Diamonds', Color: 'Red'},
    {Value: '3', Suite: 'Diamonds', Color: 'Red'},
    {Value: '4', Suite: 'Diamonds', Color: 'Red'},
    {Value: '5', Suite: 'Diamonds', Color: 'Red'},
    {Value: '6', Suite: 'Diamonds', Color: 'Red'},
    {Value: '7', Suite: 'Diamonds', Color: 'Red'},
    {Value: '8', Suite: 'Diamonds', Color: 'Red'},
    {Value: '9', Suite: 'Diamonds', Color: 'Red'},
    {Value: '10', Suite: 'Diamonds', Color: 'Red'},
    {Value: 'Jack', Suite: 'Diamonds', Color: 'Red'},
    {Value: 'Queen', Suite: 'Diamonds', Color: 'Red'},
    {Value: 'King', Suite: 'Diamonds', Color: 'Red'},
    {Value: 'Ace', Suite: 'Diamonds', Color: 'Red'},
    {Value: '2', Suite: 'Clubs', Color: 'Black'},
    {Value: '3', Suite: 'Clubs', Color: 'Black'},
    {Value: '4', Suite: 'Clubs', Color: 'Black'},
    {Value: '5', Suite: 'Clubs', Color: 'Black'},
    {Value: '6', Suite: 'Clubs', Color: 'Black'},
    {Value: '7', Suite: 'Clubs', Color: 'Black'},
    {Value: '8', Suite: 'Clubs', Color: 'Black'},
    {Value: '9', Suite: 'Clubs', Color: 'Black'},
    {Value: '10', Suite: 'Clubs', Color: 'Black'},
    {Value: 'Jack', Suite: 'Clubs', Color: 'Black'},
    {Value: 'Queen', Suite: 'Clubs', Color: 'Black'},
    {Value: 'King', Suite: 'Clubs', Color: 'Black'},
    {Value: 'Ace', Suite: 'Clubs', Color: 'Black'}
]


Array.prototype.forEach_new = function (callback) {
    for (let i = 0; i < this.length; i++) {
        let array = this
        let value = this[i]
        let index = i
        callback (value,index,array)
    }
}

let mas = []
let mas1 = []
cards.forEach((element) => {
    mas.push(element)
})
console.log(mas)

cards.forEach_new((element) => {
    mas1.push(element)
})
console.log(mas1)
// -----------------------------------------------

Array.prototype.filter_new = function (callback) {
    let arr = []
    for (let i = 0; i < this.length; i++) {

        if (callback(this[i],i,this)){
            arr.push(this[i])
        }
    }
    return arr
}

let mas_red = cards.filter((item) =>item.Color === 'Red')
console.log(mas_red)
let mas_red_new = cards.filter_new((item) =>item.Color === 'Red')
console.log(mas_red_new)
// -----------------------------------------------

Array.prototype.map_new = function (callback) {
    let arr = []
    for (let i = 0; i < this.length; i++) {
        arr.push(callback (this[i], i , this))
    }
    return arr
}

let mas_map = cards.map((card) => {return card.Color})
console.log(mas_map)
let mas_map_nae = cards.map_new((card) => {card.Color})
console.log(mas_map)
// -----------------------------------------------