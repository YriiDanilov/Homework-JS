// Вывести сумму цифр числа N

export default (n) => {
  const strN = String(n).split('');
  let sumResult = 0;
  for (let i = 0; i < strN.length; i += 1) {
    sumResult += Number(strN[i]);
  }
  return sumResult;
};


