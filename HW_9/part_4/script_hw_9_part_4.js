// Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення
// окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
// ------------------

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


let div_create = (item, div_box, name_key) => {
    let div = document.createElement('div')
    div.classList.add(name_key)
    let name = name_key.replaceAll('_', ' ')

    if (Array.isArray(item)) {
        let ul = document.createElement('ul')
        item.forEach((value) => {
            let li = document.createElement('li')
            li.innerText = value
            ul.appendChild(li)
        })
        div.appendChild(ul)
        div_box.appendChild(div)

    } else {
        let p = document.createElement('p')
        let span = document.createElement('span')
        span.innerText = ` ${item}`
        p.innerText = `${name}:  `
        div.append(p, span)
        div_box.appendChild(div)
    }
}
let course = (courses, position) => {
    courses.forEach((course, index, arr) => {
        let div_card = document.createElement('div')
        let div_duration = document.createElement('div')
        div_card.classList.add('course')
        div_duration.classList.add('div_duration')

        div_create(course.title, div_card, 'title')
        div_create(course.monthDuration, div_duration, 'month_Duration')
        div_create(course.hourDuration, div_duration, 'hour_Duration')
        div_card.appendChild(div_duration)
        div_create(course.modules, div_card, 'modules')

        position.appendChild(div_card)
        // let div_month = document.createElement('div')
    })
}
let main = document.createElement('main')
course(coursesArray, main)
document.body.appendChild(main)
