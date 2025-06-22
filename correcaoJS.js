/*01- Crie um array chamado "prices" com os valores: 4.50, 3.00, 7.25. Exiba no console o preço total da soma desses items; OBS: utilize uma estrutura
de fluxo de controle para efetuar esta soma*/

/*ERRADO feito abaixo
let prices [] = [4.5,3,7.25]
let x = 0
let soma =  0
while (x<2)
{
    soma +=prices[x]
    x++
}
console.log(soma)

////////////////////////Errei pois abri [] para criar um array, confundi com o C#, outro erro foi ter colocado 2 como limitador do loop ao invés do prices.length
*/

//Correção pós prova abaixo:
let prices = [4.5,3,7.25]
let soma = 0
for(let i=0; i<prices.length; i++){
    soma += prices[i]
}
console.log(soma)

/*02- Crie uma let "phrases" e atribua a ela um array com as strings:["Eu gosto", "de programar", "em JavaScript"]
OBS: Use um método para unir os itens e exibir "Eu gosto de programar em JavaScript";*/


/*O que eu fiz na prova

let phrases [] = ["Eu gosto", "de programar", "em JavaScript"]
console.log(`${phrases[0]} ${phrases[1]} ${phrases[2]}`)

////////////////////Era muito mais simples apenas usar o método join como foi feito na correção abaixo:
*/

//Correção pós prova abaixo:
let phrases = ["Eu gosto", "de programar", "em JavaScript"]
console.log(phrases.join(' '))

/*03- Crie uma const chamada "internationalCities" com os itens: 'Lisboa','Tóquio', 'Toronto';
Em seguida, declare uma let "bigCaseCities" e atribua a ela um array vazio; Use um for loop para popular "bigCaseCities" com as  cidades em letras maiúsculas;- 
exiba o array resultante no console.*/

/*O que eu fiz na prova

const internationalCities[] = ['Lisboa','Tóquio', 'Toronto']
let bigCaseCities []
let i=0
for(i=0;i<2;i++)
{
    bigCaseCities.push(internationalCities[i].ToUpper)
}
console.log(bigCaseCities)

//////////////////////Novamente abri [] sem motivo, não usei a propriedade .length, e errei o método .toUpperCase()
*/

//Correção pós prova abaixo:
const internationalCities = ['Lisboa','Tóquio','Toronto']
let bigCaseCities = []
for(let i=0; i<internationalCities.length; i++){
    bigCaseCities.push(internationalCities[i].toUpperCase())
}
console.log(bigCaseCities)

/*04- Crie uma const "ticketSales" com os seguintes valores em string: '120','85','100','67';
Use um for loop para somar esses valores após convertê-los para número;
Armazene a soma em uma let "totalTickets"; */
//essa eu nem tentei

//Correção pós prova abaixo:
const ticketSales = ['120','85','100','67']
let ticketSalesInt = ticketSales.map(Number)
let totalTickets = 0
for (let i=0;i<ticketSales.length;i++){
    totalTickets += ticketSalesInt[i]
}

console.log(totalTickets)