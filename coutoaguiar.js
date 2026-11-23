const prompt = require ('prompt-sync')();


const produtos = [
{ nome: "Camisa", preco: 25.50 },
{ nome: "Calça", preco: 40.00 },
{ nome: "Sapato", preco: 60.00 },
];


const nomeBuscado = prompt ("digite o nome do produto: ");
const produtoEncontrado = produtos.find(
    produto => produto.nome.toLowerCase() === nomeBuscado.toLowerCase()
);
if (produtoEncontrado) {
    console.log(`O preço é: R$ ${produtoEncontrado.preco.toFixed(2)}`);


} else {
    console.log("Produto não encontrado.");
}


console.log ("--- LISTA ORDENADA ---");
 produtos.sort((a, b) => a.preco - b.preco);


 produtos.forEach(produto => {
    console.log(`${produto.nome} - R$ ${produto.preco.toFixed(2)}`);
   
 })
