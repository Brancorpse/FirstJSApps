// Meu primeiro código em javascript
console.log('Hello World');
// todo código htm deve ser separado em conteúdo e todo scritpt em comportamento
let firstName = 'Branco'; // string
let lastName = 'Lima';

// Alguns nomes não pode ser usados como variavel, como if, por exemplo.
// Sempre use nomes com significado como variáveis
// Nunca comece variáveis com número nem com hifem ou espaço entre dois novmes
//use modelo primeronomeSegundo nome para criar variáveis
// Javascript é case sensitive

let age = 30; // number
let isApproved = true; //variável boolean
let alias = undefined; //variável idefinida
let selectColor = null; //variável objeto

console.log(firstName, lastName, age, isApproved, alias, selectColor);

// variáveis dinâmicas podem sempre mudar o valor, como null e undefined

//Variáveis de referência podem ser:
// objeto, arrays, funções

//você coloca os atributos de uma classe dentro da variável. É o que chamaos de instanciamento de objeto

let person = {
    name: 'Marcelo',
    idade: 29
};

// Dot notation
person.name = "John";

console.log(person);

// Bracket notatiom

let selection = 'name';
person[selection] = 'Mary';

console.log(person.name);

// criando arrays
// arrays são considerados objetos em javascript

let selectedColors = ['red', 'blue', 'yellow'];
console.log(selectedColors);

console.log(selectedColors.length);

// criando funções

function greet(name, last) {
    console.log('Hello World, ' + name);    
}

function square(number) {

    return number * number;
}


greet("Branco", "de Lima");
greet("Mary", "Blue");
greet("Fabiana", "Gracio");

square(2);
console.log(square(2));



