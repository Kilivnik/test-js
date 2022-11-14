// Методы объекта и this при обращении к с-вам в методах
// Метод - это функция, которая является свойством объекта.

// const playlist = {
//   name: "My playlist",
//   rating: 5,
//   tracks: ["track1", "track2", "track3"],
//   trackCount: 3,
// };
// console.log(playlist); // {name: "My playlist", rating: 5, tracks: Array(3), trackCount: 3}

// Добавляем методы в объект playlist:

// const playlist = {
//   name: "My playlist",
//   rating: 5,
//   tracks: ["track1", "track2", "track3"],
//   trackCount: 3,
//   changeName(newName) {
//     // Метод объекта - changeName с параметром newName
//     console.log("this in changeName: ", this); // this в методе changeName - это объект playlist
//     this.name = newName; // this.name - это свойство name объекта playlist
//   },
// };

// console.log(playlist); // {name: "My playlist", rating: 5, tracks: Array(3), trackCount: 3, changeName: ƒ}
// playlist.changeName(); //вызов метода changeName

// Задача 1
// меняем имя плейлиста на "New playlist", добавляем новый трек

// const playlist = {
//   name: "My playlist",
//   rating: 5,
//   tracks: ["track1", "track2", "track3"],
//   trackCount: 3,
//   changeName(newName) {
//     this.name = newName; // this.name - это свойство name объекта playlist
//   },
//   addNewTrack(newTrack) {
//     this.tracks.push(newTrack); // this.tracks - это свойство tracks объекта playlist
//   },
//   getTrackCount() {
//     return this.tracks.length; // this.tracks - это свойство tracks объекта playlist
//   },
// };

// playlist.changeName("New playlist"); //вызов метода changeName. Передаем в метод changeName параметр newName
// console.log(playlist); // {name: "New playlist", rating: 5, tracks: Array(3), trackCount: 3, changeName: ƒ}
// playlist.addNewTrack("track4"); //вызов метода addNewTrack. Передаем в метод addNewTrack параметр newTrack
// console.log(playlist); // {name: "New playlist", rating: 5, tracks: Array(4), trackCount: 3, changeName: ƒ}
// console.log(playlist.getTrackCount()); // 4

// Перебор объекта. Методы Object.keys, Object.values, Object.entries. Цикл for...in.
// Метод Object.keys возвращает массив ключей объекта,
// Object.values - массив значений, Object.entries - массив массивов ключ - значение.

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// const keys = Object.keys(feedback);
// console.log(keys); // ["good", "neutral", "bad"] - массив ключей объекта feedback

// const values = Object.values(feedback);
// console.log(values); // [5, 10, 3] - массив значений объекта feedback

// const entries = Object.entries(feedback);
// console.log(entries); // (3) [Array(2), Array(2), Array(2)] - массив массивов ключ - значение объекта feedback

// Перебор объекта с помощью цикла for...in

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// let totalFeedback = 0;

// for (const key in feedback) {
//   console.log(key); // ключи объекта
//   console.log(feedback[key]); // значения ключей объекта
//   totalFeedback += feedback[key]; // суммируем значения ключей объекта
// }

// console.log("Total: ", totalFeedback); // 18

// Работа с коллекцией -массивом объектов.

// const friends = [
//   { name: "Mango", online: true },
//   { name: "Kiwi", online: false },
//   { name: "Poly", online: true },
//   { name: "Ajax", online: false },
// ];

// console.table(friends); // выводит массив объектов в виде таблицы

// Перебор массива объектов с помощью цикла for...of

// for (let friend of friends) {
//   // friend - это каждый объект массива friends
//   // мы получаем доступ к свойствам объекта friend
//   // это ссылка на объект, а не копия. Мы можем изменять свойства объекта. Но не перезаписывать ссылку на объект
//   console.log(friend); // {name: "Mango", online: true}
//   console.log(friend.name); // Mango
//   console.log(friend.online); // true
//   friend.newProp = 100; // добавляем новое свойство объекту friend
//   console.log(friend); // {name: "Mango", online: true, newProp: 100}
//   friends[0].online = false; // изменяем свойство объекта
//   console.log(friend); // {name: "Mango", online: false, newProp: 100} - изменения отражаются во всех ссылках на объект
// }
