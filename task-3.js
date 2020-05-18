// Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа:
// getCodeStringFromText(‘hello’) // “104 101 108 108 111”
// подсказка: для получения кода используйте специальный метод
function getCodeStringFromText(str) {
  let rezult = "";
  for (word of str) {
    rezult += word.charCodeAt() + " ";
  }
  return rezult;
}
console.log(getCodeStringFromText("hello"));
