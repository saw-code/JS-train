// ВЛОЖЕННЫЕ ОБЪЕКТЫ
const myCity = {
  city: 'New York',
  info: {
    isPopular:true,
    country: 'USA'
  }
}

console.log(myCity.info.isPopular)

delete myCity.info['isPopular']
console.log(myCity)