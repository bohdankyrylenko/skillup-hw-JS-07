// Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений.
// Данное задание выполните после того как познакомитесь с методами массивов:
// changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.

let arr1 = [1, 2, 3];
let arr2 = ["a", "b", "c", "d"];

function changeCollection() {
  let result = [];
  for (let i = 0; i < arguments.length; i++) {
    arguments[i].shift();
    result.push(arguments[i]);
  }
  return result;
}

console.log(changeCollection(arr1, arr2)); // [ [ 2, 3 ], [ 'b', 'c', 'd' ] ]
