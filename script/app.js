// Menu Mobile Toggle: Abrir / Fechar

let btn_menu_abrir = document.querySelector('.open');
let btn_menu_fechar = document.querySelector('.close');
let lista_menu = document.querySelector('.menu_mobile_lista');

// Codigo Adicionar Usuario

// Pega a Tabela
let listagem_usuarios = document.getElementById('tabela_usuarios');
// Cria o elemento tr
const linha = document.createElement("tr");

const coluna_id = document.createElement("td");
const coluna_nome = document.createElement("td");
const coluna_usuario = document.createElement("td");
const coluna_painel = document.createElement("td");
const coluna_servidor = document.createElement("td");

// Pega o campo Id e troca o valor
coluna_id.innerText = "2";

linha.appendChild(coluna_id);

// Pega o campo nome e troca o valor
coluna_nome.innerText = "Wilson";
linha.appendChild(coluna_nome);

coluna_usuario.innerText = "192021";
linha.appendChild(coluna_usuario);

coluna_painel.innerText = "X-painel";
linha.appendChild(coluna_painel);

coluna_servidor.innerText = "Five";
linha.appendChild(coluna_servidor);





// Inserindo isso tudo dentro de uma linha tr
listagem_usuarios.appendChild(linha);



function menu_toggle_abrir () {
    btn_menu_abrir.style.display = "none";
    btn_menu_fechar.style.display = "flex";
    lista_menu.style.display = "flex";

}

function menu_toggle_fechar () {
    btn_menu_abrir.style.display = "flex";
    btn_menu_fechar.style.display = "none";
    lista_menu.style.display = "none";
}

// Fim das funções do menu mobile

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




