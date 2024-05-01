// - 2.9. Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let day_week_srt = prompt('input number from 1 to 7:');
let day_week_num = Number(day_week_srt)
let schedule = [
    {
        day_week: 'Monday',
        day_start: '09:00',
        drink: 'milk',
        eat: 'sweet bun',

    },
    {
        day_week: 'Thursday',
        day_start: '09:00',
        drink: 'coffee',
        eat: 'candy',

    },
    {
        day_week: 'Wednesday',
        day_start: '09:30',
        drink: 'water',
        eat: 'hot-dog',

    },
    {
        day_week: 'Thursday',
        day_start: '08:45',
        drink: 'tea',
        eat: 'Cookie',

    },
    {
        day_week: 'Friday',
        day_start: '09:00',
        drink: 'coffee',
        eat: 'omelette',

    },
    {
        day_week: 'Saturday',
        day_start: '10:00',
        drink: 'cappuccino',
        eat: 'sweet bun',

    },
    {
        day_week: 'Sunday',
        day_start: 'anu time',
        drink: 'coffee with milk',
        eat: 'sweet bun',

    },
]

switch (day_week_num) {
    case 1 :
        console.log(schedule[0].day_week)
        console.log(schedule[0].day_start)
        console.log(schedule[0].drink)
        console.log(schedule[0].eat)
        break
    case 2 :
        console.log(schedule[1].day_week)
        console.log(schedule[1].day_start)
        console.log(schedule[1].drink)
        console.log(schedule[1].eat)
        break
    case 3 :
        console.log(schedule[2].day_week)
        console.log(schedule[2].day_start)
        console.log(schedule[2].drink)
        console.log(schedule[2].eat)
        break
    case 4 :
        console.log(schedule[3].day_week)
        console.log(schedule[3].day_start)
        console.log(schedule[3].drink)
        console.log(schedule[3].eat)
        break
    case 5 :
        console.log(schedule[4].day_week)
        console.log(schedule[4].day_start)
        console.log(schedule[4].drink)
        console.log(schedule[4].eat)
        break
    case 6 :
        console.log(schedule[5].day_week)
        console.log(schedule[5].day_start)
        console.log(schedule[5].drink)
        console.log(schedule[5].eat)
        break
    case 7 :
        console.log(schedule[6].day_week)
        console.log(schedule[6].day_start)
        console.log(schedule[6].drink)
        console.log(schedule[6].eat)
        break
}


