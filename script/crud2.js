
let btn_add_usuario = document.getElementById('btn_novo_usuario');



function adicionar_cliente () {
    event.preventDefault();

let input_id = document.getElementById('usuario_id');
let input_nome = document.getElementById('usuario_nome');
let input_usuario = document.getElementById('usuario_login');
let input_painel = document.getElementById('usuario_painel');
let input_servidor = document.getElementById('usuario_servidor');
let input_aplicativo = document.getElementById('usuario_aplicativo');
let input_telefone = document.getElementById('usuario_telefone');
let input_vencimento = document.getElementById('usuario_vencimento');


var user = {
    Id:input_id.value,
    nome:input_nome.value, 
    usuario:input_usuario.value,
    painel:"",
    servidor:"Zeus",
    aplicativo:"Conectbox",
    telefone:input_telefone.value,
    expiracao:input_vencimento.value};
 
    console.log(user)
}