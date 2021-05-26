// -        Реализовать цикл, который будет выводить число а, пока оно не станет меньше 10
function getNumberWithCondition(number, condition, callback) {
  while (number >= condition) {
    console.log(number);
    number = callback(number);
  }
}
getNumberWithCondition(15, 10, (item) => {return item = item - 1;});

// -        Реализовать цикл, который выводит в консоль простые числа

function isPrimeNumber (number){
  let i = 2;
  while (i <= Math.sqrt(number)) {
    if (number % i === 0) {
      return false;
    } else {
      i++;
    }
  }
  return true;
} 

function getPrimeNumbers(fromNumber, toNumber) {
  for (let number = fromNumber; number <= toNumber; number++) {
    if (isPrimeNumber(number)) console.log(number);
  }
}
getPrimeNumbers(2, 30);

// -        Реализовать цикл, который выводит в консоль нечетные числа

function getOddNumbers(fromNumber, toNumber) {
  let oddNumber = (fromNumber % 2 === 0)? fromNumber + 1: fromNumber;
  for (let number = oddNumber; number <= toNumber; number += 2) {
    console.log(number);
  }
}
getOddNumbers(2, 30);