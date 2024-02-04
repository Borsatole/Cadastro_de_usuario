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





