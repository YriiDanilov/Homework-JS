// Вывести четные числа от 1 до 100

export default () => {
  let arr = [];
  for (let i = 1; i < 100; i += 1) {
    if (i % 2 === 0) {
      arr.push(i);
    }
  }
  return arr.flat();
};
