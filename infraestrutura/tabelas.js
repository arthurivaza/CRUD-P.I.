class Tabelas {
    init(conexao) {
        this.conexao = conexao;
        this.criarTabelaEstoque();
    }

    criarTabelaEstoque(){
        const sql = `
            CREATE TABLE IF NOT EXISTS produtos (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(255) NOT NULL,
            descricao TEXT,
            codigo_barras VARCHAR(50) UNIQUE,
            preco_venda DECIMAL(10, 2) NOT NULL,
            preco_custo DECIMAL(10, 2) NOT NULL,
            categoria VARCHAR(100),
            quantidade INT DEFAULT 0
        );

        `;
        this.conexao.query(sql, (error) => {
            if(error) {
                console.log("Erro ao criar a tabela!")
                console.log(error.message)
                return;
            }
            console.log("Tabela criada com sucesso!")
        })
    }
}

module.exports = new Tabelas();