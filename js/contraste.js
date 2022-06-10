var link_css = "/style.css";
				
if(getCookie2() == "contraste"){
    link_css = "/contraste.css";
}else if(getCookie() == "default"){
    link_css = "/style.css";
}

$(document).ready(function(){
    
    $("#contraste").click(function(){
        setCookie("contraste");
        location.reload();				
    });
    
    $("#semcontraste").click(function(){
        setCookie("default")
        location.reload();									
    });
    
});

$("head").append("<link rel=stylesheet href="+ " "+ link_css +" " +"type=text/css>");//altera a folha de estilo da página

function setCookie(value){
    var data = new Date(); //new Date()
    data.setTime(data.getTime() + 600000);//O método setTime ()
    
    document.cookie = "contraste="+value+"; expires="+data.toUTCString()+"; path=/"; //path - caminho do cookie. path=/ - cookie disponível em todo o domínio.
    
    
}
function getCookie(){
    var cookie = document.cookie.split("=");
    
    return cookie[1];
}

function getCookie2(){
var nameEQ = "contraste=";
var ca = document.cookie.split(';');//armazena na variável ca um vetor ou matriz contendo a string do cookie, ignorando o ponto-e-virgula. A saída (eu acho) seria mais ou menos isso: ca = ["contraste=contraste", expires="valor que corresponda à data e tempo que o cookie expira", path=/]
for (var i = 0; i < ca.length; i++) {
var c = ca[i]; //cria um loop na matriz ca (i = 0; i <ca.length; i ++) e lê cada valor c = ca [i]).
while (c.charAt(0) == ' ') c = c.substring(1, c.length);
if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
}
return undefined;

}