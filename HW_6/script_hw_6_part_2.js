// =========================
// - 6.11 описати колоду карт (від 6 до туза без джокерів)
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
// - знайти піковий туз 'Spades' 'Ace'
let Spades_Ace = cards.find((value) => {
    return value.Value === 'Ace' && value.Suite === 'Spades'
})
console.log(Spades_Ace)
/// -----------------------------------------------

// - всі шістки
let card_six = cards.filter((card) => {
    return card.Value === '6'
})
console.log(card_six)
/// -----------------------------------------------

// - всі червоні карти
let red_card = cards.filter((card) => {
    return card.Color === 'Red'
})
console.log(red_card)
/// -----------------------------------------------

// - всі буби
let red_Diamonds = cards.filter((card) => {
    return card.Suite === 'Diamonds'
})
console.log(red_Diamonds)
/// -----------------------------------------------

// - всі трефи від 9 та більше
let cards_Clubs = cards.filter((card) => {
    if (isNaN(card.Value) && card.Suite === 'Clubs') {
        return card
    } else {
        return card.Suite === 'Clubs' && card.Value > 9
    }
})
console.log(cards_Clubs)
/// -----------------------------------------------

//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let casino_cards = [
    {'value': '6', 'suite': 'spade'},
    {'value': '7', 'suite': 'spade'},
    {'value': '8', 'suite': 'spade'},
    {'value': '9', 'suite': 'spade'},
    {'value': '10', 'suite': 'spade'},
    {'value': 'ace', 'suite': 'spade'},
    {'value': 'jack', 'suite': 'spade'},
    {'value': 'queen', 'suite': 'spade'},
    {'value': 'king', 'suite': 'spade'},
    {'value': 'joker', 'suite': 'spade'},
    {'value': '6', 'suite': 'diamond'},
    {'value': '7', 'suite': 'diamond'},
    {'value': '8', 'suite': 'diamond'},
    {'value': '9', 'suite': 'diamond'},
    {'value': '10', 'suite': 'diamond'},
    {'value': 'ace', 'suite': 'diamond'},
    {'value': 'jack', 'suite': 'diamond'},
    {'value': 'queen', 'suite': 'diamond'},
    {'value': 'king', 'suite': 'diamond'},
    {'value': 'joker', 'suite': 'diamond'},
    {'value': '6', 'suite': 'heart'},
    {'value': '7', 'suite': 'heart'},
    {'value': '8', 'suite': 'heart'},
    {'value': '9', 'suite': 'heart'},
    {'value': '10', 'suite': 'heart'},
    {'value': 'ace', 'suite': 'heart'},
    {'value': 'jack', 'suite': 'heart'},
    {'value': 'queen', 'suite': 'heart'},
    {'value': 'king', 'suite': 'heart'},
    {'value': 'joker', 'suite': 'heart'},
    {'value': '6', 'suite': 'clubs'},
    {'value': '7', 'suite': 'clubs'},
    {'value': '8', 'suite': 'clubs'},
    {'value': '9', 'suite': 'clubs'},
    {'value': '10', 'suite': 'clubs'},
    {'value': 'ace', 'suite': 'clubs'},
    {'value': 'jack', 'suite': 'clubs'},
    {'value': 'queen', 'suite': 'clubs'},
    {'value': 'king', 'suite': 'clubs'},
    {'value': 'joker', 'suite': 'clubs'}
]
let cards_parsing = casino_cards.reduce((acc, item, index, arr) =>{

    // const suites_card = ['spades','diamonds', 'hearts', 'clubs']
    if (item.suite === 'spade') {
        acc.spades.push(item)
    }
    else if (item.suite === 'diamond') {
        acc.diamonds.push(item)
    }
    else if (item.suite === 'heart') {
        acc.hearts.push(item)
    }
    else if (item.suite === 'clubs') {
        acc.clubs.push(item)
    }
return acc
}, {spades:[], diamonds:[], hearts:[], clubs:[]})
console.log(cards_parsing)
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


// --написати пошук всіх об'єктів, в який в modules є sass
let sass_mass = coursesArray.filter((value,index) => {
    return value.modules.some(item => {return item === 'sass'})
    })
console.log(sass_mass)
/// -----------------------------------------------

// --написати пошук всіх об'єктів, в який в modules є docker
let docker_mass = coursesArray.filter((value,index) => {
    return value.modules.some(item => {return item === 'docker'})
})
console.log(docker_mass)
/// -----------------------------------------------


// let deck = [];
//
// const suits = ['spade', 'diamond','heart', 'clubs']
// const values = ['6', '7', '8', '9', '10', 'ace','jack','queen','king','joker']
// const colors = ['red', 'black']
//
// for (let suit of suits) {
//     for (let value of values) {
//         let color = colors[suit];
//         let card = {'value': value, 'suite': suit, 'color': color};
//         deck.push(card);
//     }
// }
//
// console.log(deck);