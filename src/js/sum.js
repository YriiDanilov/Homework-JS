// сумма чисел от 0 до n включительно

export default (n) => {
  if (n === 0) {
    return null;
  }
  let result = 0;
  for (let i = 0; i <= n; i += 1) {
    result += i;
  }

  return result;
};
