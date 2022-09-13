

// ----------------------------------------------------------------
// КОЛБЭК ФУНКЦИИ
// function printMyName() {
//   console.log('Bogdan')
// }

// console.log('start')
// setTimeout - встроеная функция, внутри себе вызывает функцию printMyName через 2000 миллисекунд
// setTimeout(printMyName, 2000)

// ---------------------
// ОБЛАСТИ ВИДИМОСТИ
// let a
// let b

// function myFn() {
//   let b
//   a = true
//   b = 10
//   console.log(b)
// }

// myFn()

// console.log(a)
// console.log(b)

// ------------------------------------------------------------------------------------------------
// ЦЕПОЧКА ОБЛАСТЕЙ ВИДИМОСТИ
// const a = 5

// function myFn() {
//   function innerFn() {
//     console.log(a)
//   }
//   innerFn()
// }

// myFn()

// НЕ РЕКОМЕНДУЕТСЯ. Если переменная a не объвлена, то автоматически она объявится в глобальной области видемости
// function myFn() {
//   a = true
//   console.log(a)
// }

// myFn()

// console.log(a)
// СТРОГИЙ РЕЖИМ. Запрещает использование необъявленных переменных. 'use strict' - эта строка должна быть первой в глобальной
// области видимости или в области видимости функции
// 'use strict'

// function myFn() {
//   a = true
//   console.log(a)
// }

// myFn()

// console.log(a)