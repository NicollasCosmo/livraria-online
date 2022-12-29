
const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : FiltrarPorCategoria(categoria)
    exibirOsLivrosNaTela(livrosFiltrados)
    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal)
    }
}

function FiltrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}





// const botoes = document.querySelectorAll('.btn') // Pega todos os botões que tem .btn
// botoes.forEach(btn => btn.addEventListener('click', filtrarLivros)) //no click de cada botão, chama a função filtrarLivros

// function filtrarLivros() {
//     const elementoBtn = document.getElementById(this.id) //busca o botão exatamente pelo "id" clicado no momento
//     const categoria = elementoBtn.value // guarda o value do id referente ao botão clicado
    
//     //faz um filtro com base no id clicado, porém se for o value do btn (dispnível), só mostra os disponiveis
//     let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria) 
//     exibirOsLivrosNaTela(livrosFiltrados)// exibe na tela só os livros que foram filtrados.
//     if (categoria == 'disponivel') {
//         const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados) //chama a função que calcula o valor t
//         exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) // exibe este valor (soma de todos disponiveis)  na tela
//     }
// }

// function filtrarPorCategoria(categoria) {
//     return livros.filter(livro => livro.categoria == categoria)
// }

// function filtrarPorDisponibilidade() {
//     return livros.filter(livro => livro.quantidade > 0)
// }

// function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) {
//     elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
//     <div class="livros__disponiveis">
//     <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
//     </div>
//     `
// }