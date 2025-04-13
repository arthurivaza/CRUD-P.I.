const estoqueModel = require("../models/estoqueModel")
class EstoqueController {
    buscar() {
        return estoqueModel.listar()
    }
    criar(novoProduto) {
        if (!novoProduto || !novoProduto.nome) {
            console.log("Produto inválido: ", novoProduto);
            return Promise.reject("Dados do produto estão ausentes.");
        }
        return estoqueModel.criar(novoProduto);
    }
    atualizar(id, atualizarProduto) {
        if (!atualizarProduto) {
            console.log("Erro: Produto não enviado corretamente.");
            return Promise.reject("Produto não foi enviado.");
        }
        console.log("Produto a ser atualizado:", atualizarProduto);
    
        return estoqueModel.atualizar(id, atualizarProduto);
    }
      
    deletar(id) {
        return estoqueModel.deletar(id);
    }
    
}

module.exports = new EstoqueController;