function primeirafuncao(){
    alert("Primeira atividade de Javascript!")
}
function validar(){
    //declarar variavel
    let nome = cadastro.nome.value
    let cpf = cadastro.cpf.value
    let email = cadastro.email.value
    let confirma = cadastro.confirma.value

    if (nome==""){
        alert("Campo nome é obrigatório!")
        cadastro.nome.focus()
        return false
    }
    if (cpf==""){
        alert("Campo CPF é obrigatório!")
        cadastro.cpf.focus()
        return false
    }
    if (email==""){
        alert("Campo E-mail é obrigatório!")
        cadastro.email.focus()
        return false
    }
    if (senha==""){
        alert("Campo senha é obrigatório!")
        cadastro.senha.focus()
        return false
    }
    if (confirma==""){
        alert("Campo senha é obrigatório!")
        cadastro.confirma.focus()
        return false
    }
    if (senha != confirma){
        alert("Senhas não conferem!")
        cadastro.confirma.focus()
        return false
    }
    if (isNaN(cpf)){
        alert("Campo CPF só aceita números!")
        cadastro.cpf.focus()
        return false
    }
    if (cpf.length != 11){
        alert("CPF inválido!")
        cadastro.cpf.focus()
        return false
    }
    let regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{6,10}$/

    if(!regex.exec(senha)){
        alert("A senha deve conter ao menos uma letra minuscula, uma letra maiuscula, números e caracteres especiais, minimo 6 e maximo 10 caracteres")
        cadastro.senha.focus()
        return false
    }
}