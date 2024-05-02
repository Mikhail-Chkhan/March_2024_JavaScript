//   2.11 є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
//   Напишіть код який, буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення
//   (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

let x = prompt('Please, enter your data:')
// version 1
//  x === 'default' ?  x = x : x = 'default'
// console.log(x)

// version 2
if (x !== 'default') {
    x = 'default'
    console.log(x)
} else {
    console.log(x)
}