// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))
//   .catch(error => console.error(error))

const getData = (url) =>
  new Promise((resolve, reject) =>
    fetch(url)
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => reject(error))
  )

getData('https://jsonplaceholder.typicode.com/todos/1')
  .then(data => console.log(data))
  .catch(error => console.log(error.message))