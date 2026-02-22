//let username;
//username = window.prompt("Qual seu nome de usuario?");

//console.log(username);

let username;

document.getElementById("butt01").onclick = function(){
    username = document.getElementById("01").value;
    
    document.getElementById("titulo").textContent = `Bem vindo ${username}`;
}