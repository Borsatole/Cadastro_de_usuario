
// Botão: Cadastros > Adicionar usuario
let btn_adicionar_usuario = document.getElementsByClassName('btn_add');

// Formulario: Cadastros > Adicionar usuario
let modal_cadastro_de_usuario = document.querySelector('.formulariobg');

// Formulario: Cadastros > X Fechar
let btn_fechar_modal = document.querySelector('.btn_fechar_formulario');

    function createusuario() {
    modal_cadastro_de_usuario.style.display = "flex";
    console.log("botão adicionar usuario - foi clicado");

    // Abaixo eu coloquei a função para fechar o menu! havia um bug quando ele eo formulario tavam aberto
    menu_toggle_fechar ();
}

function fechar_modal() {
    modal_cadastro_de_usuario.style.display = "none";
    console.log("botão fechar modal - foi clicado");
}

function adicionar_usuario() {
    
    let id = "1"
    let nome_usuario = "Francisco"
    let login = 1232321
    let painel = "X-painel"
    let servidor = "Five"
    let aplicativo = "Conectbox"
    let status = "Ativo"
    let expiracao = "28/12/2023"

// ****SELECIONA A TABELA****
let listagem_usuarios = document.getElementById('tabela_usuarios');

// ****CRIA A LINHA****
const linha = document.createElement("tr");


// PREEENCHE OS VALORES 

// Pega o campo Id e troca o valor
const coluna_id = document.createElement("td");
coluna_id.innerText = id;
coluna_id.className = 'id';
linha.appendChild(coluna_id);

// Pega o campo nome e troca o valor
const coluna_nome = document.createElement("td");
coluna_nome.innerText = nome_usuario;
linha.appendChild(coluna_nome);

const coluna_usuario = document.createElement("td");
coluna_usuario.innerText = login;
linha.appendChild(coluna_usuario);

const coluna_painel = document.createElement("td");
coluna_painel.innerText = painel;
linha.appendChild(coluna_painel);

const coluna_servidor = document.createElement("td");
coluna_servidor.innerText = servidor;
linha.appendChild(coluna_servidor);

const coluna_aplicativo = document.createElement("td");
coluna_aplicativo.innerText = aplicativo;
linha.appendChild(coluna_aplicativo);

const coluna_status = document.createElement("td");
coluna_status.innerText = status;
linha.appendChild(coluna_status);

const coluna_expiracao = document.createElement("td");
coluna_expiracao.innerText = expiracao;
linha.appendChild(coluna_expiracao);


// ****SEÇÃO DE AÇÕES****

const coluna_butns = document.createElement("td");
coluna_butns.className = "acoes";

// -Icone de renovação
const iconeRenovacao = document.createElement("i");
iconeRenovacao.className = "bx bx-revision";
coluna_butns.appendChild(iconeRenovacao);

// -Icone de Editar
const iconeEditar = document.createElement("i");
iconeEditar.className = "bx bx-slider-alt";
coluna_butns.appendChild(iconeEditar);

// -Icone de deletar
const iconeDeletar = document.createElement("i");
iconeDeletar.className = "bx bx-trash";
iconeDeletar.onclick = function() {
    excluir_usuario(linha);
};
coluna_butns.appendChild(iconeDeletar);

linha.appendChild(coluna_butns);

// Inserindo isso tudo dentro de uma linha tr
listagem_usuarios.appendChild(linha);
}

function excluir_usuario(linha) {
        linha.remove();
}