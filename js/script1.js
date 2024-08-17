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

// Задача 9

// const user = { name: "Petro" };
// user.name = "Dmytro";

// console.log(user.name); // Dmytro

// Задача 10

// const str = "Banzay!";
// const message =
//   str.split("").reverse().join("").indexOf("!") === 0 ? "Hooray" : "Bingo"; // если в строке есть ! то Hooray, иначе Bingo

// console.log(message); // Hooray

// Задача 11

// class Astronaut {
//   constructor(weight = "90kg", age) { // задаем значения по умолчанию
//     this.weight = weight;
//     this.age = age;
//   }
// }

// const person = new Astronaut("100kg", 30); // создаем объект
// console.log(person.age, person.weight); // 30 100kg

// Задача 12

// function whatIsReturned() { // функция возвращает undefined
//   var total = "one"; // переменная total объявлена внутри функции
//   var TOTAL = "two"; // переменная TOTAL объявлена внутри функции

//   return total; // возвращаем значение переменной total
// }

// console.log(whatIsReturned()); // one

// Задача 13

// window.size = "50x20"; // глобальная переменная
// const photo = { // объект
//   size: "25x30", // свойство объекта
// };
// function getPhotoSize(photo = { size: "90x30" }) { // функция с параметром по умолчанию
//   return this.size; // возвращаем значение глобальной переменной
// }
// getPhotoSize.call(photo); // вызываем функцию с контекстом photo

// Задача 14

// function calculate(a) { // функция с параметром a
//   const power = 3; // переменная power объявлена внутри функции
//   a * power + 10; // возвращаем значение выражения
// }

// console.log(calculate(10)); // undefined

// Задача 15

// let audi = { wheels: 4 }; // объект
// let tesla = audi; // переменная tesla ссылается на объект audi

// delete audi.wheels; // удаляем свойство wheels из объекта audi

// console.log(audi.wheels, tesla.wheels); // undefined undefined

// Задача 16

// const b = null, // переменная b равна null
//   c = {}; // переменная c равна пустому объекту
// console.log(b || "+", c || "+"); // + {} - если переменная равна null или undefined, то возвращается второй операнд

// Задача 17

// const names = ["Volodya", "Viktor", "Vasyl"]; // массив
// const extendedNames = names.join("-Viktor-").split("-"); // создаем новый массив, в котором каждый элемент разделен строкой "-Viktor-"

// console.log(extendnedNames.lastIndexOf("Viktor")); // Uncaught ReferenceError: extendnedNames is not defined -
// // переменная extendnedNames не определена

// Задача 18

// const x = 7; // глобальная переменная

// console.log(x >= 7); // true - если переменная x больше или равна 7, то возвращается true
// console.log(x == 8); // false - если переменная x равна 8, то возвращается true
// console.log(x <= 8); // true - если переменная x меньше или равна 8, то возвращается true
// console.log(x != 8); // true - если переменная x не равна 8, то возвращается true
// console.log(x > 7); // false - если переменная x больше 7, то возвращается true
// console.log(x === "7"); // false - если переменная x строго равна "7", то возвращается true
// console.log(x > 8); // false - если переменная x больше 8, то возвращается true

// Задача 19
//Логические операторы

// && - логическое И - возвращает true, если оба операнда равны true, иначе возвращает false
// || - логическое ИЛИ - возвращает true, если хотя бы один операнд равен true, иначе возвращает false
// (!) - логическое НЕ - возвращает true, если операнд равен false, иначе возвращает false

// const x = 3; // глобальная переменная
// const y = 6; // глобальная переменная

// console.log(x > y && y < 6); // false - если оба операнда равны true, то возвращается true, иначе возвращается false
// console.log(x == 3 || y > 6); // true - если хотя бы один операнд равен true, то возвращается true, иначе возвращается false
// console.log(x < 3 && y == 6); // false - если оба операнда равны true, то возвращается true, иначе возвращается false
// console.log(!(x > y)); // true - если операнд равен false, то возвращается true, иначе возвращается false

// Задача 20

// Приоритет операторов

// 1. () - скобки
// 2. ! - логическое НЕ
// 3. * / % - умножение, деление, остаток от деления
// 4. + - сложение, - - вычитание
// 5. < > <= >= - сравнение
// 6. == != === !== - сравнение
// 7. && - логическое И
// 8. || - логическое ИЛИ
// 9. = - присваивание

// Задача 21
// Присвоить переменной х удвоеное значение остатка от деления произведения переменных a, b на их сумму

// function testOperation (a, b) {
//     let x = (a * b) % (a + b) * 2;
//     return x;
// }

// NumberObject.toFixed(n) - возвращает строку, содержащую число, отформатированное с заданным количеством знаков после запятой.

// NumberObject.toPrecision(n) - возвращает строку, содержащую число,
// отформатированное с заданным количеством знаков в общем виде.

// NumberObject.toString([radix]) - возвращает строку, представляющую объект Number.

// NumberObject.toExponential(n) - возвращает строку, содержащую число,
// отформатированное с заданным количеством знаков в экспоненциальном виде.

// NumberObject.valueOf() - возвращает примитивное значение объекта Number.

// Задача 22

// Кодирование в функции howManySmaller, функция принимает 2 параметра: arr и n.
// arr представляет собой десятичный массив.n является десятичной дробью.
// Первая миссия: пусть все элементы в массиве сохраняют два десятичных знака (не нужно преобразовывать число n).
// Вторая миссия: Обход обр, подсчитай номер элемента меньше n и верни его.

// Например:
// howManySmaller([1.234,1.235,1.228],1.24) should return 2
// howManySmaller([1.1888,1.1868,1.1838],1.19) should return 1
// howManySmaller([3.1288,3.1212,3.1205],3.1212) should return

// создаем функцию
// function howManySmaller(arr, n) {
//   // все элементы в массиве сохраняют два десятичных знака
//   let newArr = arr.map((item) => {
//     return item.toFixed(2);
//   });
//   console.log(newArr);
//   // подсчитываем количество элементов меньше n
//   let count = 0;
//   for (let i = 0; i < newArr.length; i++) {
//     if (newArr[i] < n) {
//       count++;
//     }
//   }
//   return count;
// }

// решение 2
// howManySmaller = (arr, n) =>
//   arr.map((x) => x.toFixed(2)).filter((x) => x < n).length;

// console.log(howManySmaller([1.234, 1.235, 1.228], 1.24)); // 2
// console.log(howManySmaller([1.1888, 1.1868, 1.1838], 1.19)); // 1
// console.log(howManySmaller([3.1288, 3.1212, 3.1205], 3.1212)); // 2

// slice() - возвращает новый массив, содержащий копию части исходного массива.
// substring() - возвращает подстроку строки между двумя индексами или начальным и конечным индексами.
// substr() - возвращает подстроку строки между двумя индексами или начальным индексом и длиной.

// StringObject.slice(startindex,endindex)
// StringObject.substring(startindex,endindex)
// StringObject.substr(startindex, length)

// Задача 23

// Кодирование в функции cutIt, функция принимает 1 параметр: arr. arr представляет собой массив строк.
// Первая миссия: Обходя arr, найдите кратчайшую длину строки.
// Вторая миссия: arr снова пройтись, перехватить все строки до кратчайшей длины
// строки(начать с index0).вы можете использовать один из slice() substring() или substr() сделать это
// вернуть результат после завершения работы.

// Например:
// cutIt(["ab","cde","fgh"]) should return ["ab","cd","fg"]
// cutIt(["abc","defgh","ijklmn"]) should return ["abc","def","ijk"]
// cutIt(["codewars","javascript","java"]) should return ["code","java","java"]

// function cutIt(arr) {}

// console.log(cutIt(["ab", "cde", "fgh"])); // ["ab","cd","fg"]
// console.log(cutIt(["abc", "defgh", "ijklmn"])); // ["abc","def","ijk"]
// console.log(cutIt(["codewars", "javascript", "java"])); // ["code","java","java"]
// console.log(5);

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   for (const prod of products) {
//     if (prod.name === productName) {
//       return prod.price * prod.quantity;
//     }
//   }
//   return 0;
// }

// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Blaster"));

// Задача 24
// В залежності від оператора ф - ція виконує математ дії з числами

// function basicOp(operation, value1, value2) {
//   switch (operation) {
//     case "+":
//       return value1 + value2;
//     case "-":
//       return value1 - value2;
//     case "*":
//       return value1 * value2;
//     case "/":
//       return value1 / value2;
//     default:
//       return "Operation must be one of + - * /";
//   }
// }


// Задача 25
// З рядка де 1 елемент число(к - ть років) треба витягнути значення цього числа

// function getAge(inputString) {
//   const strArray = Array.from(inputString); // переводимо рядок в масив
//   return parseInt(strArray); // переводимо елемент в число
// }

// console.log(getAge("4 years old"), 4);

// Задача 26
//Изограмма — это слово, в котором нет повторяющихся букв, последовательных или непоследовательных.
// Реализуйте функцию, которая определяет, является ли строка, содержащая только буквы, изограммой.
//   Предположим, что пустая строка — изограмма.Игнорировать регистр букв.

 // Рішення 1
// function isIsogram(str) {
//   str = str.toLowerCase();

//   for (var i = 0; i < str.length; i += 1) {
//     if (str.indexOf(str.charAt(i), i + 1) >= 0) {
//       return false;
//     }
//   }

//   return true;
// }
 
// Рішення 2
// function isIsogram(str) {
//   return new Set(str.toUpperCase()).size == str.length;
// }

// console.log(isIsogram("Dermatoglyphics")); //true
// console.log(isIsogram("isIsogram")); //false
// console.log(isIsogram("")); //true



// Задача 28
// Напишите функцию, которая удваивает каждое четное целое число в списке, начиная слева.
// Пример:
// Для входного массива/списка:
// [1,2,3,4]
// функция должна возвращать:
// [1,4,3,8]


// function doubleEveryOther(a) {
//     for (let i = 1; i < a.length; i += 2) {
//       a[i] *= 2;
//     }
//     return a;
// }

// console.log(doubleEveryOther([1, 2, 3, 4])); // [1, 4, 3, 8]
// console.log(doubleEveryOther([2, 1])); // [ 4, 1 ]
// console.log(doubleEveryOther([1, 19, 6, 2, 12, -3])); // [1, 38, 6, 4, 12, -6]


// Задача 29
// Дана строка цифр, вам следует заменить любую цифру ниже 5 на '0',
//     а любую цифру 5 и выше на '1'.Верните полученную строку.

// function fakeBin(x) {
    
//      return x;
// }

// console.log(fakeBin('45385593107843568')) // '01011110001100111'

// Задача 30
// Проверяем и віводим в консоль четное число или нет
// const number1 = 2;
// const number2 = 3;

// console.log(number1 % 2 === 0 ? "Число четное" : "Число не четное")
// console.log(number2 % 2 === 0 ? "Число четное" : "Число не четное");

// Задача 31
// Проверяем и выводим в консоль отрицательное число или нет
// Метод Math.sign() возвращает знак числа, указывающий на то, является ли число отрицательным, положительным или нулём.
 
// function num(number) {
//     if (Math.sign(number) === 1) {
//         return "Число не отрицательное";
//     } else if (Math.sign(number) === 0 && Math.sign(number) === -0) {
//         return "Число 0";
//     }
//     else {
//         return "Число отрицательное";
//     }
// }
// console.log(num(2));
// console.log(num(-3));
//  console.log(num(0));


// Задача 32
// Дано число. Выведите в консоль первую цифру этого числа.

// const num = 95
// const newNum = num.toString() // переводим число в строку
// console.log(Number(newNum[0])); // берем значение 1 цифры и назад переводим строку в число


// Задача 33
// Дано число. Выведите в консоль сумму первой и последней цифры этого числа.

// const num = 11
// const newNum = num.toString()
// console.log(Number(newNum[0]) + Number(newNum[newNum.length-1]));


// Задача 34
// Даны два числа. Проверьте, что первые цифры этих чисел совпадают.
// const num1 = 11
// const num2 = 15
// const newNum1 = num1.toString()
// const newNum2 = num2.toString();

// console.log(newNum1[0] === newNum2[0] ? "Совпадают" : "Не совпадают");

// Задача 35
// Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.
// const str = "I love IT";
// console.log(str.length <= 1 && str.length !== 0 ? "В строке 1 символ" : str[str.length - 1]);


// Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.
// let result = 0;
// for (let i = 1; i <= 100; i += 1) {
//     if (i % 2 !== 0) {
//         result += i;
//     }
    
// }
// console.log(result); // 2500


// Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.
// let result = 0;
// for (let i = 1; i <= 100; i += 1) {
//      if (i % 2 === 0) {
//          result += i;
//      }
//  }
//  console.log(result); // 2550

