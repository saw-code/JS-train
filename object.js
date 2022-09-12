// OBJECT
const myCity = {
  city: 'New York',
  popular: true,
  country: 'USA'
}

console.log(myCity.city)
console.log(myCity.popular)

myCity.city = 'Las Vegas'
console.log(myCity.city)

myCity.phone = '55555555'
console.log(myCity)

delete myCity.country
console.log(myCity)

myCity['homeNumber'] = 15
console.log(myCity)

// внутри countryPropertyName будет лежать "country" и далее "country" будет ключом в объекте - country: 'USA'
const countryPropertyName = 'country'
myCity[countryPropertyName] = 'USA'
console.log(myCity)