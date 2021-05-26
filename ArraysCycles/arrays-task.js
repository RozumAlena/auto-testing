// -        Дан массив состоящий из названий фильмов, выполните перебор массива
//  с выводом в консоль названия каждого фильма

const arrMovies = ["first movie", "second movie", "third movie"];
arrMovies.forEach(item => console.log(item));

// -        Дан массив производителей автомобилей, преобразовать массив в строку и обратно в массив
const arrCars = ["Mercedes", "BMW", "Opel", "Renault"];
arrCars.join(" ").split(" ");

// -        Дан массив имен ваших знакомых, добавить к каждому элементу массива слова hello
const arrNames = ["Inessa", "Yanina", "Sveta"];
arrNames.map(item => `Hello, ${item}`);

// -        Преобразовать числовой массив в Boolean
const arrNumbers = [1, 2, 3, 4, 5, 6, 7];
arrNumbers.map(item => Boolean(item));

// -        Отсортировать массив [1,6,7,8,3,4,5,6] по убыванию
const arrNum = [1, 6, 7, 8, 3, 4, 5, 6];
arrNum.sort((a, b) => b - a);

// -        Отфильтровать массив [1,6,7,8,3,4,5,6] по значению >3
const arrNumToFilter = [1, 6, 7, 8, 3, 4, 5, 6];
arrNumToFilter.filter( item => item > 3);

// -        Написать функцию, которая принимает два параметра - массив и число
//  и выводит индекс элемента массива равный числу
function searchIndexOfNumber(arr, num) {
  return arr.findIndex(item => item === num);
}