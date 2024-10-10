const apiurl = 'http://localhost:3000/api/escolas';  // Caminho correto para o proxy


async function buscarDados() {
    try {
        const response = await fetch(apiurl);
       
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.statusText}`);
        }
       
        const data = await response.json();


        //VERIFICAR OS DADOS QUE ESTAO VINDO
        console.log(data)




        exibirEscolas(data[1]);
    } catch (error) {
        document.getElementById('erro').innerText = `Erro ao buscar dados: ${error.message}`;
    }
}


function exibirEscolas(escolas) {
    const lista = document.getElementById('escolas');
    lista.innerHTML = '';
    // Limpa a lista antes de adicionar os novos itens


    escolas.forEach(escola => {
        const li = document.createElement('li');
        li.textContent = escola.nome;
        lista.appendChild(li);
    });
}


document.getElementById('buscar').addEventListener('click', buscarDados);