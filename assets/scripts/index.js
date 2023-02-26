const botaoGerar = document.querySelector(".botao-gerar");


const nome = document.querySelector(".nome");
const sobrenome = document.querySelector(".sobrenome");
const email = document.querySelector(".email");


botaoGerar.addEventListener("click", async function(){
    const todosOsDados = await obterDados();
    const v1 = todosOsDados.first_name;
    const v2 = todosOsDados.last_name;
    const v3 = todosOsDados.email;
    
    limparCampos();

    gerarPessoa(v1, v2, v3);

});


async function obterDados(){

    const baseURI = 'https://random-data-api.com/api/v2/';
    const tipo = 'users';
    const size = 1;

    const dados = await axios.get(baseURI + tipo + '?size=' + size);

    return dados.data;
                   
};


function gerarPessoa(a, b, c) {
    nome.innerHTML = 'Nome: ' + a;
    sobrenome.innerHTML = 'Sobrenome: ' + b;
    email.innerHTML = 'Email: ' + c;
   
};

function limparCampos(){
    nome.innerHTML = '';
    sobrenome.innerHTML = '';
    email.innerHTML = '';
}