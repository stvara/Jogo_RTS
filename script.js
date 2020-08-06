/* funções cadastrais*/
function carregar(){
var txtlogin = document.getElementsByTagName('span');
var titulo = document.getElementsByTagName('h1');
var container = document.getElementById("container");
    container.innerHTML = `<h1>DORAGONA</h1>
    <span>Nome:</span> 
       <input type="text" name="login" id="nomeLogin">
    <br><br>
    <span>Cidade:</span>
      <input type="text" name="login" id="cidadeNome"><br><br>
      <input type="submit" value="Entrar" onclick="criarCidade()"><br>
        <P id="erroStatus"></P>`
}

function criarCidade(){
  
    var NomeUsr = document.getElementById("nomeLogin");
    var cidadeNome = document.getElementById("cidadeNome");
    let erro = document.getElementById("erroStatus");
    
 
    erro.innerText="A cidade está sendo criada...";
    cidade();
}

function cidade(){
    container.setAttribute("class","container2")
    container.innerHTML= ""
}