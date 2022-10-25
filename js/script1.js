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

/* Задача 6
Напиши скрипт , который просит пользователя ввести число и степень
возводит число в указанную степень и выводит результат в консоль
*/

// Задача 7
// Функция должна проверять, name является ли контакт реальным firstName и данное свойство ( prop)
// является свойством этого контакта.
// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];

// function lookUpProfile(name, prop) {
//   // Only change code below this line
//   for (let contact of contacts) {
//     if (contact.firstName === name) {
//       if (contact.hasOwnProperty(prop)) {
//         return contact[prop];
//       } else {
//         return "No such property";
//       }
//     }
//   }
//   return "No such contact";

//   // Only change code above this line
// }

// console.log(lookUpProfile("Sherlock", "likes"));

// Задача 8
// Используйте функцию parseInt с основанием
// Функция parseInt()анализирует строку и возвращает целое число.
// Он принимает второй аргумент для системы счисления, который указывает основание числа в строке.
// Основание может быть целым числом от 2 до 36.

// Вызов функции выглядит так:

// parseInt(string, radix);
// И вот пример:

// const a = parseInt("11", 2);
// Переменная системы счисления говорит, что 11она находится в двоичной системе или с основанием 2.
// В этом примере строка преобразуется 11в целое число 3.

// Используйте parseInt()в convertToIntegerфункции,
// чтобы она преобразовывала двоичное число в целое и возвращала его.

// function convertToInteger(str) {
//   return parseInt(str, 2);
// }

// convertToInteger("10011");

// Задача 9
// несколько тернарных операторов
// В checkSignфункции используйте несколько условных операторов —
// в соответствии с рекомендуемым форматом, используемым в findGreaterOrEqual— чтобы проверить,
// является ли число положительным, отрицательным или нулем.
// Функция должна вернуть positive, negativeили zero.

// function checkSign(num) {
//   return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
// }

// checkSign(10);

// Задача 10
// Замена циклов с помощью рекурсии
// Рекурсия — это концепция, согласно которой функция может быть выражена через саму себя.
// Напишите рекурсивную функцию, sum(arr, n)которая возвращает сумму первых nэлементов массива arr.

// function sum(arr, n) {
//   // Only change code below this line
//   if (n <= 0) {
//     return 0;
//   } else {
//     return sum(arr, n - 1) + arr[n - 1];
//   }

//   // Only change code above this line
// }

// Задача 11
// Используйте рекурсию для создания обратного отсчета
// Базовый вариант .
// Базовый случай сообщает рекурсивной функции, когда ей больше не нужно вызывать себя.
// Это простой случай, когда возвращаемое значение уже известно.
// Также будет рекурсивный вызов , который выполняет исходную функцию с другими аргументами.
// Если функция написана правильно, в конечном итоге будет достигнут базовый случай.

// Мы определили функцию, вызываемую countdownс одним параметром ( n).
// Функция должна использовать рекурсию для возврата массива, содержащего целые числа ,
// n на 1 основе параметра. Если функция вызывается с числом меньше 1,
// функция должна вернуть пустой массив. Например, вызов этой функции n = 5 должен вернуть
// массив [5, 4, 3, 2, 1]. Ваша функция должна использовать рекурсию, вызывая саму себя,
// и не должна использовать циклы любого вида.

// function countdown(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const arr = countdown(n - 1);
//     arr.unshift(n);
//     return arr;
//   }
// }

// console.log(countdown(10)); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// Задача 12
// Используйте рекурсию для создания диапазона чисел
// Продолжая предыдущую задачу, мы предоставляем вам еще одну возможность создать рекурсивную функцию для решения проблемы.

// Мы определили функцию с именем rangeOfNumbersс двумя параметрами.
// Функция должна возвращать массив целых чисел, который начинается с числа,
// представленного startNumпараметром, и заканчивается числом, представленным endNumпараметром.
// Начальное число всегда будет меньше или равно конечному числу.
// Ваша функция должна использовать рекурсию, вызывая саму себя,
// и не использовать циклы любого вида.
// Это также должно работать для случаев, когда оба startNumи endNumодинаковы.

// function rangeOfNumbers(startNum, endNum) {
//   if (startNum === endNum) {
//     return [startNum];
//   } else {
//     const arr = rangeOfNumbers(startNum, endNum - 1);
//     arr.push(endNum);
//     return arr;
//   }
// }

// console.log(rangeOfNumbers(1, 5)); // [1, 2, 3, 4, 5]

// Задача 13
// Сравните области действия переменной и пусть ключевые слова
// Напишите код так, чтобы i объявленная в if операторе переменная была отдельной от
// i объявленной в первой строке функции. Убедитесь, что var ключевое слово нигде в вашем коде не используется.

// Это упражнение предназначено для того, чтобы проиллюстрировать разницу между тем,
// как ключевые слова varи letназначают область действия объявленной переменной.
// При программировании функции, подобной той, что используется в этом упражнении,
// часто лучше использовать разные имена переменных, чтобы избежать путаницы.

// Переменная i, объявленная в ifоператоре, должна равняться строке block scope.
// checkScope()должен вернуть строкуfunction scope

// function checkScope() {
//   let i = "function scope"; // i глоабльная переменная
//   if (true) {
//     let i = "block scope"; // i локальная переменная
//     console.log("Block scope i is: ", i); // block scope
//   }
//   return i; // function scope
// }

// задача 14
// Используйте параметр Rest с параметрами функции
// функция sumмогла принимать любое количество аргументов и возвращать их сумму.

// const sum = (...args) => {
//   return args.reduce((a, b) => a + b, 0);
// };
// console.log(sum(1, 2, 3)); // 6

// Задача 15
