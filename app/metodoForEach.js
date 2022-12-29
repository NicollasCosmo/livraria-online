
const elementoParaInserirLivros = document.getElementById('livros')
const elementoComValorTotalDeLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis')

function exibirOsLivrosNaTela(listaDeLivros) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = '' //inicialmente vai aparecer limpo
    elementoParaInserirLivros.innerHTML = '' //inicialmente vai aparecer limpo
    listaDeLivros.forEach(livro => {  // Usando o forEach para criar "cada um" dos elementos >> (livro)
          //Operador ternário que verifica a disponibilidade e manipula classe do css de acordo com o resultado
        let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel' 
        elementoParaInserirLivros.innerHTML += `
        <div class="livro">
        <img class="${disponibilidade}" src="${livro.imagem}"
          alt="${livro.alt}" />
        <h2 class="livro__titulo">
          ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>
        `
    })
}





// const elementoValorTotalDeLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis')

// function exibirOsLivrosNaTela(listaDeLivros) {
//     elementoValorTotalDeLivrosDisponiveis.innerHTML = '' //inicialmente vai aparecer limpo
//     //influência na imagem(classe) do css
//     elementoParaInserirLivros.innerHTML = '' //inicialmente vai aparecer limpo
//     listaDeLivros.forEach(livro => {    // Usando o forEach para criar "cada um" dos elementos >> (livro)
  
//       //operador ternário que verifica a disponibilidade e manipula classe do css de acordo com o resultado
//       let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel' 
//         elementoParaInserirLivros.innerHTML += `
//         <div class="livro">
//         <img class="${disponibilidade}" src="${livro.imagem}" 
//           alt="${livro.alt}" />
//         <h2 class="livro__titulo">
//           ${livro.titulo}
//         </h2>
//         <p class="livro__descricao">${livro.autor}</p>
//         <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p> 
//         <div class="tags">
//           <span class="tag">${livro.categoria}</span>
//         </div>
//       </div>
//         `
//     })
// }


