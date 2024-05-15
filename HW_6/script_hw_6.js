// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.error('Task 6.1')
let array = ['hello world', 'lorem ipsum', 'javascript is cool']
for (const arrayElement of array) {
    console.log(arrayElement.length)
}
// -----------------------------------------------

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.error('Task 6.2')
for (const str of array) {
    console.log(str.toUpperCase())
}
// -----------------------------------------------

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.error('Task 6.3')
let mas = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL']
for (const item of mas) {
    console.log(item.toLowerCase())
}
// -----------------------------------------------

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// -----------------------------------------------
// debugger
console.error('Task 6.4')
let str = '     dirty string   '
function clear_space (string) {
    if (string.startsWith(' ')) {
        string = string.replace(' ', '')
        return clear_space(string)
    }
    else if (string.endsWith(' ')) {
        string = string.substring(0,string.length-1)
        return clear_space(string)
    }
    else {
        return string
    }
}
console.log('v1:', clear_space(str))
// -----------------------------------------------
const dirty = str.trim()
console.log('v2:', dirty)
// -----------------------------------------------

// - 6.5 Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
console.error('Task 6.5')
let str1 = 'Ревуть воли як ясла повні';
let  stringToarray = (str) => str.split(' ')
let arr = stringToarray(str)
console. log (stringToarray(str1))
/// -----------------------------------------------

// - 6.6. є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
console.error('Task 6.6')
let arr_number =  [10,8,-7,55,987,-1011,0,1050,0]
let arr_number_string = arr_number.map (value => value.toString())
console.log(arr_number_string)
/// -----------------------------------------------

// - 6.7 створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let sortNums = (arr, condition) => {
    if (condition === 'ascending') {
        arr.sort((num1,num2) => num1 - num2)
        console.log(arr)
    }else if (condition === 'descending') {
        arr.sort((num1,num2) => {return num2 - num1})
        console.log(arr)
    }
    else {
        console.log('err')
    }
}
console.error('Task 6.7')
let nums = [11,21,3]
sortNums(nums,'ascending') // [3,11,21]
sortNums(nums,'descending') // [21,11,3]
/// -----------------------------------------------
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// - є масив coursesAndDurationArray
// -- 6.8 відсортувати його за спаданням за monthDuration
console.error('Task 6.8')
coursesAndDurationArray.sort((monthD_1, monthD_2) => {
    return (monthD_2.monthDuration - monthD_1.monthDuration)
})
console.log(coursesAndDurationArray)
// -- 6.9 відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filter___courses =coursesAndDurationArray.filter((duration) =>{ return duration.monthDuration >5})
console.error('Task 6.9')
console.log(filter___courses)

// -- 6.10 за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
console.error('Task 6.10')
let list___courses = coursesAndDurationArray.map((course, index) =>{
    // let new_course= {
    //     id: index+1,
    //     title: course.title,
    //     monthDuration: course.monthDuration
    // }
    // return new_course
    return {id:index+1,...course}
} )
console.log(list___courses)
