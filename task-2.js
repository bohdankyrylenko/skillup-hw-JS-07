// Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.
let str = "tset";
function reverseString(word) {
  let rezult = word.split("").reverse().join("");
  return rezult;
}
reverseString(str);
console.log(str);
