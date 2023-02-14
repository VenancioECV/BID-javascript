//Problema 1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar) //predicted output: Tesla
console.log(otherRandomCar) //predicted output: Mercedes


//Problema 2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
/*console.log(name); /*predicted output: name is not defined,
ya que se utiliza para indicar el valor asignado a OtherName, no saliendo de su scope*/
console.log(otherName); //predicted output: Elon


//Problema 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password); //predicted output: 12345
console.log(hashedPassword); //predicted output: undefined


//Problema 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second); //predicted output: false
console.log(first == third); //predicted output: true


//Problelma 5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);  //predicted output: value
console.log(secondKey); //predicted output: [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); //predicted output: 1
console.log(willThisWork); //predicted output: 5








