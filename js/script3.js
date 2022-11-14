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
