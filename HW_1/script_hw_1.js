// -------------------------------TASK_1.1-------------------------------
// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
let a1= 'hello';
let b1 = 'owu';
let c1 = 'com';
let d1 = 'ua';
let e1 = 1
let f1 = 10
let g1 = -999;
let h1 = 123;
let i1 = 3.14;
let j1 = 2.7;
let k1 = 16;
let l1 = true;
let m1 = false;

console.error('Task_1.1');
console.log(a1);
console.log(b1);
console.log(c1);
console.log(d1);
console.log(e1);
console.log(f1);
console.log(g1);
console.log(h1);
console.log(i1);
console.log(j1);
console.log(k1);
console.log(l1);
console.log(m1);
/*-------------------------------end-------------------------------*/


// -------------------------------TASK_1.2-------------------------------
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firsName = 'Mikhail';
let middleName = 'Astedor';
let lastName = 'Chkhan';
let spase = ' ';

result = firsName + spase + middleName + spase + lastName;
result2 = `${firsName} ${middleName} ${lastName}`;

console.error('Task_1.2');
console.log('V1:', result);
console.log('V2:', firsName + spase + middleName + spase + lastName);
console.log ('V3:', result2);
/*-------------------------------end-------------------------------*/


// -------------------------------TASK_1.3-------------------------------
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
let a = 100;
let b = '100';
let c = true;

console.error('Task_3')
console.log('a = ', typeof (a));
console.log('b = ', typeof (b));
console.log('c = ', typeof (c));
/*-------------------------------end-------------------------------*/


// -------------------------------TASK_1.3-(additionally)-----------------
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let fist___name = prompt('Input your fist name:');
let last___name = prompt('Input your fist name:');
let old = prompt('Input your fist name:');

console.error('Additionally task')
console.log('Your fist name: ', fist___name);
console.log('Your last name: ', last___name);
console.log('Your old: ', old);
/*-------------------------------end-------------------------------*/