const{Router} = require("express")
const router = Router();
const estoqueController = require("../controllers/estoqueController")

router.get("/produtos", (req,res) => {
    const listaProdutos = estoqueController.buscar()
    listaProdutos
    .then((produtos) => res.status(200).json(produtos))
    .catch(error => res.status(400).json(error.message))
});

router.post("/produtos", (req, res) => {
    const novoProduto = req.body; 
    console.log("Novo produto recebido:", novoProduto);

    estoqueController.criar(novoProduto)
        .then(produtoCriado => res.status(201).json(produtoCriado))
        .catch(error => res.status(400).json({ error: error.message }));
});

router.put("/produto/:id", (req, res) => {
    const { id } = req.params;
    const atualizarProduto = req.body; 

    console.log("ID da URL:", id);  

    estoqueController.atualizar(id, atualizarProduto)
        .then(produtoAtualizado => res.status(200).json(produtoAtualizado))
        .catch(error => res.status(400).json({ error: error.message })); 
});


router.delete("/produto/:id", (req, res) => {
    const { id } = req.params;

    estoqueController.deletar(id)
        .then(resposta => res.status(200).json({ message: "Produto deletado com sucesso!" }))
        .catch(error => res.status(400).json({ error: error.message }));
});


module.exports = router;

