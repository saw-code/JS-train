// -------------------------------
// ФУНКЦИИ - это блок кода к-й можно выполнять многократно
// let a = 5
// let b = 3
// let c

// c = a + b
// console.log(c)

// a = 8
// b = 12

// c = a + b
// console.log(c)
// мы видим дублирование, а это плохо

// Решим эту проблему с помощью функции
// let a = 5
// let b = 3

// function sum(a, b) {
//   const c = a + b
//   console.log(c)
// }

// sum (a, b)

// a = 8
// b = 12

// sum(a, b)

// Функция может быть:
// - именованной
// - присвоена переменной
// - анонимной
// - аргументом при вызове другой функции
// - значением свойства(метода) объекта

// Функция - это объект в JS, соответственно как у любого объекта у функции есть свойства
// function myFn(a, b) {
//   let c
//   a = a + 1
//   c = a + b
//   return c
// }

// console.log(myFn(10, 3))

// Ф-ция возвращает значение undefined если нет инструкции return