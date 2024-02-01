

// Codigo Adicionar Usuario

// Seleciona a tabela
let listagem_usuarios = document.getElementById('tabela_usuarios');

// Cria a linha
const linha = document.createElement("tr");

// cria as colunas
const coluna_id = document.createElement("td");
const coluna_nome = document.createElement("td");
const coluna_usuario = document.createElement("td");
const coluna_painel = document.createElement("td");
const coluna_servidor = document.createElement("td");
const coluna_aplicativo = document.createElement("td");
const coluna_status = document.createElement("td");
const coluna_expiracao = document.createElement("td");

// PREEENCHE OS VALORES 

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

coluna_aplicativo.innerText = "Conectbox";
linha.appendChild(coluna_aplicativo);

coluna_status.innerText = "Ativo";
linha.appendChild(coluna_status);

coluna_expiracao.innerText = "28/12/2023";
linha.appendChild(coluna_expiracao);


// Inserindo isso tudo dentro de uma linha tr
listagem_usuarios.appendChild(linha);


