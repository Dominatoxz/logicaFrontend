document.getElementById('calcularBtn');
let idade = prompt('Digite sua idade: ');
let anoAtual = 2026;
let anoNascimento = anoAtual - idade;

alert(`Você nasceu em ${anoNascimento}`);

/*DOM: Document Object Model

Comandos DOM Principais
document.getElementbyId('id');  - pega o elemento pelo id 
document.querySelector('.class') - pega primeiro com  a classe
document.querySelectorAll('tag') - pega todos os elementos
element.innerHTML = 'texto' - mudança de conteúdo HTMl
element.onclick = function(){} - adiciona click*/