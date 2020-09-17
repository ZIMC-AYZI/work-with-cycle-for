function F() {}
console.log(F.prototype)

// Задача (Система уравнений)
function systemEquations(a, b) {
  let x = 0;
  if (a > b) {
    x = a + b / (2 * 4);
  } else if (a === b) {
    x = 400;
  } else if (a < b) {
    x = a - b + 2 / (b * 4);
  }
  console.log(x);
}
// systemEquations(3, 3);

// 2. Задача (Попадание точки в область)
function firstPicture() {
  let x = prompt("write x", "3");
  let y = prompt("write y", "5");
  if (x >= -4 && x <= 4 && y >= 0 && y <= 4) {
    console.log("Точка попадает в область");
  } else console.log("точка не попадает в область");
}
// firstPicture();

function secondPicture() {
  let x = prompt("write x", "3");
  let y = prompt("write y", "5");
  if (x === 0 && y <= 1 && y >= -1) {
    console.log("точка попадает в область");
  } else console.log("точка не попадает в область");
}
//
function thirdPicture() {
  let x = prompt("write x", "3");
  let y = prompt("write y", "5");
  if (x >= -2 && x <= 0 && y >= -2 && y <= 0) {
    console.log("точка попадает в область");
  } else console.log("точка не попадает в область");
}
// thirdPicture();

// 3. Задача (Оператор switch)
// При помощи prompt запросить у пользователя номер дня недели.
//  Вывести при помощи alert название дня недели.
//  если пользователь ввел некорректное значение вывести
//   сообщение "Такого дня недели не существует!"
function dayOfWeek() {
  let day = prompt("Write day of week", "4");
  switch (day) {
    case "1":
      alert("Mondey");
      break;
    case "2":
      alert("Tuesday");
      break;
    case "3":
      alert("Wednesday");
      break;
    case "4":
      alert("Thursday");
      break;
    case "5":
      alert("Friday");
      break;
    case "6":
      alert("Saturday");
      break;
    case "7":
      alert("Sunday");
      break;
    default:
      alert("Такого дня недели не существует");
  }
}
// dayOfWeek();

// 4. Задача (Условный оператор)
// Пользователь вводит два числа. Найти и вывести максимальное
//  из двух чисел.
function maxNumber() {
  let first = prompt("write first number", "5");
  let second = prompt("write second number here", "2");
  if (first > second) {
    console.log(fist);
  } else console.log(second);
}
// maxNumber();

// 5. Задача (Условный оператор)
// Найти максимальное из двух чисел.
// Учтите вариант равенства чисел
function maxNumberTwo() {
  let first = prompt("write first number", "5");
  let second = prompt("write second number here", "2");
  if (first > second) {
    console.log(fist);
  } else if (first < second) {
    console.log(second);
  } else console.log("числа равны");
}
// maxNumberTwo();

// 6. Задача (Условный оператор)
// В первом подъезде квартиры с 1 по 20.
// Во втором с 21 по 48. В третьем с 49 по 90.
//  Пользователь вводит номер квартиры.
//  Программа должна указать в каком подъезде находится
//   данная квартира. Программа должна учитывать
//    вариант ввода чисел за пределами диапазона 1..90.

function roomNumber() {
  let userNumber = prompt("Введите номер квартиры", "6");
  if (userNumber >= 1 && userNumber <= 20) {
    console.log("Вам в первый подьезд");
  } else if (userNumber >= 21 && userNumber <= 48) {
    console.log("Вам во второй подьезд");
  } else if (userNumber >= 49 && userNumber <= 90) {
    console.log("Вам в третий подьезд");
  } else console.log("Вам на другой район");
}
// roomNumber();

// 7. Задача (Условный оператор)
// Пользователь вводит логин и пароль.
// Если логин и пароль совпадают с указанными ниже,
// то выводится «Добро пожаловать». Если не совпадают –
// то «Ошибка входа»
function autorization() {
  let userName = prompt("Login", "asd..");
  let password = prompt("password", "123..");
  if (userName === "ivan" && password === "334455") {
    alert("Добро пожаловать");
  } else if (userName === "alex" && password === "777") {
    alert("Добро пожаловать");
  } else if (userName === "petr" && password === "b5678") {
    alert("Добро пожаловать");
  } else alert("Ошибка входа");
}
// autorization();

// 8. Задача (Условный оператор)
// Пользователь вводит год рождения. Программа показывает количество
// лет и если лет больше или равно 16, то пишет – «добро пожаловать»,
// если нет – «вход воспрещен».
function checkAge() {
  let dataBirth = prompt("Введите год рождения", "1978");
  let data = new Date();
  let yearNow = data.getFullYear();
  let userAge = yearNow - dataBirth;
  if (userAge >= 16) {
    console.log("Добро пожаловать");
  } else console.log("вход воспрещен");
}
// checkAge();

// 9. Задача (Условный оператор)
// Создайте программу, которая выводит надбавку за стаж.
// Пользователь вводит стаж работы, а программа пишет ему надбавку.
function workBonus() {
  let stageUser = prompt("введите стаж", "6");
  if (stageUser >= 0 && stageUser < 3) {
    console.log("надбавка 0 %");
  } else if (stageUser >= 3 && stageUser < 10) {
    console.log("надбавка 10 %");
  } else if (stageUser >= 10 && stageUser < 20) {
    console.log("надбавка 20 %");
  } else if (stageUser >= 20) {
    console.log("надбавка 25 %");
  }
}
// workBonus();

// 10. Задача (креативная)
// Написать программу которая будет склонять слово
//  “товар” в зависимости от количества товаров в корзине.
//  Например 1 - товар, 4 - товара, 6 - товаров.
function products() {
  let myBag = prompt("сколько товаров хотите?", "3");
  if (myBag === 1) {
    console.log(`у вас ${myBag} товар`);
  } else if (myBag >= 1 && myBag < 5) {
    console.log(`у вас ${myBag} товара`);
  } else if (myBag >= 5) {
    console.log(`у вас ${myBag} товаров`);
  } else console.log(" купите что-нибудь)");
}
// products();
