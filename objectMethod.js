// МЕТОДЫ ОБЪЕКТА
// Метод - св-во объекта, значение которого - функция
const myCity = {
  city: 'New York',
  cityGreeting: function() {
    console.log('Greetings!!')
  }
}

myCity.cityGreeting()

// в случае если значение того или иного свойства - это функция, можно убирать ключевое слово function
// const myCity = {
//   city: 'New York',
//   cityGreeting() {
//     console.log('Greetings!!')
//   }
// }

// myCity.cityGreeting()

// МЕТОД VS СВОЙСТВА ОБЪЕКТОВ
// myCity.city // доступ к значению свойства
// myCity.cityGreeting() // вызов метода