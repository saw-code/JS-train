

// ---------------------------------------
// ОПЕРАТОРЫ
// Текстовые операторы:
// typeof - можно проверить тип того или иного значения
// instanceof - можно проверить принадлежность объекта к тому или иному классу
// new - можно создать объект класса
// delete - можно удалить свойство объекта

// ---------------------------------
// ЛОЖНЫЕ ЗНАЧЕНИЯ
// Boolean(value)
// false
// 0
// ''
// undefined
// null

// ОПЕРАТОР ... (разделение на свойства)
// const button = {
//   width: 200,
//   text: 'Buy',
// }
// если бы в button уже было свойство color то в redButton оно было бы перезаписано на 'red' т.к. ... в начале объекта записано
// но если ... записать после свойства color в объекте redButton, то color отсанется со значением таким же как и в button
// const redButton = {
//   ...button,
//   color: 'red'
// }

// console.table(redButton)

// ------------------------------------------------------------------------------------------------
// ОБЪЕДИНЕНИЕ ОБЪЕКТОВ С ПОМОЩЬЮ ...
// в этом примере первоначальные объекты не будут мутированы если в них нет вложенных олбъектов при перезаписи свойств
// const buttonInfo = {
//   text: 'Buy'
// }

// const buttonStyle = {
//   color:'yellow',
//   width: 200,
//   height: 300
// }

// const button = {
//   ...buttonInfo,
//   ...buttonStyle
// }

// console.table(button)

// --------------------------------------
// ШАБЛОННЫЕ СТРОКИ
// const hello = 'Hello'
// const world = 'World'

// const greeting = `${hello} ${world}`
// console.log(greeting)


// ----------------------------------------------------------------
// ФУНКЦИОНАЛЬНЫЕ ВЫРАЖЕНИЯ
// Объявленная функция
// function myFn(a, b) {
//   let c
//   a = a + 1
//   c = a + b
//   return c
// }

// Функциональное выражение - всегда анонимны, имя у них отсутствует
// function(a, b) {
//   let c
//   a = a + 1
//   c = a + b
//   return c
// }

// Присваивание функционального выражения переменной
// const myFunction = function(a, b) {
//   let c
//   a = a + 1
//   c = a + b
//   return c
// }

// myFunction(5, 3)

// Функциональное выражение в вызове другой функции - пример ииспользования функционального выражения
// setTimeout(function()  {
//   console.log('Отложенное сообщение')
// }, 1000)

// -------------------------------------------
// СТРЕЛОЧНЫЕ ФУНКЦИИ - у них нет имени и в них нет ключвого слова function
// стрелочная функция - это выражение. Она всегда анонимная
// (a, b) => {
//   let c
//   a = a + 1
//   c = a + b
//   return c
// }

// const myFunction = (a, b) => {
//   let c
//   a = a + 1
//   c = a + b
//   return c
// }

// myFunction(5, 3)

// Стрелочная ф-ци в вызове другой ф-ции
// setTimeout(() => {
//   console.log('Отложенное сообщение')
// }, 1000)

// Сокращения в стрелочных ф-циях
// если только один параметр, то круглые скобки можно опустить
// a => {
  // тело функции
// }

// Фигурные скобки можно опустить если тело функции состоит из одного выражения
// в этом случае стрелочная ф-ция нефвно возвращает результат выражения (т.е. без слова return)
// (a, b) => a + b

// ---------------------------------
// ЗНАЧЕНИЯ ПАРАМЕТРОВ ФУНКЦИИ ПО УМОЛЧАНИЮ
// Пример 1
// function multByFactory(value, multiplier = 1) {
//   return value * multiplier
// }

// multByFactory(10, 2)
// multByFactory(5)

// Пример 2
// мы хотим неявно (не используя return) вернуть объект по этому оборачиваем его в скобки
// если надо явно вернуть объект то запись была бы {  return { ...post, addedAt} }
// const newPost = (post, addedAt = Date()) => ({
//   ...post,
//   addedAt
// })

// const firstPost = {
//   id: 1,
//   author: 'Dimon',
// }

// newPost(firstPost)

// ------------------------------------------------
// ОБРАБОТКА ОШИБОК
// Что происходит в случае ошибок
// throw new Error - Инструкция throw позволяет генерировать исключения, определяемые пользователем
// const fnWithError = () => {
//   throw new Error('Some error')
// }

// fnWithError()

// console.log('Continue...')

// Решение проблемы с ошибкой
// TRY/CATCH
// try {
  // Выполнение блока кода
// } catch (error) {
  // Этот блок кода выполняется в случае возникновения ошибок в блоке try
// }

// Пример с try/catch
// если мы ошибку поймали, то выполнение блока продолжится и выполнится 'Continue'
// console.error(error) - выведет в консоль красным цветом саму ошибку
// const fnWithError = () => {
//   throw new Error('Some error')
// }

// try {
//   fnWithError()
// } catch (error) {
//   console.error(error)
//   console.log(error.message)
// }

// console.log('Continue...')

// ИНСТРУКЦИИ
// Выражение всегда возвращает значение
// Инструкция выполняет определенное действие (let b например) и инструкции оканчиваются на ; (можно опускать)

// МАСИВЫ
// Формат записи массивов
// const myArray = [1, 2, 3]
// console.log(myArray)

// const myArray2 = new Array(1, 2, 3)
// console.log(myArray2)

// Методы массива(функции высшего порядка, либо ф-ции/методы прототипов):
// push - добавляет элемент в конец массива, например myArray.push(4)
// pop - удаляет элемент в конце массива, например: myArray.pop()
// shift - удаляет первый элемент в массиве, например: myArray.shift()
// unshift - добавляет элемент в начало массива, например myArray.unshift(true)
// forEach перебирает все элементы массива
// const myArray = [1, 2, 3, 10]
// console.log(myArray)

// const res = myArray.forEach(el => console.log(el * 2)) // опускаем скобки т.к. параметр один (el)

// console.log(res) // undefined
// console.log(myArray)
// map - перебирает и мутирует массив, возвращает новый массив
// const myArray = [1, 2, 3]
// console.log(myArray)

// const newArray = myArray.map(el => el * 3)
// в таком виде вернет [undefined, undefined, undefined] - так происходит потому что нет ключевого слова return el * 3
// const newArray = myArray.map((el) => {
//   el * 3
// })
// console.log(newArray) // [3, 6, 9]
// console.log(myArray) // [1, 2, 3]

// -------------------------------------------------
// ДУСТРУКТУРИЗАЦИЯ
// const userProfile = {
//   name: 'Dimon',
//   commentsQty: 23,
//   hasSignedAgreement: false,
// }
// Объявление новых переменных и присваивание значений на основе значений свойств объекта
// const { name, commentsQty } = userProfile
// const { hasSignedAgreement } = userProfile

// console.log(name)
// console.log(commentsQty)

// Деструктуризация массивов
// const fruits = ['Apple', 'Banana']
// Объявление новых переменных и присваивание значений на основе элементов масива
// const [fruitOne, fruitTwo] = fruits

// console.log(fruitOne)
// console.log(fruitTwo)

// Деструктуризация в функциях
// const userProfile = {
//   name: 'Dimon',
//   commentsQty: 23,
//   hasSignedAgreement: false,
// }

// const userInfo = ({ name, commentsQty }) => {
//   if (!commentsQty) {
//     return `User ${name} has no comments`
//   }

//   return `User ${name} has ${commentsQty} comments`
// }

// userInfo(userProfile) // User DDimon has 23 comments

// ------------------------------------------------------------------------------------------------
// УСЛОВНЫЕ ИНСТРУКЦИИ
// if
// if ... else, if ... else if ... else
// switch
// тернарный оператор - используется в выражениях, а выражения возвращают результат

// Использование IF в функциях
// const sumPositiveNumbers = (a, b) => {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     return 'One of the arguments is not a number'
//   }

//   if (a <= 0 || b <= 0) {
//     return 'Numbers are not positive'
//   }

//   return a + b
// }

// Инструкция SWITCH
// switch (Выражение) {
//   case A:
    // Действия если выражение === А
  //   break
  // case B:
    // Действия если выражение === B
  //   break
  // default:
    // Действия по умолчанию
// }

// const month = 2

// switch (month) {
//   case 12:
//     console.log('Декабрь')
//     break
//   case 1:
//     console.log('Январь')
//     break
//   case 2:
//     console.log('Февраль')
//     break
//   default:
//     console.log('Это не зимний месяц')
// }

// Тернарный оператор
// У тернарного оператора три операнда. Конструкция с тернарным оператором - это выражение. А выражение всегда возвращает значение
// Условие ? Выражение 1 : Выражение 2
// Рекомендуется писать на трех разных строках:
// Условие
//  ? Выражение 1
//  : Выражение 2

// Привер 1:
// const value = 11

// value
//   ? console.log('Условие истинно ')
//   : console.log('Условие ложно')

// Пример 2:
// const value1 = 11
// const value2 = 25

// value1 && value2
//   ? myFunction1(value1, value2)
//   : myFunction2()

// Пример 3:
// let value = 11
// console.log(value >= 0 ? value : -value)

// value = -5
// const res = value >= 0 ? value : -value
// console.log(res)

// ------------------------------------------------------------------------------------------------
// ЦИКЛЫ
// Типы циклов:
// Цикл for:
// for (Начальная инструкция; Условие; Итерационное действие) {
  // Блок кода, выполняемый на каждой итерации
// }
// Пример:
// for (let i = 0; i < 5; i++) {
//   console.log(i)
// }

// Цикл while (может не выполниться ни разу если условие ложное):
// while (Условие) {
  // Блок кода, выполняемый на каждой итеорации
// }
// Пример:
// let i = 0

// while (i < 5) {
//   console.log(i)
//   i++
// }
// Бесконечный цикл:
// let i = 0

// while (i < 5) {
//   console.log(i)
// }


// Цикл do ... while (в отличии от while хотя бы один раз но выполнится,
// и если надо выполнить хотя бы раз то можно использовать этот цикл):
// do {
  // Блок кода, выполняется на каждой итерации
// } while (Условие)
// Пример 1:
// let i = 0

// do {
//   console.log(i)
//   i++
// } while (i < 5)

// Пример 2:
// let i = 10

// do {
//   console.log(i)
//   i++
// } while (i < 5)

// Цикл for ... in ...:
// for (key in Object)
  // Действия с каждым свойством объекта
  // Значения свойства - Object[key]
// }

// Пример 1:
// const myObject = {
//   x: 10,
//   y: true,
//   z: 'abc'
// }

// for (const key in myObject) {
//   console.log(key, myObject[key])
// }

// Пример 2:
// const myObject = {
//   x: 10,
//   y: true,
//   z: 'abc'
// }

// Object.keys(myObject).forEach(key => {
//   console.log(key, myObject[key])
// })

// Цикл for in для массивов:
// const myArray = [true, 10, 'abc', null]

// for (const key in myArray) {
//   console.log(myArray[key])
// }

// Цикл for ... of ...
// Iterable - значение или переменная к-я содержит значение по к-му можно итерироваться
// for (Element of Iterable) {
  // Действия с определенным элементом
// }

// Пример 1:
// const myString = 'Hey'

// for (const letter of myString) {
//   console.log(letter)
// }

// Пример 2 (for of для массивов) но в массивах это не рекомендуется все равно использовать:
// const myArray = [true, 10, 'abc', null]

// for (const element of myArray) {
//   console.log(element)
// }

// for of НЕ для объектов
// let myObject = {
//   x: 10,
//   y: true,
//   z: 'abc'
// }

// for (const prop of myObject) {
//   console.log(prop)
// }
// Вернет ошибку TypeError: myObject is not iterable

// ------------------------------------------------------------------------------
// МОДУЛИ
// модули позволяют структурировать код
// модули позволяют избегать дублирование блоков кода

// export/import синтаксис:

// moduleOne.js
// export ...

// moduleTwo.js
// import ...

// Экспорт по умолчанию:
// moduleOne.js                    moduleTwo.js
// const myName = () => {             import printMyName from '.moduleOne.js'
//   console.log('Dimon')
// }                                  printMyName() // Dimon

// export default myName
// если экспортируем по дефолту, то в файле импорта мы можем использовать экспорируемую ф-цию но под другим именем

// Несколько экспортов:
// Здесь имена переменных должны совпадать
// moduleOne.js

// const one = 1
// const two = 'two'

// export {
//   one,
//   two
// }

// moduleTwo.js

// import {
//   one,
//   two
// } from './moduleOne.js'

// console.log(one)
// console.log(two)

// Переименование импорта:
// moduleOne.js

// const one = 1
// const two = 'two'

// export { one, two }

// moduleTwo.js
// import {
//   one as oneRenamed,
//   two
// } from './moduleOne.js'

// console.log(oneRenamed)
// console.log(two)

// ----------------------------------------------------------------
// КЛАССЫ И ПРОТОТИПЫ
// КЛАСС
// Переменая this указывает на экземпляр класса
// class Comment {
//   constructor(text) {
//     this.text = text
//     this.votesQty = 0
//   }

//   upvote() {
//     this.votesQty += 1
//   }
// }

// Создание экземпляра
// const firstComment = new Comment('First comment')
// console.log(firstComment)

// Проверка принадлежности
// firstComment instanceof Comment
// firstComment instanceof Object

// Вызов метода
// firstComment.upvote()
// console.log(firstComment.votesQty)
// firstComment.upvote()
// console.log(firstComment.votesQty)

// Проверка принадлежности свойств экземпляру объекта
// firstComment.hasOwnProperty('text')
// firstComment.hasOwnProperty('votesQty')
// firstComment.hasOwnProperty('upvote')
// firstComment.hasOwnProperty('hasOwnProperty')

// Создание нескольких экземпляров
// const secondComment = new Comment('Second comment')
// const thirdComment = new Comment('Third comment')

// СТАТИЧЕСКИЕ МЕТОДЫ
// class Comment {
//   constructor(text) {
//     this.text = text
//     this.votesQty = 0
//   }

//   upvote() {
//     this.votesQty += 1
//   }

//   static mergeComments(first, second) {
//     return `${first} ${second}`
//   }
// }

// Comment.mergeComments('First comment.', 'Second comment.')

// Расширение других классов
// extends - расширяет другой класс
// class NumbersArray extends Array {
//   sum() {
//     return this.reduce((el, acc) => acc += el, 0)
//   }
// }
// сначала вызывается конструктор родительского класса Array, он возвращает новый объект
// и this здесь будет ссылаться на новый созданный экземпляр массива
// const myArray = new NumbersArray(2, 5, 7)

// console.log(myArray)
// console.log(myArray.sum())
// В данном примере получилась такая цепочка прототипов myArray -> NumbersArray -> Array -> Object

// -------------------------------------------
// ПРОМИСЫ
// Промисы позволяют обрабатывать отложенные во времени события
// или промис - это обещание предоставить обещание позже
// проми может вернуть ошибку если результат предоставить невозможно
// Состостяние промиса
// - ожидание
// - исполнен
// - отклонен
// Создание промиса:
// const myPromise = new Promise((resolve, reject) => {
//   - выполнение асинхронных действий

//   - внутри этой функции нужно в результате вызвать одну из функций resolve или reject
// });

// Получение результата промиса
// myPromise
//   .then(value => {
    // Действия в случае успешного исполнения Промиса
    // Значение value - это значение, переданное в вызове
    // функции resolve внутри Промиса
  // })
  // .catch(error => {
    // Действия в случае отклонения Промиса
    // Значение error - это значени, переданное в вызове
    // функции reject внутри Промиса
  // })

  // Получение данных с помощью fetch API
  // fetch('https://jsonplaceholder.typicode.com/todos')
  //   .then(response => response.json())
  //   .then(json => console.log(json))
  //   .catch(error => console.error(error))
