/* Завдання Salesforce
Разница между списком целых чисел
Найдите разницу между двумя списками целых чисел [1, 3, 3, 4, 6, 5, 4] и [6, 3, 5, 2, 2]
Функциональные требования
Реализуйте логику, которая находит разницу между «первым» и «вторым» списками и выводит результат на консоль. Если вы нашли несколько решений, используйте All.
Ожидаемый вывод консоли:
[1, 2, 4]

const first = [1, 3, 3, 4, 6, 5, 4];
const second = [6, 3, 5, 2, 2];

Найдите уникальные элементы из 2х массивов [1, 3, 3, 4, 6, 5, 4] и [6, 3, 5, 2, 2]

Перебираем первый массив и проверяем есть ли элемент во втором массиве
Если нет, то добавляем в новый массив
Если есть, то пропускаем

Решение 1

const unique = [];

for (let i = 0; i < first.length; i += 1) {
  if (!second.includes(first[i])) {
    unique.push(first[i]);
  }
}
console.log(unique); // [1, 2, 4]

// 2. Перебираем второй массив и проверяем есть ли элемент в первом массиве
// Если нет, то добавляем в новый массив
// Если есть, то пропускаем

for (let i = 0; i < second.length; i += 1) {
  if (!first.includes(second[i])) {
    unique.push(second[i]);
  }
}
console.log(unique); // [1, 2, 4, 2]

// Удаляем дубликати с массива unique и сортируем его по возрастанию

const uniqueSorted = unique
  .filter((item, index) => unique.indexOf(item) === index)
  .sort((a, b) => a - b);
console.log(uniqueSorted); // [1, 2, 4]

Решение 2

const unique1 = first.filter((item) => !second.includes(item));

const unique2 = second.filter((item) => !first.includes(item));

const unique = [...unique1, ...unique2].sort((a, b) => a - b);
// удалить дубликаты
const uniqueSorted = unique.filter(
  (item, index) => unique.indexOf(item) === index
);
console.log(uniqueSorted); // [1, 2, 4]

Решение 3 через функцію

function getUnique(arr1, arr2) {
  const unique = arr1.filter((item) => !arr2.includes(item));
  const unique2 = arr2.filter((item) => !arr1.includes(item));
  const uniqueSorted = [...unique, ...unique2].sort((a, b) => a - b);
  return uniqueSorted.filter(
    (item, index) => uniqueSorted.indexOf(item) === index
  );
}

console.log(getUnique(first, second)); // [1, 2, 4]

task trigger apex

Напишите триггер, автоматически определяющий основное рабочее место

Если эталонный объект создается впервые и других рабочих мест для этого контакта нет, isPrimary=true.
Если Isprimary был изменен с «true» на «false», «true» должно быть установлено на последнем рабочем месте
(используйте поле даты создания для эталонного объекта).
Если Isprimary был изменен с «false» на «true», флажок Isprimary должен быть снят с последнего основного рабочего места
(используйте поле даты создания для эталонного объекта).
Соображения:
для одного контакта допускается только одно основное рабочее место​

trigger WorkPlaceTrigger on WorkPlace__c (before insert, before update) {
    // Получаем список объектов, которые будут вставлены или обновлены
    List<WorkPlace__c> workPlaces = Trigger.new;
    // Получаем список объектов, которые уже существуют в базе данных
    List<WorkPlace__c> oldWorkPlaces = Trigger.old;
    // Создаем список для хранения объектов, которые будут обновлены
    List<WorkPlace__c> workPlacesToUpdate = new List<WorkPlace__c>();
    // Создаем список для хранения объектов, которые будут вставлены
    List<WorkPlace__c> workPlacesToInsert = new List<WorkPlace__c>();
    // Создаем список для хранения объектов, которые будут удалены
    List<WorkPlace__c> workPlacesToDelete = new List<WorkPlace__c>();
    // Создаем список для хранения объектов, которые будут обновлены
    List<Contact> contactsToUpdate = new List<Contact>();

    // Перебираем список объектов, которые будут вставлены или обновлены
    for (WorkPlace__c workPlace : workPlaces) {
        // Если объект будет вставлен
        if (workPlace.Id == null) {
            // Если у контакта нет рабочих мест
            if (workPlace.Contact__r.WorkPlaces__r.size() == 0) {
                // Устанавливаем флаг IsPrimary
                workPlace.IsPrimary__c = true;
                // Добавляем объект в список для вставки
                workPlacesToInsert.add(workPlace);
            } else {
                // Если у контакта есть рабочие места
                // Если устанавливается флаг IsPrimary
                if (workPlace.IsPrimary__c == true) {
                    // Получаем список рабочих мест контакта
                    List<WorkPlace__c> contactWorkPlaces = workPlace.Contact__r.WorkPlaces__r;
                    // Перебираем список рабочих мест контакта
                    for (WorkPlace__c contactWorkPlace : contactWorkPlaces) {
                        // Если у рабочего места установлен флаг IsPrimary
                        if (contactWorkPlace.IsPrimary__c == true) {
                            // Снимаем флаг IsPrimary
                            contactWorkPlace.IsPrimary__c = false;
                            // Добавляем объект в список для обновления
                            workPlacesToUpdate.add(contactWorkPlace);
                        }
                    }
                    // Добавляем объект в список для вставки
                    workPlacesToInsert.add(workPlace);
                } else {
                    // Если не устанавливается флаг IsPrimary
                    // Добавляем объект в список для вставки
                    workPlacesToInsert.add(workPlace);
                }
            }
        } else {
            // Если объект будет обновлен
            // Получаем объект из базы данных
            WorkPlace__c oldWorkPlace = [SELECT Id, IsPrimary__c FROM WorkPlace__c WHERE Id = :workPlace.Id];
            // Если устанавливается флаг IsPrimary
            if (workPlace.IsPrimary__c == true) {
                // Если флаг IsPrimary был снят
                if (oldWorkPlace.IsPrimary__c == false) {
                    // Получаем список
                    List<WorkPlace__c> contactWorkPlaces = workPlace.Contact__r.WorkPlaces__r;
                    // Перебираем список рабочих мест контакта

                    for (WorkPlace__c contactWorkPlace : contactWorkPlaces) {
                        // Если у рабочего места установлен флаг IsPrimary
                        if (contactWorkPlace.IsPrimary__c == true) {
                            // Снимаем флаг IsPrimary
                            contactWorkPlace.IsPrimary__c = false;
                            // Добавляем объект в список для обновления
                            workPlacesToUpdate.add(contactWorkPlace);
                        }
                    }
                    // Добавляем объект в список для обновления
                    workPlacesToUpdate.add(workPlace);
                } else {
                    // Если флаг IsPrimary был установлен
                    // Добавляем объект в список для обновления
                    workPlacesToUpdate.add(workPlace);
                }
            } else {
                // Если не устанавливается флаг IsPrimary
                // Добавляем объект в список для обновления
                workPlacesToUpdate.add(workPlace);
            }

}

        }
        // Вставляем объекты
        insert workPlacesToInsert;
        // Обновляем объекты
        update workPlacesToUpdate;
    }
*/

/*Тестові задачі з JavaScript

Завдання 1

Максимальна кількість одиниць зерна, яку можна завантажити на баржу
Кожен рівень знаходиться безпосередньо поруч із рівнем, що стоїть поруч із ним в масиві, за винятком випадків,
коли показана висота 0, тоді це дно баржі.
Окрему одиницю можна уявити як двомірний квадрат шириною 1.
Слідкуйте за швидкодією: вам знадобиться рішення, лінійне кількості рівнів
(кількість ітерацій має бути кратною кількості рівнів, а не збільшуватися експоненційно).

const input1 = [4, 1, 3]; // 2
const input2 = [2, 1, 5, 2, 7, 4, 10]; // 7
const input3 = [2, 0, 1, 5, 2, 7]; // 6
const input4 = [2, 4, 2]; // 0
const input5 = [7, 4]; // 0
const input6 = []; // 0

рішення 1 (просте)
function loadGrain(levels) {
  // your code here
  let maxGrain = 0; // максимальна кількість зерна
  let maxLeft = levels[0]; // максимальна кількість зерна зліва
  let maxRight = levels[levels.length - 1]; // максимальна кількість зерна справа

  let left = 0; // ліва межа
  let right = levels.length - 1; // права межа

  while (left <= right) {
    // поки ліва межа не перевищить праву
    if (maxLeft <= maxRight) {
      // якщо ліва межа менша або дорівнює правій
      if (maxLeft - levels[left] > 0) {
        // якщо різниця між максимальною кількістю зерна зліва і поточним рівнем більше 0
        maxGrain += maxLeft - levels[left]; // додаємо різницю до максимальної кількості зерна
      }
      maxLeft = Math.max(maxLeft, levels[left]); // знаходимо максимальну кількість зерна зліва
      left += 1; // збільшуємо ліву межу
    } else {
      if (maxRight - levels[right] > 0) {
        // якщо різниця між максимальною кількістю зерна справа і поточним рівнем більше 0
        maxGrain += maxRight - levels[right]; // додаємо різницю до максимальної кількості зерна
      }
      maxRight = Math.max(maxRight, levels[right]); // знаходимо максимальну кількість зерна справа
      right -= 1; // зменшуємо праву межу
    }
  }

  return maxGrain; // повертаємо максимальну кількість зерна
}

console.log(input1, loadGrain(input1)); // 2
console.log(input2, loadGrain(input2)); // 7
console.log(input3, loadGrain(input3)); // 6
console.log(input4, loadGrain(input4)); // 0
console.log(input5, loadGrain(input5)); // 0
console.log(input6, loadGrain(input6)); // 0

рішення 2 (складне)
function levelReducer(arr) {
  return arr.reduce(
    (acc, level, i) => {
      i === 0 || level > acc.currentStage
        ? (acc.currentStage = level)
        : (acc.cargo += acc.currentStage - level);
      return acc;
    },
    {
      currentStage: 0,
      cargo: 0,
    }
  ).cargo;
} // редьюсер, который считает количество зерна между уровнями

function loadGrain(levels) {
  let totalGain = 0; // будем тут хранить зерно
  const maxStage = Math.max(...levels); // определили максимальный уровень
  const firstMaxIndex = levels.indexOf(maxStage); // получили индекс максимального уровня с двух сторон (если их больше 1, то это особый случай)
  const lastMaxIndex = levels.lastIndexOf(maxStage);
  const beforeMaxSlice = levels.slice(0, firstMaxIndex + 1); // взяли слайс уровней до максимума
  const afterMaxSlice = levels.slice(lastMaxIndex).reverse(); // взяли слайс уровней после максимума. для удобства подсчёта - перевернули, чтобы он стал аналогичным с тем что до
   обработали особый случай, когда максимальный уровень не один 
  if (firstMaxIndex !== lastMaxIndex) {
    const maxSlice = levels.slice(firstMaxIndex, lastMaxIndex + 1); // взяли слайс максимального уровня
    totalGain += maxSlice.reduce(
      (acc, level) => (level !== maxStage ? (acc += maxStage - level) : acc),
      0
    ); // посчитали груз в макс слайсе и прибавили к тоталу
  }
   получили вес груза до и после максимального лвла (если нет особого случая, то их сумма - это вся сумма груза) 
  const beforeMaxCargo = levelReducer(beforeMaxSlice);
  const afterMaxCargo = levelReducer(afterMaxSlice);
  totalGain += beforeMaxCargo + afterMaxCargo; // прибавили к тоталу вес до и после максимума
  return totalGain;
}

console.log(loadGrain([5, 2, 3, 4, 5, 4, 3, 2]));
console.log(loadGrain([4, 1, 3]));
console.log(loadGrain([2, 1, 5, 2, 7, 4, 10]));
console.log(loadGrain([2, 0, 1, 5, 2, 7]));
console.log(loadGrain([2, 4, 2]));
console.log(loadGrain([]));  
*/

// завдання 2
// Когда книга была издана, для нумерации ее страниц потребовалось 2775 цифр.
// Сколько страниц в книге?
// первые 9 страниц - это 9 цифр ( так как 9 однозначных )

// 2775 - 9 = 2766 цифры остается

// двузначные с 10 по 99 - это 90 страниц, по 2 цифры:
// 90 * 2 = 180 цифр

// 2766 - 180 = 2586 остается

// далее идут трехзначные числа:
// 2586 : 3 = 862 страницы с трехзначными числами

// 862 + 9 + 90 = 961 страница в книге.

// Ответ: 961 страница.

// console.log(1);
