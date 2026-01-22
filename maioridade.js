/*Crie um site que pergunte a idade do usuario
e informe se ele é maior ou menor de idade (18 anos) */

let idade = Number(prompt("Qual a sua idade? "))

if (idade >= 18){
    document.writeln("Você é maior de idade.")
} else {
    document.writeln("Você é menor de idade.")
}

/*let idadeTexto = prompt("Qual sua idade? ")

if (!idadeTexto || idadeTexto.trim() === ""){
    alert("Erro: Por favor, digite sua idade.");
} else {
    idadeTexto = idadeTexto.trim();

    if(!/^\d+$/.test(idadeTexto)){
        alert("Digite apenas números. Ex: 12");
    } else {
        let idade = parseInt(idadeTexto);
    
        if (idade < 0 || idade > 120){
            alert("Idade inválida.");
        } else {
            
            if (idade >= 18){
                alert("Você é maior de idade.");
            } else {
                alert("Você é menor de idade.");
            }

        
        }
    }
}*/