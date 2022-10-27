// Модуль 1
// Переменные, типы данных, операторы, ветвления, циклы
// 1. Объявите две переменные: admin и name. Запишите в name строку "Василий";
//Скопируйте значение из name в admin.Выведите admin(должно вывести «Василий»).
// let name = "Василий";
// let admin = name;
// console.log(admin);
// 2. Чему будет равно JS-выражение 1000 + "108"? // будет конкатенация строк console.log(1000 + "108"); // 1000108
// 3. for обратный цикл
// Вставьте нечетные числа от 9 до 1 в myArray цикл for.
// const myArray = [];
// for (let i = 9; i >= 1; i -= 2) {
//   myArray.push(i);
// }
// console.log(myArray); // [9, 7, 5, 3, 1]
// 4. Перебор массива с помощью цикла for
// Объявите и инициализируйте переменную total в 0.
// Используйте forцикл, чтобы добавить значение каждого элемента myArrмассива в total.
// const myArr = [2, 3, 4, 5, 6];
// let total = 0;
// for (let i = 0; i < myArr.length; i += 1) {
//   total += myArr[i];
// }
// console.log(total); // 20
// 5. Вложение циклов
// Измените функцию multiplyAllтак, чтобы она возвращала произведение всех чисел в подмассивах arr.
// function multiplyAll(arr) {
//   let product = 1;
//   // Only change code below this line
//   for (let i = 0; i < arr.length; i += 1) {
//     for (let j = 0; j < arr[i].length; j += 1) {
//       // возвращаем произведение всех чисел в подмассивах arr.
//       product *= arr[i][j];
//     }
//   }
//   // Only change code above this line
//   return product;
// }
// console.log(multiplyAll([[1], [2], [3]])); // 6
// console.log(
//   multiplyAll([
//     [1, 2],
//     [3, 4],
//     [5, 6, 7],
//   ])
// ); // 5040
// console.log(
//   multiplyAll([
//     [5, 1],
//     [0.2, 4, 0.5],
//     [3, 9],
//   ])
// ); // 54
/* Модуль 1 - Переменные, типы данных, операторы, ветвления, циклы */
/* Задача 1
Метод window.confirm(); выводит диалоговое окно с текстом
Код не продолжает работу пока пользователь не нажмет кнопку "ОК"
на место вызова метода вернеся true или false в зависимости от того
какой кнопкой пользователь закрыл окно

const shouldRenew = confirm("Хотите продлить подписку?");
console.log(shouldRenew); // true или false */
/* Задача 2
Метод window.prompt(); который хочет получить от пользователя минимальный вывод 
Метод блокирует код до тех пор пока пользователь не введет данные и не нажмет кнопку "ОК"

const age = prompt("Введите свой возраст");
console.log(age); // 18
console.log(typeof age); // string - всегда возвращает строку
 
чтоб получить число нужно привести строку к числу

const age = Number(prompt("Введите свой возраст"));
console.log(age); // 18
console.log(typeof age); // number */
/* Задача 3 
Методы Number.parseInt() проходится с первой позиции и запинается 
на первом не числовом символе, если в начале строки нет числа то вернется NaN
Возвращает целое число

let elementsWidth = "100px";
console.log(Number.parseInt(elementsWidth)); // 100

Метод Number.parseFloat проходится с первой позиции
Возвращает дробное число, включает в себя дробную часть
Если в начале строки нет числа то вернется NaN

let elementsWidth = "100.5px";
console.log(Number.parseFloat(elementsWidth)); // 100.5

Метод Number.toFixed()- метод работы с деньгами,
отсекает число до указанного количества знаков после запятой
Вызывается на самом числе. Возвращает строку

const salary = 1000.5001;
console.log(salary.toFixed(2)); // 1000.50 - строка
 
let salary = 1000.5001;
salary = salary.toFixed(2);
salary = Number(salary);
console.log(salary); // 1000.5 - число 

можно записать также

let salary = 1000.5001;
salary = Number(salary.toFixed(2));
console.log(salary); // 1000.5 - число 

let salary = 1000.5001;
console.log(Number(salary.toFixed(2))); // 1000.5 - число */
/* Задача 4
Приведение к числу с Number(value) 
Значение Nan - не число, не равно ничему даже самому себе

let guantity = "5";
let value = "Эту строку нельзя привести к числу";
console.log(Number(guantity)); // 5
console.log(Number(value)); // NaN


Проверка на Nan - Number.isNaN(value) - возвращает true или false

let guantity = "5";
let value = "Эту строку нельзя привести к числу";
console.log(Number.isNaN(guantity)); // false
console.log(Number.isNaN(value)); // true
*/
/* Задача 5
Обьект Math - встроенный обьект в JS, который содержит в себе математические методы
Возведение в степень - Math.pow(base, exponent) - возвращает число

const base = 2; // основание
const power = 5; // степень
console.log(Math.pow(base, power)); // 32 - число

можно записать также

const base = 2; // основание
const power = 5; // степень
const result = Math.pow(base, power);
console.log(result); // 32 - число

Квадратный корень - Math.sqrt(number) - возвращает число 

const number = 25;
console.log(Math.sqrt(number)); // 5 - число

Модуль числа - Math.abs(number) - возвращает число

const number = -25;
console.log(Math.abs(number)); // 25 - число

Округление числа - Math.round(number) - возвращает число

const number = 25.5;
console.log(Math.round(number)); // 26 - число

Округление в меньшую сторону - Math.floor(number) - возвращает число

const number = 25.5;
console.log(Math.floor(number)); // 25 - число

Округление в большую сторону - Math.ceil(number) - возвращает число

const number = 25.5;
console.log(Math.ceil(number)); // 26 - число

Максимальное число - Math.max(number1, number2, number3, ...) - возвращает число

const number1 = 25;
const number2 = 50;
const number3 = 75;
console.log(Math.max(number1, number2, number3)); // 75 - число

Минимальное число - Math.min(number1, number2, number3, ...) - возвращает число

const number1 = 25;
const number2 = 50;
const number3 = 75;
console.log(Math.min(number1, number2, number3)); // 25 - число

Случайное число - Math.random() - возвращает число

console.log(Math.random()); // 0.123456789 - число

Случайное целое число - Math.floor(Math.random() * (max - min + 1)) + min - возвращает число

const min = 1;
const max = 10;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // 5 - число

Случайное целое число в диапазоне от 0 до 100 - Math.floor(Math.random() * 101) - возвращает число

console.log(Math.floor(Math.random() * 101)); // 50 - число

Случайное целое число в диапазоне от 0 до 100 - Math.floor(Math.random() * (max - min + 1)) + min - возвращает число

const min = 0;
const max = 100;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // 50 - число
*/

//  Задача 6
// Напиши скрипт , который просит пользователя ввести число и степень
// возводит число в указанную степень и выводит результат в консоль

// const base = prompt("Введите число");
// const power = prompt("Введите степень");
// const result = Math.pow(base, power);
// console.log(result);

// Задача 7
// Если выписать  все натуральные числа меньше 10 , кратные 3 или 5 , то получим 3, 5, 6 и 9 .
// Сумма этих чисел равна 23 .
// Найдите сумму всех чисел меньше 1000 , кратных 3 или 5 .

// находим все числа меньше 1000 кратные 3 или 5
// добавляем эти числа, выводим результат

// let total = 0;
// for (let i = 0; i <= 1000; i += 1) {
//   if (i % 3 === 0 || i % 5 === 0) {
//     console.log(i);
//     total += i;
//   }
// }
// console.log(total); // 234168

// Задача 8
// Напиши скрипт, который будет спрашивать логин с помощью prompt.
// и логировать результат в консоль.

// -Если посетитель вводит 'admin', то спрашивать пароль
// -Если ничего не введено или нажата клавиша Esc - выводить 'Отменено пользователем!'
// -В противном случае выводить 'Я вас не знаю!'

// -Пароль проверять так:
// -Если введен пароль 'Я админ', то выводить 'Добро пожаловать!'
// -Иначе выводить строку 'Доступ запрещен, неверный пароль!'

// const login = prompt("Ввелите логин");

// if (login === "admin") {
//   const password = prompt("Введите пароль");
//   if (password === "Я админ") {
//     console.log("Добро пожаловать!");
//   } else {
//     console.log("Доступ запрещен, неверный пароль!");
//   }
// } else {
//   console.log("Я вас не знаю!");
// }
