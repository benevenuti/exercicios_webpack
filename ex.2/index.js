const produto = {
    nome : 'Caneta Bic Azul',
    preco: 1.88,
    desconto: 0.07
}

function clone(objeto){
    return {...objeto}
}

const novoProduto = clone(produto)
novoProduto.nome = 'Caneta Bic Verde'

console.log(produto, novoProduto)