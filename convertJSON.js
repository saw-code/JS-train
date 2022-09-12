// JSON - JAVASCRIPT OBJECT NOTATION - формат обмена нанными между компютерами в интернете
// {
//   "userId": 1,
//   "id": 1,
//   "title": "Test title",
//   "status": {
//     "completed": false
//   }
// }


// КОНВЕРТАЦИЯ JS-ОБЪЕКТ в JSON
// JSON.stringify()

const post = {
  title: 'My post',
  likesQty: 5
}

console.log(JSON.stringify(post))

// КОНВЕРТАЦИЯ JSON в JS-ОБЪЕКТ
// JSON.parse()

const postStringified = JSON.stringify(post)
console.log(JSON.parse(postStringified))