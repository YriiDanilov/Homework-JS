// Обратное число n

export default (num) => {
  const strN = String(num)
    .split('')
    .reverse()
    .join('');

  return Number(strN);
}

/* решение циклом

const oppositNum = (num) => {
  const strN = String(num).split('');
  let resultStr = '';
    for (let i = strN.length -1; i >= 0; i -= 1) {
      resultStr += strN[i];
    }

  return Number(resultStr);
} */
