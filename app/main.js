
let livros = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaAPI()

async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointDaAPI)
    livros = await res.json()
    livros = aplicarDesconto(livros)
    exibirOsLivrosNaTela(livrosComDesconto)
}





// let livros = []
// const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json' //API
// getBuscarLivrosDaAPI()

// const elementoParaInserirLivros = document.getElementById('livros')


// async function getBuscarLivrosDaAPI() {
//     const resposta = await fetch(endpointDaAPI) //Busca a promisse na API atribuida a endpointAPI
//     livros = await resposta.json()  //o arry recebe a api já convertida em json
//     livros = aplicarDesconto(livros) //aplica os descontos nos livros
//     exibirOsLivrosNaTela(livrosComDesconto) //exibe na tela livros já com desconto
// }








