// факториал числа n через цикл

export default (n) => {
  let result = 1;

  for (let i = 1; i <= n; i += 1) {
    result *= i;
  }
  return result;
}

