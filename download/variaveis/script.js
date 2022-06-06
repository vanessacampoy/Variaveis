var nome = "Lara"
var idade = 12
var estudante = true
console.log(nome, idade, estudante)

var preco = 29
var totalComprado = 45
var totalPreco = preco * totalComprado
console.log(totalPreco)


//variavel sem valor atribuído
var precoAplicativo
console.log(precoAplicativo)//undefined

//outra forma de declarar variáveis
var cor = "azul",
    comida = "lasanha",
    sobremesa = "cheesecake",
    maquiagem = "rimel",
    roupa = "calça"
    console.log(cor, comida, sobremesa, roupa, maquiagem)

//verificar Tipo de dado
var escola = 'Pereira Barreto'
console.log(typeof escola)

var quantidadeAlunos = 32
console.log(typeof quantidadeAlunos)

var conclusaoCurso = true
console.log(typeof conclusaoCurso)

var simbolo = Symbol()
console.log(simbolo)

//String
var compra = "pães"
var frase = "Eu comprei 10 " + compra
console.log(typeof frase, frase)


//sem as aspas os números são lidos como number
var ano = 2022
var mes = 6
console.log(typeof ano + mes, ano + mes)

//com as aspas os números são lidos como number
var ano = "2022"
var mes = "6"
console.log(typeof ano + mes, ano + mes)

//Template string - usar a crase ao invés de aspas
var animal = "gato" 
var corAnimal = "branco e marrom"
var frase1 = `Eu tenho um ${animal} ${corAnimal}`
console.log(frase1)

//Exercício
var meuNome = "Vanessa"
var meuSobrenome = "Campoy"
console.log(`Meu nome é ${meuNome} ${meuSobrenome}`)
console.log(typeof meuNome, typeof meuSobrenome)

var hora = "It's time"
console.log(hora)


