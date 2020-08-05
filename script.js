/* funções cadastrais*/
function carregar(){
var usuario = "";
var senhaUSR ="";
var txtlogin = document.getElementsByTagName('span');
var titulo = document.getElementsByTagName('h1');
var container = document.getElementById("container");
}
//alert(txtlogin[0].innerText)
function inicio(){
    container.innerHTML=`<span onclick="entrar()">Entrar</span> <br><span onclick="cadastro()">Entrar</span>` 
}
function login(){
  
    var login = document.getElementById("nomeLogin");
    let senha = document.getElementById("senhaLogin");
    let erro = document.getElementById("erroStatus");
    
 
    erro.innerText="Usuário não cadastrado";
   
}
function cadastro(){
    txtlogin[0].innerText="Usuário";
    titulo[0].innerText="CADASTRO";
    titulo = document.getElementsByTagName('h1'); 
 
}
function entrar(){
container.innerHTML = `<br><br><br><br><br><br><h1>ENTRADA</h1><span>Login:</span> <input type="text" name="login" id="nomeLogin"><br><br><span>Senha: </span><input type="text" name="login" id="senhaLogin"><br><br><input type="submit" value="Entrar" onclick="login()"><br><P id="erroStatus"></P><span onclick="cadastro()">CADASTRAR</span>`
}
