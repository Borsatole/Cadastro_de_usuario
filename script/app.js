// Menu Mobile Toggle: Abrir / Fechar

let btn_menu_abrir = document.querySelector('.open');
let btn_menu_fechar = document.querySelector('.close');
let lista_menu = document.querySelector('.menu_mobile_lista');


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




