// МУТАЦИЯ В JAVASCRIPT
const a = 10
let b = a
b = 30

console.log(a)
console.log(b)

const person = {
  name: 'Bob',
  age: 21
}

person.age = 22
person.isAdult = true

console.log(person.age)
console.log(person.isAdult)

// МУТИРОВАНИЕ КОПИЙ
// const person = {
//   name: 'Bob',
//   age: 21
// }

// const person2 = person

// person2.age = 26
// person2.isAdult = true

// console.log(person.age)
// console.log(person.isAdult)
// console.log(person)

// КАК ИЗБЕЖАТЬ МУТАЦИЙ. ВАРИНТ 1
// const person = {
//   name: 'Bob',
//   age: 25
// }

// Object с методом assign запишет в новый {} объект значение первоначального объекта person
// const person2 = Object.assign({}, person)
// person2.age = 26

// console.log(person2.age)
// console.log(person.age)

// Если у объекта есть вложенные объекты, то ссылки на них сохраняются. Т.е. таким образом мы можем избежать мутирование
// только корневых свойст объекта

// КАК ИЗБЕЖАТЬ МУТАЦИЙ. ВАРИНТ 2
// const person = {
//   name: 'Bob',
//   age: 25
// }

// const person2 = { ...person } // ... оператор разделения объекта на свойства. Мы разделили оригинальный объект на св-ва
// и собрали эти св-ва в новом объекте
// person2.name = 'Alice'

// console.log(person2.name)
// console.log(person.name)
// Здесь так же если у объекта есть вложенные объекты, то ссылки на них сохраняются. Т.е. таким образом мы можем избежать мутирование
// только корневых свойст объекта

// -------------------------------
// КАК ИЗБЕЖАТЬ МУТАЦИЙ. ВАРИНТ 3
// const person = {
//   name: 'Bob',
//   age: 25,
//   country: {
//     city: 'New York'
//   }
// }
// Здесь если у объекта есть вложенные объекты, то ссылки на них НЕ сохраняются.
// Таким образом мы можем избежать мутирование всех свойств объекта
// const person2 = JSON.parse(JSON.stringify(person))

// person2.name = 'Alice'
// person2.country.city = 'Moscow'

// console.log(person2.name)
// console.log(person.name)
// console.log(person2)