// Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и значение на которое хочу проверять.
// Проверять что все аргументы переданы. Возвращать новый массив с пользователями соответсвующие указанным параметрам.
// Данное задание выполните после того как познакомитесь с методами массивов

funcGetUsers(users, "gender", "male"); // [ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ]

let arr = [
  {
    name: "Paul",
    age: 22,
    gender: "male",
  },
  {
    name: "Lora",
    age: 11,
    gender: "female",
  },
  {
    name: "Frank",
    age: 32,
    gender: "male",
  },
  {
    name: "Bob",
    age: 28,
    gender: "male",
  },
  {
    name: "Monica",
    age: 47,
    gender: "female",
  },
];

function funcGetUsers(users, key, value) {
  if (users && key && value) {
    let newArr = users.filter((item) => {
      return item[key] === value;
    });
    return newArr;
  } else {
    console.log("не все аргументы");
  }
}
console.log(funcGetUsers(arr, "name", "age"));
