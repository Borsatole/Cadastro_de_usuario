
let banco_de_dados = localStorage;
let btn_add_usuario = document.getElementById('btn_novo_usuario');



function adicionar_cliente () {
    // event.preventDefault();

let input_id = document.getElementById('usuario_id');
let input_nome = document.getElementById('usuario_nome');
let input_usuario = document.getElementById('usuario_login');
let input_painel = document.getElementById('select_painel');
let input_servidor = document.getElementById('select_server');
let input_aplicativo = document.getElementById('select_aplicativo');
let input_telefone = document.getElementById('usuario_telefone');
let input_vencimento = document.getElementById('usuario_vencimento');

    function todasVariaveisPreenchidas() {
        // Verifica se todas as variáveis não são vazias
        if (
          input_id.value.trim() !== '' &&
          input_nome.value.trim() !== '' &&
          input_usuario.value.trim() !== '' &&
          input_painel.value.trim() !== '' &&
          input_servidor.value.trim() !== '' &&
          input_aplicativo.value.trim() !== '' &&
          input_telefone.value.trim() !== '' &&
          input_vencimento.value.trim() !== ''
        ) {
          return true; // Todas as variáveis estão preenchidas
        } else {
          return false; // Pelo menos uma variável está vazia
        }
      }
      
      if (todasVariaveisPreenchidas()) {
        console.log('Todas as variáveis estão preenchidas.');
        const user = {
            Id:input_id.value,
            nome: input_nome.value, 
            usuario: input_usuario.value,
            painel: input_painel.value,
            servidor: input_servidor.value,
            aplicativo:input_aplicativo.value,
            telefone:input_telefone.value,
            expiracao:input_vencimento.value};
         
            

            // Aqui vamos armazenar no banco de dados
            let localUsers =  banco_de_dados.getItem("Usuarios","");

            if (!localUsers) {
              banco_de_dados.setItem("Usuarios", JSON.stringify([user]));

            } else {
              const localUsersParse = JSON.parse(localUsers);
              
              localUsersParse.push(user);
              
              banco_de_dados.setItem("Usuarios", JSON.stringify(localUsersParse));
            }

            
            alert ("Usuario Cadastrado")

      } else {
        alert("Preencha todos os campos")
      }
      
}