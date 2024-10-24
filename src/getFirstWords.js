//2. Написать функцию, которая принимает строку (в этом тексте 3-5 предложений), верните каждое первое слово в каждом предложении, через запятую.

export default (data) => {
  return data
    .split(".")
    .map((item) => item.trim().split(" ")[0])
    .join(", ");

  /* let sentences = data.split(".");
  let resultArr = [];

  for (let i = 0; i < sentences.length; i++) {
    const deleteSpace = sentences[i].trim();
    console.log(deleteSpace);
    const firstWords = deleteSpace.split(' ')[0];
    console.log(firstWords)
    resultArr.push(firstWords);
  }
  return resultArr.join(", "); */
};
