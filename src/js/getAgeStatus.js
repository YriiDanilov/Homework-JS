// 5. Создай новую функцию, в которую передаешь имя и возраст человека и получаешь сообщение (Иван имеет возраст 44 и он зрелый). А также вызови внутри своей функции, функцию из прошлого задания

export default (name, age) => {
  const greeting = (name) => {
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
  }

  const getAgePerson = (agePerson) => {
    if (agePerson >= 1 && agePerson <= 17) {
      return `Вы еще ребенок`;
    }
    if (agePerson >= 18 && agePerson < 30) {
      return `Вы уже молодой человек`;
    }
    if (agePerson >= 30 && agePerson < 55) {
      return `Вы зрелый человек`;
    }
    if (agePerson >= 55) {
      return `Вы старый человек`;
    }
  };

  return `${greeting(name)}. ${getAgePerson(age)}`;
};