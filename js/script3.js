// Объекты - это ассоциативные массивы. Свойства объекта - это пары ключ-значение.
//Литерал объекта - это набор пар ключ - значение, заключенный в фигурные скобки.
// Объекты можно создавать двумя способами: литерально и с помощью конструктора.
// Литеральный способ создания объекта:
// var obj = {
//     name: "John",
//     age: 30,
//     isMarried: false
// };
// Конструктор объекта:
// var obj = new Object();
// obj.name = "John";
// obj.age = 30;
// obj.isMarried = false;
// Доступ к свойствам объекта:
// var obj = {
//     name: "John",
//     age: 30,
//     isMarried: false
// };
// console.log(obj.name); // John
// console.log(obj.age); // 30
// console.log(obj.isMarried); // false

// const x = {}; // литеарльный способ создания объекта
// console.log({}); // {} литеральный способ создания объекта, аргументом функции console.log является объект.
// // Поэтому в консоли выводится пустой объект.
// const rfn = function () {
//   return {}; // возвращаемый объект. Функция возвращает объект. Возврат объекта - это литеральный способ создания объекта.
// };

// Доступ к свойствам объекта через квадратные скобки:
// var obj = {
//     name: "John",
//     age: 30,
//     isMarried: false
// };

// console.log(obj["name"]); // John
// console.log(obj["age"]); // 30
// console.log(obj["isMarried"]); // false

// Доступ к свойствам объекта через переменную:
// var obj = {
//     name: "John",
//     age: 30,
//     isMarried: false
// };

// var key = "name";
// console.log(obj[key]); // John

// var key = "age";
// console.log(obj[key]); // 30

// var key = "isMarried";
// console.log(obj[key]); // false

// Отсутствующие свойства:
// var obj = {
//     name: "John",
//     age: 30,
//     isMarried: false
// };

// console.log(obj.surname); // undefined

// Проверка наличия свойства в объекте:
// var obj = {
//     name: "John",
//     age: 30,
//     isMarried: false
// };

// console.log(obj.hasOwnProperty("name")); // true
// console.log(obj.hasOwnProperty("surname")); // false

//Задание 1
// Делаем плейлист музыки (имя, рейтинг, треки, к-во треков)

// const playlist = {
//   name: "My playlist",
//   rating: 5,
//   tracks: ["track1", "track2", "track3"],
//   trackCount: 3,
// };

// const propertyName = "tracks";

// console.log(playlist); // {name: "My playlist", rating: 5, tracks: Array(3), trackCount: 3}
// console.log(playlist.name); // My playlist . Доступ к свойству объекта через точку.
// console.log(playlist["name"]); // My playlist . Доступ к свойству объекта через квадратные скобки.
// //  Ключ свойства объекта может быть любой строкой, даже если она состоит из нескольких слов.
// // При обращении к не существующему свойству объекта, возвращается undefined.

// console.log(playlist.tracks); // (3) ["track1", "track2", "track3"] // Доступ к свойству объекта через точку.
// console.log(playlist[propertyName]); // (3) ["track1", "track2", "track3"] // Доступ к свойству объекта через переменную.
// console.log(playlist.propertyName); // undefined // Доступ к свойству объекта через точку. Не существующее свойство.
// // Возвращает undefined. Код ищет в объекте с-во с именем propertyName, а не с-во с именем tracks.

// Задание 2
// Короткая запись свойств объекта

// const userName = "Mango";
// const email = "mango@com.ua";

// const user {
//     // userName: userName, // userName: "Mango". Длинная запись
//     // email: email, // email: "mango@com.ua". Длинная запись

//     userName, // userName: "Mango". Короткая запись. Имя свойства совпадает с именем переменной.
//     email, // email: "mango@com.ua" Короткая запись. При совпадении имени переменной и имени свойства можно использовать короткую запись.
// }

// console.log(user); // {userName: "Mango", email: "mango@com.ua"}

// Задание 3
// Вычисляемые свойства
// <input name="color" value="tomato" />

// const colorInputName = "color";
// const colorInputValue = "tomato";

// const colorPickerData = {
//   [colorInputName]: colorInputValue, // color: "tomato". Вычисляемое свойство.
//   // Имя свойства вычисляется в момент выполнения кода. Имя свойства берется из значения переменной colorInputName.
// };

// console.log(colorPickerData); // {color: "tomato"}

// Задание 4
// Ссылочный тип. Массивы и объекты это ссылочные типы данных. Переменная хранит не сам объект, а ссылку на него.

// const a = { x: 1, y: 2 };
// const b = a; // b = {x: 1, y: 2}

// console.log(a === b); // true. Переменные a и b ссылаются на один и тот же объект в памяти.

// // b.x = 10; // b = {x: 10, y: 2}
// console.log(a); // {x: 10, y: 2}. После изменения свойства объекта b, объект a тоже изменился.

// console.log({} === {}); // false. Пустые объекты это разные объекты в памяти.
// console.log([] === []); // false. Пустые массивы это разные объекты в памяти.

// Массив и ф-ция это тоже объекты. Поэтому массивы и ф-ции можно передавать в качестве аргументов в другие ф-ции.

// const a = [1, 2, 3]; // a = [1, 2, 3]
// a.hello = ":)"; // a = [1, 2, 3, hello: ":)"]
// console.log(a); // [1, 2, 3, hello: ":)"] // Массив это объект. Можно добавлять свойства.

// const fn = function () {
//     console.log("Hello"); // Hello
// };

// fn.hello = ":)"; // fn = {hello: ":)"} // Добавили свойство hello со значением ":)" в объект fn.
// console.log(fn); // {hello: ":)"} // Ф-ция это объект. Можно добавлять свойства.

// Напиши скрипт, который, для объекта `user`, последовательно:

// - добавляет поле `mood` со значением `'happy'`
// - заменяет значение `hobby` на `'skydiving'`
// - заменяет значение `premium` на `false`
// - выводит содержимое объекта `user` в формате `ключ:значение` используя
//   `Object.keys()` и `for...of`

// ### Код

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };
// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// const keys = Object.keys(user);
// console.log(keys);

// for (const key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }

// Задание 5
// Создайте объект city1 (var city1 = {}), укажите у него свойства name (название города, строка)
// со значением «ГородN» и population(населенность города, число) со значением 10 млн.
// const city1 = {
//   name: "ГородN",
//   population: 1e7,
// };
// Создайте объект city2 через нотацию {name: "ГородM", population: 1e6}.
// const city2 = {
//   name: "ГородM",
//   population: 1e6,
// };
// Создайте у объектов city1 и city2 методы getName(),
//     которые вернут соответствующие названия городов
// const city1 = {
//   name: "ГородN",
//   population: 1e7,

//   getName() {
//     return city1.name;
//   },
// };

// console.log(city1.getName());

// const city2 = {
//   name: "ГородM",
//   population: 1e6,

//   getName() {
//     return this.name;
//   },
// };

// console.log(city2.getName());

// Создайте методы exportStr() у каждого из объектов.
// Этот метод должен возвращать информацию о городе в формате «name = ГородN\npopulation = 10000000\n».
// Для второго города будет строка со своими значениями.

// const city1 = {
//   name: "ГородN",
//   population: 1e7,

//   getName() {
//     return city1.name;
//   },

//   exportStr() {
//     return `name = ${city1.name}\npopulation = ${city1.population}\n`;
//   },
// };

// console.log(city1.getName());
// console.log(city1.exportStr());

// const city2 = {
//   name: "ГородM",
//   population: 1e6,

//   getName() {
//     return this.name;
//   },

//   exportStr() {
//     return `name = ${this.name}\npopulation = ${this.population}\n`;
//   },
// };

// console.log(city2.getName());
// console.log(city2.exportStr());

// Создайте методы exportStr() у каждого из объектов.
// Этот метод должен возвращать информацию о городе в формате «name = ГородN\npopulation = 10000000\n».
// Для второго города будет строка со своими значениями.
// Примечание: можно обращаться к каждому свойству через цикл for/in, но методы объекта возвращать не нужно

// const city1 = {
//   name: "ГородN",
//   population: 1e7,

//   getName() {
//     return city1.name;
//   },
// };

// console.log(city1.getName());

// const city2 = {
//   name: "ГородM",
//   population: 1e6,

//   getName() {
//     return this.name;
//   },
// };

// console.log(city2.getName());

// Создайте глобальную функцию getObj(), которая возвращает this.
// А у каждого из объектов city1 или city2 метод getCity, который ссылается на getObj.
// Проверьте работу метода.Примечание: к объекту вызова можно обратиться через this.
// (*) Создать объект obj, с методами method1(), method2() и method3().
// В методе method3() должна возвращаться строка «метод3».
// Сделайте так, чтобы было возможно выполнение кода obj.method1().method2().method3().
// Создайте массив d1 с числовыми величинами 45, 78, 10, 3.
// Добавьте в массив d1 еще одно число(d1[7] = 100).Выведите в консоль весь массив и его элементы с индексами 6 и 7.
// Создайте массив d2 с числовыми величинами 45, 78, 10, 3.
// Посчитайте в переменную sum2 сумму чисел в нем, при помощи цикла for .
// Создайте массив d3 с числовыми величинами 45, 78, 10, 3.
// Добавьте в массив d3 еще одно число(например, d[7] = 100)
// Посчитайте в переменную sum3 сумму чисел в нем, при помощи цикла for/in.
// Создайте массив d4 с числовыми величинами 45, 78, 10, 3.
// Напишите функцию сортировки my(a, b), которая при вызове d4.sort(my) отсортирует элементы массива по убыванию чисел.
// Вызовите d4.sort(my)
//     (*) Создайте двумерный массив d5 размером n = 3 элементов в каждом из которых будет m = 4 элементов из целых чисел
//     (в каждый элемент поместить цифру 5).Примечание: при создании двумерного массива используйте циклы.
//         Во внешнем цикле должна появиться конструкция d5[i] = [];
