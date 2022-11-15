// Массивы, объекты, функции
// Обычная ф - ция имеет доступ к arguments,  стрелочная нет

// Задача 1
// В ф-цию передаються и строки и числа. Как их отличить и вывести в консоль?

// function add() {
//   console.log(arguments); // получаем псевдомассив аргументов ф-ции
//   const args = Array.from(arguments); // преобразуем псевдомассив в массив
//   console.log(args);
//   const numbers = [];
//   const strings = [];

//   for (let arg of args) {
//     if (typeof arg === "number") {
//       numbers.push(arg);
//     } else {
//       strings.push(arg);
//     }
//   }
//   console.log(numbers);
//   console.log(strings);
// }

// add("2", "3", "4", 4, 5);
// add("2", "3", 4, 4, 5);
// add("2", 5);

// Задача 2
// Вернуть сумму чисел, которые передаются в ф - цию

// const number1 = prompt("Введите первое число");
// const number2 = prompt("Введите второе число");

// function add(a, b) {
//   // a, b - параметры ф-ции
//   return a * b; // возвращаем результат работы ф-ции
// }

// console.log(add(number1, number2)); // number1, number2 - аргументы ф-ции

// Если нам нужно сложить  number1, number2 и вывести в кконсоль результат, то мы должны преобразовать их в числа
// console.log(add(Number(number1), Number(number2)));

// Если нам нужно проверить вводимые данные, то мы должны проверить их на число

// function add(a, b) {
//   if (isNaN(a) || isNaN(b)) {
//     return "Введите число";
//   }
//   return a * b;
// }
// console.log(add(number1, number2));

// Задача 3

// Array.from() - преобразует псевдомассив в массив.
// Можно передать вторым аргументом функцию, которая будет применяться к каждому элементу массива

// function add() {
//   const args = Array.from(arguments, (item) => Number(item)); // преобразуем псевдомассив в массив
//   console.log(args); // [1, 2, 3, 4, 5]
//   let total = 0; // сумма чисел
//   for (let arg of args) {
//     // перебираем массив
//     total += arg; // суммируем числа
//   }
//   return total; // возвращаем результат
// }

// console.log(add("2", "3", "4", 4, 5)); // 18

// Задача 4
// Найти меньшее с чисел, которые передаются в ф - цию

// function min(a, b) {
//   if (a < b) {
//     return a;
//   }
//   return b;
// }

// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1

// Если чисел больше 2, то мы должны сравнить их между собой

// function min() {
//   const args = Array.from(arguments); // преобразуем псевдомассив в массив
//   let min = args[0]; // минимальное число
//   for (let arg of args) {
//     // перебираем массив
//     if (arg < min) {
//       // если текущее число меньше минимального
//       min = arg; // присваиваем минимальному текущее число
//     }
//   }
//   return min;
// }

// console.log(min(2, 5)); // 2
// console.log(min(3, -1, 0)); // -1
// console.log(min(1, 1, 3, 7, 15, -2)); // -2

// Задача 5
// Найти максимальное число, которое передаются в ф - цию

// function max() {
//   const args = Array.from(arguments); // преобразуем псевдомассив в массив
//   let max = args[0]; // максимальное число
//   for (let arg of args) {
//     // перебираем массив
//     if (arg > max) {
//       // если текущее число больше максимального
//       max = arg; // присваиваем максимальному текущее число
//     }
//   }
//   return max;
// }

// console.log(max(2, 5)); // 5
// console.log(max(3, -1, 0)); // 3
// console.log(max(1, 1, 3, 7, 15, -2)); // 15

// Задача 6
// Найти площадь для вычисления прямоугольника со сторонами, которые будут переданы в виде строки.
// Значения гарантированно будут разделены пробелом.

// function getReactArea(dimensions) {
//   const numbers = dimensions.split(" "); // разбиваем строку на массив
//   //   const a = Number(numbers[0]); // первое число
//   //   const b = Number(numbers[1]); // второе число
//   //     return a * b; // возвращаем площадь

//   return numbers[0] * numbers[1]; // возвращаем площадь
// }
// console.log(getReactArea("8 11")); // 88

// Когда мы спрашиваэм высоту и ширину у пользователя через prompt, то он вводит строку, а не число.
// Поэтому мы должны преобразовать строку в число.

// const width = prompt("Введите ширину"); // вводим ширину
// const height = prompt("Введите высоту"); // вводим высоту

// function getReactArea(width, height) { // принимаем ширину и высоту
//   if (isNaN(width) || isNaN(height)) { // если ширина или высота не число
//     alert("Вы ввели не число");
//     return; // прекращаем выполнение функции
//   }

//   if (width === null || height === null) { // если пользователь нажал отмена
//     alert("Вы отменили ввод");
//     return; // прекращаем выполнение функции
//   }

//   return width * height; // возвращаем площадь
// }
// console.log(getReactArea(width, height)); // 88

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
// console.log(convertToInteger("10011")); // 19
// console.log(convertToInteger("11")); // 3

// Задача 9
// несколько тернарных операторов
// В checkSignфункции используйте несколько условных операторов —
// в соответствии с рекомендуемым форматом, используемым в findGreaterOrEqual— чтобы проверить,
// является ли число положительным, отрицательным или нулем.
// Функция должна вернуть positive, negativeили zero.

// function checkSign(num) {
//   return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
// }
// console.log(checkSign(10)); // positive
// console.log(checkSign(-12)); // negative
// console.log(checkSign(0)); // zero

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
// деструктурирования с параметром Rest для переназначения элементов массива
// Результат аналогичен Array.prototype.slice(), как показано ниже:
// const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
// console.log(a, b);
// console.log(arr);
// Консоль отобразит значения 1, 2и [3, 4, 5, 7].
// Переменные aи bпринимают первое и второе значения из массива.
// После этого из-за наличия параметра rest arrполучает остальные значения в виде массива.
// Остальной элемент корректно работает только как последняя переменная в списке.
// Например, вы не можете использовать параметр rest для захвата подмассива,
// в котором отсутствует последний элемент исходного массива.
// Используйте присваивание деструктурирования с параметром rest,
// чтобы выполнить эффективный Array.prototype.slice()так, чтобы arr
// это был подмассив исходного массива sourceс опущенными первыми двумя элементами.

// const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function removeFirstTwo(list) {
//   const [, , ...arr] = list; // Change this line
//   return arr;
// }
// const arr = removeFirstTwo(source);

// Задача 16
// Создание строк с использованием шаблонных литералов
// li Используйте литеральный синтаксис шаблона с обратными кавычками
// для создания массива строк элемента списка ( ).
// Текст каждого элемента списка должен быть одним из элементов массива из
// failure свойства resultобъекта и иметь classатрибут со значением text-warning.
// Функция makeListдолжна возвращать массив строк элементов списка.
// Используйте метод итератора (любой цикл), чтобы получить желаемый результат (показан ниже).
// [
//   '<li class="text-warning">no-var</li>',
//   '<li class="text-warning">var-on-top</li>',
//   '<li class="text-warning">linebreak</li>'
// ]
// const result = {
//   success: ["max-length", "no-amd", "prefer-arrow-functions"],
//   failure: ["no-var", "var-on-top", "linebreak"],
//   skipped: ["no-extra-semi", "no-dup-keys"],
// };

// function makeList(arr) {
//   const failureItems = [];
//   // перебираем массив
//   for (let i = 0; i < arr.length; i++) {
//     // создаем элемент списка
//     failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
//   }
//   return failureItems;
// }
// const failuresList = makeList(result.failure);
// console.log(failuresList);

// Задача 17
// Найти среднее значение.Ф - ция принимаэт произвольное кол - во аргументов
// и возвращает их среднее арифметическое. Все аргументы - числа.

// function calAverage() {
//   const args = Array.from(arguments); // преобразуем в массив
//   const numbersCount = args.length; // получаем длину массива
//   let sum = 0;

//   for (let number of args) {
//     sum += number;
//   }
//   return sum / numbersCount;
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

// Задача 18
// Отсортировать массив по алфавиту

// const words = ["Hello", "World", "Apple", "Orange", "Banana"]; // массив слов

// charCodeAt() - возвращает целое число, представляющее UTF-16 код единицы кода в указанной позиции.
// Возвращает NaN, если индекс больше или равен длине строки.
// chartAt() - возвращает новую строку, содержащую один указанный символ из объекта String.
// Вернет символ из строки по индексу

// Сравниваем 1 слово с 2,3,4,5. Потом 2 слово с 3,4,5. Потом 3 слово с 4,5. Потом 4 слово с 5.

// const sortedWords = words.sort((a, b) => {
//   if (a.toLowerCase() > b.toLowerCase()) {
//     return 1;
//   }
//   if (a.toLowerCase() < b.toLowerCase()) {
//     return -1;
//   }
//   return 0;
// });

// console.log(sortedWords);

// Задача 19
// Форматирование времени
// Напишите ф-цию, которая переведет значение минут в часы и минуты в формате HH:MM

// function formatTime(minuts) {
//   const hours = Math.floor(minuts / 60);
//   const mins = minuts % 60;
//   //   решение с тернарным оператором
//   //   const hours = Math.floor(minuts / 60);
//   //   const mins = minuts % 60;
//   //   const convertedHours = hours < 10 ? `0${hours}` : hours;
//   //   const convertedMins = mins < 10 ? `0${mins}` : mins;
//   //   return `${convertedHours}:${convertedMins}`;

//   const doubleDigitHours = String(hours).padStart(2, "0");
//   const doubleDigitMins = String(mins).padStart(2, "0");
//   return `${doubleDigitHours}:${doubleDigitMins}`;
// }

// console.log(formatTime(90)); // 01:30
// console.log(formatTime(450)); // 07:30
// console.log(formatTime(1441)); // 24:01

// Задача 20
// Коллекция курсов(includes, indexOf, push)
// Напишите ф - цию для работі с коллекцией обучающих курсов courses.
//     - addCourse(name) - добавляет курс в конец коллекции
//     - removeCourse(name) - удаляет курс из коллекции
//     - updateCourse(oldName, newName) - обновляет название курса
//     - reset() - очищает коллекцию
//     - getAll() - возвращает массив всех курсов
//     - getCourseCount() - возвращает количество курсов в коллекции

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

// addCourse("Expres")

// function addCourses(name) {
//   // добавляет курс в конец коллекции
//   courses.push("Expres");
//   return courses;
// }
// addCourses("Expres");
// console.log(courses); // ["HTML", "CSS", "JavaScript", "React", "PostgreSQL", "Expres"]

// addCourse("CSS")

// function addCourses(name) { // добавляет курс в конец коллекции
//   if (courses.includes(name)) { // если в массиве есть такой курс, то ничего не делаем
//     return "Такой курс уже есть";
//   }
// }
// console.log(addCourses("CSS")); // Такой курс уже есть

// Задача 21
// Кодирование в функции colorOf.функция принимает 3 параметра: r g b.
// Это означает значение цвета красного, зеленого и синего.диапазон значений 0 - 255.
// Используйте toString(16)Преобразование чисел rgb в шестнадцатеричную форму строки.
// наконец, объедините их в цветовой веб - код и верните его.
// код цвета должен начинаться с «#». а затем используйте 2 символа на цвет.

// Например:
// colorOf(255,0,0) should return "#ff0000"
// colorOf(0,111,0) should return "#006f00"
// colorOf(1, 2 ,3) should return "#010203"

// function colorOf(r, g, b) {
//   //coding here
//   const red = r.toString(16).padStart(2, "0");
//   const green = g.toString(16).padStart(2, "0");
//   const blue = b.toString(16).padStart(2, "0");
//   return `#${red}${green}${blue}`;
// }
// console.log(colorOf(255, 0, 0)); // "#ff0000"

// решение 2
// function colorOf(r, g, b) {
//   //coding here
//   return (
//     "#" +
//     r.toString(16).padStart(2, 0) +
//     g.toString(16).padStart(2, 0) +
//     b.toString(16).padStart(2, 0)
//   );
// }

//решение 3
// const colorOf = (...rgb) =>
//   "#" + rgb.map((x) => `0${x.toString(16)}`.slice(-2)).join("");

// Задача 22

// Кодирование в функции firstToLast, функция принимает 2 параметра:
// str и c.strявляется строкой.c является символом.
// Пожалуйста, верните пробел между первой cи последней позицией c.
// Если c в str, должно возвращаться положительное целое число;
// Если есть только один c в str, должен вернуть 0; Если нет c в str, должен вернуть - 1.
// Поиск не должен игнорировать случай.
// Используем indexOf () и lastIndexOf () search ()

// Например:

// firstToLast("ababc","a") should return 2(2-0)
// firstToLast("ababc","c") should return 0(4-4)
// firstToLast("ababc","d") should return -1

// Перебираем строку
// Проверяем есть ли символ в строке
// Если есть, то находим индекс первого и последнего вхождения символа
// Возвращаем разницу между индексами

// function firstToLast(str, c) {
//   let firstIndex = str.indexOf(c);
//   let lastIndex = str.lastIndexOf(c);
//   if (firstIndex === -1) {
//     return -1;
//   } // если символа в строке 1 то возвращаем 0
//   if (firstIndex === lastIndex) {
//     return 0;
//   } else {
//     return lastIndex - firstIndex;
//   }
// }

// решение с помощью switch
// function firstToLast(str, c) {
//   first = str.indexOf(c);
//   last = str.lastIndexOf(c);
//   switch (str.split(c).length - 1) {
//     case 0:
//       return -1;
//     case 1:
//       return 0;
//     default:
//       return last - first;
//   }
// }

// console.log(firstToLast("ababc", "a")); // 2 (2-0)
// console.log(firstToLast("ababc", "c")); // 0 (4-4)
// console.log(firstToLast("ababc", "d")); // -1
