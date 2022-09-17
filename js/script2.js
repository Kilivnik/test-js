// Тестові задачі з JavaScript

// Завдання 1

// Максимальна кількість одиниць зерна, яку можна завантажити на баржу
// Кожен рівень знаходиться безпосередньо поруч із рівнем, що стоїть поруч із ним в масиві, за винятком випадків,
// коли показана висота 0, тоді це дно баржі.
// Окрему одиницю можна уявити як двомірний квадрат шириною 1.
// Слідкуйте за швидкодією: вам знадобиться рішення, лінійне кількості рівнів
// (кількість ітерацій має бути кратною кількості рівнів, а не збільшуватися експоненційно).

// рішення 1 (просте)
const input1 = [4, 1, 3]; // 2
const input2 = [2, 1, 5, 2, 7, 4, 10]; // 7
const input3 = [2, 0, 1, 5, 2, 7]; // 6
const input4 = [2, 4, 2]; // 0
const input5 = [7, 4]; // 0
const input6 = []; // 0

// рішення 1 (просте)
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
