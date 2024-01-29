let btn_adicionar_usuario = document.getElementsByClassName('btn_add');
let modal_cadastro_de_usuario = document.querySelector('.formulariobg');
let btn_fechar_modal = document.querySelector('.btn_fechar_formulario');


function createusuario() {
    modal_cadastro_de_usuario.style.display = "flex";
    console.log("botão adicionar usuario - foi clicado");
}

function fechar_modal() {
    modal_cadastro_de_usuario.style.display = "none";
    console.log("botão fechar modal - foi clicado");
}