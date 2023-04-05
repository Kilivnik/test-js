// Задача 1

// Учитывая массив целых чисел nums и целое число target,
// верните индексы двух чисел так, чтобы они составляли в суммеtarget.
// Вы можете предположить, что каждый вход будет иметь ровно одно решение,
// и вы не можете использовать один и тот же элемент дважды.
// Вы можете вернуть ответ в любом порядке.
// Пример 1:

// Ввод: nums = [2,7,11,15], target = 9
//  Вывод: [0,1]
//  Объяснение: Поскольку nums[0] + nums[1] == 9, мы возвращаем [0, 1].

//  @param {number[]} nums
//  @param {number} target
//  @return {number[]}

// let twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i += 1) { // перебираємо з 0 індексу
//     for (let j = 1; j < nums.length; j += 1) { // перебираємо з 1 індексу
//       if (nums[i] + nums[j] === target) { // якщо сума = числу яке передаємо
//         if (i !== j) { // перевірка чи числа використовуються 1 раз
//           return [i, j]; // повертаєм індекси чисел
//         }
//       }
//     }
//   }
// };

// console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]

// Задача 2
// Учитывая целое число x, вернуть, true если x это
// палиндром
//     , и в false противном случае.
// Дополнение: решить эту задачу, не преобразовывая целое число в строку?

// const input1 = 121; // true
// const input2 = -121; // false
// const input3 = 10; //false

// const isPolindromNumber = function (x) {
//   // Делаэм базовые проверки, которые сразу покажут полиндром число или нет
//   if (x < 0) return false; //Отрицытельные числа  со знаком - будут false
//   if (x < 10) return true; // Числа от 1 до 9 будут true
//   if (x % 10 === 0) return false; // Числа которые деляться на 10 заканчиваються на 0 потому false

//   let reverse = 0; // Переменная для инвертированного числа

//   // Если число четное по к-ву цифр то мы используем while
//   // Мы будем отрывать послуднюю цифру от числа

//   while (x > reverse) {
//     reverse *= 10; // reverse 0 * 10 = 0
//     reverse += x % 10; // получаем остаток от % числа на 10 , это всегда будет последняя цифра и + к reverse
//     x = Math.trunc(x / 10); // метод обрезает дробную часть от числа, то есть 121 = 12.1
//   }

//   return x === reverse || x === Math.trunc(reverse / 10);
// };

// console.log(isPolindromNumber(input1));
// console.log(isPolindromNumber(input2));
// console.log(isPolindromNumber(input3));

// Задача 3

// Вам дана m x nцелочисленная сетка, accountsгде accounts[i][j]сумма денег у клиента в банке.
// Верните богатство, которое есть у самого богатого покупателя.

// Богатство клиента — это сумма денег, которую он имеет на всех своих банковских счетах.
// Самый богатый клиент — это клиент, который имеет максимальное богатство.

// Пример 1:

// Ввод: account = [[1,2,3],[3,2,1]]
//  Вывод: 6
//  Объяснение :
// 1st customer has wealth = 1 + 2 + 3 = 6
// 2nd customer has wealth = 3 + 2 + 1 = 6
//  Оба клиента считаются самыми богатыми с состоянием 6 каждый, поэтому верните 6.

/**
 * @param {number[][]} accounts
 * @return {number}
 */
// var maximumWealth = function (accounts) {
//   let maxWealth = 0;

//   for (const account of accounts) {
//     let wealth = 0;
//     for (const money of account) {
//       wealth += money;
//     }
//     if (wealth > maxWealth) {
//       maxWealth = wealth;
//     }
//   }
//   return maxWealth;
// };
// console.log(
//   maximumWealth([
//     [1, 2, 3],
//     [3, 2, 1],
//   ])
// );

// решение 2

// const maximumWealth = (accounts) => {
//   let res = 0;
//   for (const a of accounts) {
//     let sum = a.reduce((x, y) => x + y);
//     res = Math.max(res, sum);
//   }
//   return res;
// };

// console.log(
//   maximumWealth([
//     [1, 2, 3],
//     [3, 2, 1],
//   ])
// );

// Задача 4

// Учитывая целое число num, вернуть количество шагов, чтобы уменьшить его до нуля
// За один шаг, если текущее число четное, вы должны разделить его на 2,
// в противном случае вы должны вычесть 1из него.
// Пример 1:

// Ввод: число = 14
//  Вывод: 6
//  Объяснение:
// Шаг 1) 14 четно; делим на 2 и получаем 7.
// Шаг 2) 7 нечетно; вычтите 1 и получите 6.
// Шаг 3) 6 четно; делим на 2 и получаем 3.
// Шаг 4) 3 нечетно; вычесть 1 и получить 2.
// Шаг 5) 2 четно; делим на 2 и получаем 1.
// Шаг 6) 1 нечетное; вычесть 1 и получить 0.

// var numberOfSteps = function (num) {
//   let count = 0;
//   while (num > 0) {
//     if (num % 2 === 0) {
//       num /= 2;
//     } else {
//       num -= 1;
//     }
//     count += 1;
//   }
//   return count;
// };

// console.log(numberOfSteps(14)); // 6

// Задача 5
// Вам дано бинарное дерево, состоящее ровно из узлов: корня,
// его левого дочернего элемента и его правого дочернего root элемент
// Возврат true, если значение корня равно сумме значений двух его дочерних элементов,
// или в false противном случае.
// Пример 1:

// Ввод: root = [10,4,6]
//  Вывод: true
//  Объяснение: Значения корня, его левого дочернего элемента и его правого дочернего элемента равны 10, 4 и 6 соответственно.
// 10 равно 4 + 6, поэтому мы возвращаем true.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// /**
//  * @param {TreeNode} root
//  * @return {boolean}
//  */
// var checkTree = function (root) {};
let genres = ["Jazz", "5"];
const rusult = genres[0] * genres[1];
console.log(rusult);
