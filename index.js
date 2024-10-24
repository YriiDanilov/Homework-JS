import getSum from './src/sum.js';
import getFactorial from './src/factorial.js';
import getEvenMumbers from './src/even.js';
import getNotEvenMumbers from './src/notEven.js';
import isPrimeNumber from './src/primeNumber.js';
import getMultTable from './src/multiplicationTable.js';
import getSumEach from './src/sumEach.js';
import getOppositeNum from './src/oppositeNum.js';
import getCountDigit from './src/countDigit.js';
import isPalindrom from './src/isPalindrom.js';
import getSumDegree from './src/sumDegree.js';

// сумма чисел от 0 до a включительно

let a = 5;

console.log(`1) Сумма чисел от 1 до ${a} равна ${getSum(a)} `);

// факториал числа b через цикл

let b = 5;

console.log(`2) Факториал числа ${b} равен ${getFactorial(b)}`);

// Вывести четные числа от 1 до 100 ( 100 не включительно )

console.log(`3а) Четные числа от 1 до 100 это ${getEvenMumbers()}`);

// Вывести не четные числа от 1 до 100

console.log(`3b) Нечетные числа от 1 до 100 это ${getNotEvenMumbers()}`)


// Проверка на простое число. Если простое, то выводится true, если составное - false

let c = 5;

console.log(`4) Число ${c} ялвялется простым: ${isPrimeNumber(c)}`)

// Таблиц умножения числа d

let d = 9;

console.log(`5) Таблица умножения от 1 до числа ${d}: ${getMultTable(d)}`);

// Вывести сумму цифр числа e

let e = 345;
console.log(`6) Сумма цифр числа ${e} равна ${getSumEach(e)}`);

// Обратное число 

let f = 789;

console.log(`7) Обратное число числа ${f} является ${getOppositeNum(f)}`);

// Количество цифр в числе g

let g = 5678;

console.log(`8) Количество цифр в числе ${g} равно ${getCountDigit(g)}`)

// Проверка палиндрома для числа

let h = 121;

console.log(`9) ${isPalindrom(h)}`);

// Сумма квадратов чисел от 1 до i 

let i = 5;

console.log(`10) Сумма квадратов чисел от 1 до ${i} равна ${getSumDegree(i)}`)

