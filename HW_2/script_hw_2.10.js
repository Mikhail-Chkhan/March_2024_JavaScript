//    2.10 Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let number_1 = prompt("input first number:");
let number_2 = prompt("input second number");
number_1 = Number (number_1);
number_2 = Number(number_2);


if (number_1 > number_2) {
    console.log("The first number is more then second number:", number_1)
}
else {
    if (number_2 > number_1) {
        console.log("The second number is more then first number:", number_2)
}
    else {
        console.log('Numbers are equal:')
    }
}