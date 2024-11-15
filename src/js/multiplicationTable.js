// таблица умножения для числа n

export default (n) => {
  let arr = []
  for (let i = 1; i <= n; i += 1) { 
      arr.push(`\n${i} * ${n} = ${n * i}`);
    }
  return arr.flat();
}
