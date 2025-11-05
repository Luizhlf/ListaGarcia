function estoqueTotal(estoque){
  let p = document.createElement("p");

  const produtosEstoque = estoque.filter((quantidade)=>{
    if(quantidade.quantidade > 5){
      return quantidade
    }
  })
  const valorProdutos = produtosEstoque.reduce((total, produto)=>{
    return total + (produto.preco * produto.quantidade)
  }, 0)
  p.textContent = `Valor total do estoque (produtos com mais de 5 unidades): R$ ${valorProdutos}`
  document.body.appendChild(p)
}