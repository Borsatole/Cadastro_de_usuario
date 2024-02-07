

const lista = banco_de_dados.getItem("Usuarios","");
const listaParse = JSON.parse(lista);

for (let i = 0 ; i < listaParse.length; i++ ) {
    // ****SELECIONA A TABELA****
    let listagem_usuarios = document.getElementById('tabela_usuarios');

    // ****CRIA A LINHA****
    const linha = document.createElement("tr");


    // PREEENCHE OS VALORES 

    // Pega o campo Id e troca o valor
    const coluna_id = document.createElement("td");
    coluna_id.innerText = listaParse[i].Id;
    coluna_id.className = 'id';
    linha.appendChild(coluna_id);

    // Pega o campo nome e troca o valor
    const coluna_nome = document.createElement("td");
    coluna_nome.innerText = listaParse[i].nome;
    linha.appendChild(coluna_nome);

    const coluna_usuario = document.createElement("td");
    coluna_usuario.innerText = listaParse[i].usuario;
    linha.appendChild(coluna_usuario);

    const coluna_painel = document.createElement("td");
    coluna_painel.innerText = listaParse[i].painel;
    linha.appendChild(coluna_painel);

    const coluna_servidor = document.createElement("td");
    coluna_servidor.innerText = listaParse[i].servidor;
    linha.appendChild(coluna_servidor);

    const coluna_aplicativo = document.createElement("td");
    coluna_aplicativo.innerText = listaParse[i].aplicativo;
    linha.appendChild(coluna_aplicativo);

    const coluna_status = document.createElement("td");
    coluna_status.innerText = listaParse[i].telefone;
    linha.appendChild(coluna_status);

    const coluna_expiracao = document.createElement("td");
    coluna_expiracao.innerText = listaParse[i].expiracao;
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

    // adicionando o novo usuario ao total de clientes
    let clientes_ativos = document.getElementById('clientes_ativos');
    clientes_ativos.innerText++;


    // Inserindo isso tudo dentro de uma linha tr
    listagem_usuarios.appendChild(linha);


}