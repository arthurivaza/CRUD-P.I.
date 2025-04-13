const conexao = require("../infraestrutura/conexao")
class EstoqueModel {
    listar(){
        const sql = "SELECT * FROM produtos"
        return new Promise((resolve, reject) => {
            conexao.query(sql, {}, (error, resposta) => {
                if(error){
                    console.log("Erro ao listar...")
                    reject(error)
                }
                console.log("Tudo certo!")
                resolve(resposta)
            })  
        })
    }

    criar(novoProduto) {
        const sql = `INSERT INTO produtos (nome, descricao, codigo_barras, preco_venda, preco_custo, categoria, quantidade) 
                     VALUES (?, ?, ?, ?, ?, ?, ?)`;
        
        const values = [
            novoProduto.nome,
            novoProduto.descricao,
            novoProduto.codigo_barras,
            novoProduto.preco_venda,
            novoProduto.preco_custo,
            novoProduto.categoria,
            novoProduto.quantidade
        ];
        return new Promise((resolve, reject) => {
            conexao.query(sql, values, (error, resposta) => {
                if(error) {
                    console.log("Erro ao criar produto...")
                    reject(error)
                }
                console.log("Produto criado com sucesso!")
                resolve(resposta)
            } )
        })
    }

    atualizar(id, atualizarProduto) {
        const sql = `UPDATE produtos 
                     SET nome = ?, descricao = ?, codigo_barras = ?, preco_venda = ?, preco_custo = ?, categoria = ?, quantidade = ?
                     WHERE id = ?`;
    
        const values = [
            atualizarProduto.nome,
            atualizarProduto.descricao,
            atualizarProduto.codigo_barras,
            atualizarProduto.preco_venda,
            atualizarProduto.preco_custo,
            atualizarProduto.categoria,
            atualizarProduto.quantidade,
            id 
        ];
    
        return new Promise((resolve, reject) => {
            conexao.query(sql, values, (error, resposta) => {
                if (error) {
                    console.log("Erro ao atualizar produto...");
                    reject(error);
                }
                console.log("Produto atualizado com sucesso!");
                resolve(resposta); 
            });
        });
    }
      
    deletar(id) {
        const sql = `DELETE FROM produtos WHERE id = ?`;
    
        return new Promise((resolve, reject) => {
            conexao.query(sql, [id], (error, resposta) => {
                if (error) {
                    console.log("Erro ao deletar produto...");
                    reject(error);
                }
                console.log("Produto deletado com sucesso!");
                resolve(resposta); 
            });
        });
    }
    
    


}

module.exports = new EstoqueModel()