import getSum from './js/src/sum.js';
import getFactorial from "./src/js/factorial.js";
import getEvenMumbers from "./src/js/even.js";
import getNotEvenMumbers from "./src/js/notEven.js";
import isPrimeNumber from "./src/js/primeNumber.js";
import getMultTable from "./src/js/multiplicationTable.js";
import getSumEach from "./src/js/sumEach.js";
import getOppositeNum from "./js/src/oppositeNum.js";
import getCountDigit from "./js/src/countDigit.js";
import isPalindrom from "./src/js/isPalindrom.js";
import getSumDegree from "./src/js/sumDegree.js";
import getMonth from "./src/js/getMonth.js";
import getDay from "./src/js/days.js";
import getFirstWords from "./src/js/getFirstWords.js";
import greeting from "./src/js/greeting.js";
import showNumbersAndAge from "./src/js/showNumbersAndAge.js";
import getAgeStatus from "./src/js/getAgeStatus.js";
import fizzbuzz from "./src/js/fizzbuzz.js";
import { per, myLiveFunction } from "./src/js/myLiveFunction.js";


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

// Сделайте функцию, которая принимает параметром номер месяца, и возвращает название этого месяца (Добавить обработку варинта если такого месяца нет)

console.log(`11) ${getMonth(2)}`);

// Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

console.log(`12) ${getDay(3)}`);

// Написать функцию, которая принимает строку (в этом тексте 3-5 предложений), верните каждое первое слово в каждом предложении, через запятую.

console.log(`13) ${getFirstWords('Жил был Вася. Много ел и пил. Через год стал толстым')}`);

// Написать функцию, которой передаем имя, и она возвращает приветствие в зависимости от времени суток (Доброе утро\день\вечер\ночи Иван)

console.log(`14) ${greeting('Рудольф')}`);

// 4. Вывести числа от 1 до 100 в столбец. К каждой цифре подписать состояние возраста (1-17 ребенок, 18-30 - молодой, 30-55 - зрелый, от 55 - старый). Например. 33 - зрелый

console.log(`${showNumbersAndAge()}`);

// 5. Создай новую функцию, в которую передаешь имя и возраст человека и получаешь сообщение (Иван имеет возраст 44 и он зрелый). А также вызови внутри своей функции, функцию из прошлого задания

console.log(`${getAgeStatus('Гундольф', '66')}`);


// Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
// вывод fizz вместо чисел, кратных 3;
// вывод buzz вместо чисел, кратных 5;
// вывод fizzbuzz вместо чисел, кратных как 3, так и 5.


console.log(fizzbuzz(50));


// Рузальтат прожитой жизни представлен в виде объекта 

console.log(`${JSON.stringify(myLiveFunction(per), null, 2)}`);


