// Выполнить сложение различных типов(string+boolean, string+number, number+boolean)

let str = "word";
let flag = true;
let num = 5;
console.log("Cложение различных типов:");
console.log(str + flag);
console.log(str + num);
console.log(num + flag);

// Выполнить умножение различных типов(string * boolean, string * number, number * boolean)

console.log("Умножение различных типов:");
console.log(str * flag);
console.log(str * num);
console.log(num * flag);

// Выполнить деление различных типов(string/boolean, string/number, number/Boolean)

console.log("Деление различных типов:");
console.log(str / flag);
console.log(str / num);
console.log(num / flag);

// Выполнить явное преобразование(number, string, boolean)

let a = "5";
let booleanValue = false;
console.log(+a, typeof +a);
console.log(Boolean(a), typeof Boolean(a));
console.log(String(booleanValue), typeof String(booleanValue));