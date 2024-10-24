// 3. Написать функцию, которой передаем имя, и она возвращает приветствие в зависимости от времени суток (Доброе утро\день\вечер\ночи Иван)

export default (name) => {
  
  const time = new Date().getHours();

  if (time.valueOf() >= 0 && time.valueOf() <= 6) {
    return `Доброй ночи, ${name}`;
  }
  if (time.valueOf() >= 6 && time.valueOf() <= 9) {
    return `Доброе утро, ${name}`;
  }
  if (time.valueOf() >= 10 && time.valueOf() <= 18) {
    return `Добрый день, ${name}`;
  }
  if (time.valueOf() >= 18 && time.valueOf() <= 24) {
    return `Добрый вечер, ${name}`;
  }
};