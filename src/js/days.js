// 1. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

export default (numDay) => {

  const days = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

  if (numDay > days.length || numDay <= 0) {
    return `Введите корректное число от 1-7`;
  }
  return days[numDay - 1];
};