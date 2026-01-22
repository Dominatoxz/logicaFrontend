//Crie um site que receba o nome de usuario e 
// mostre "Olá, [nomedousuario]! Bem-vindo ao meu site."
let nomeUsuario;
nomeUsuario = prompt("Qual seu nome? ");

if (nomeUsuario && nomeUsuario.trim() !== ""){ //trim: retira espaço no inicio e no final
    document.writeln(`Olá, ${nomeUsuario}! Seja bem-vindo ao meu site.`);
} else {
    document.writeln(`Olá, visitante! Seja bem-vindo ao meu site.`);
}



/*if condicao{

} else {

}''*/