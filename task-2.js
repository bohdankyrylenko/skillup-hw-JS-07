// Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами

function TimeCreate(FirstTime) {
  let result = firstTime;

  return function (SecondTime) {
    result *= SecondTime;

    return result;
  };
}

const Time = TimeCreate(2);

console.log(Time(2));
console.log(Time(1));
console.log(Time(3));
console.log(Time(10));
