// Модуль 1
// Переменные, типы данных, операторы, ветвления, циклы

// 1. Объявите две переменные: admin и name. Запишите в name строку "Василий";
//Скопируйте значение из name в admin.Выведите admin(должно вывести «Василий»).

// let name = "Василий";
// let admin = name;
// console.log(admin);

// 2. Чему будет равно JS-выражение 1000 + "108"? // будет конкатенация строк console.log(1000 + "108"); // 1000108

//3. for обратный цикл
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
