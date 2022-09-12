// VARIABLES

const myName = "Dimon"

// будет ошибка т.к. const не разрешает изменять присвоенное значение
myName = ''

console.log(myName)

const objectA = {
  a: 10,
  b: true
}

const copyOfA = objectA

copyOfA.a = 20
copyOfA.c = 'abc'

console.log(objectA)
