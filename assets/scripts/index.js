const botaoGerar = document.querySelector(".botao-gerar");

const v1 = 'Rayssa'
const v2 = 'Faustino'
const v3 = '@email'

botaoGerar.addEventListener("click", function(){
    gerarPessoa(v1, v2, v3)
});

function gerarPessoa(a, b, c) {
    
    const nome = document.querySelector(".nome")
    const sobrenome = document.querySelector(".sobrenome")
    const email = document.querySelector(".email")

    nome.innerHTML = 'Nome: ' + a
    sobrenome.innerHTML = 'Sobrenome: ' + b
    email.innerHTML = 'Email: ' + c
   
}
