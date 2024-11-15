// 0. Сделайте функцию, которая принимает параметром номер месяца, и возвращает название этого месяца (Добавить обработку варинта если такого месяца нет)

export default (num) => {

  const months = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];

  if (num > months.length || num <= 0) {
    return `Введите корректный номер месяца от 1 до 12`;
  }
  return months[num - 1];
};