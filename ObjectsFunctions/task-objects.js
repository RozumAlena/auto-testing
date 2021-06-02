// -        Создать объект car, добавить к нему свойство color со значением 'черный'
const car = {};
car.color = 'черный';

// -        Изменить свойство color объекта car на 'зеленый'

car.color = 'зеленый';

// -        В объект car добавить свойство power, которое является функцией и выводит в консоль мощность двигателя

car.power = function() {
  console.log("Мощность двигателя уточняется...");
};

// -        На склад принимают груши и яблоки, напишите функцию, 
// которая возвращает результат сложения количества принятых груш и яблок

function getSumFruit(pear, apple) {
  return pear + apple;
} 
getSumFruit(5, 7);

// -        В терминале оплаты сохранено ваше имя, напишите функцию для определения
//  имени в терминале(если вы ввели ваше имя, то привет + имя, если нет, то нет такого имени)
let yourName = prompt("Set your name, please."); 
function isMyName(name) {
  let result = (name !== null && name !== undefined && name !== "")
  ? `Hello, ${name}!`
  : "There isn't that name!";
  return result;
  }
  isMyName(yourName);

// -        Напишите функцию вычисления типа аргумента и вывод типа в консоль

function getTypeArgument (arg) {
  let typeArg = typeof arg;
  console.log(typeArg);
}

// -        Напишите функцию, которая определяет является ли число простым или нет

function isPrimeNumber (num){
  let i = 2;
  while (i <= Math.sqrt(num)) {
    if (num % i === 0) {
      return false;
    } else {
      i++;
    }
  }
  return true;
}