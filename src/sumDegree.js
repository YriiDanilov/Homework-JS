// Сумма квадратов чисел от 1 до 10

export default (n) => {
  let result = 0;
  for (let i = 1; i <= n; i += 1) {
    result += i ** 2;
  }
  return result;
}
