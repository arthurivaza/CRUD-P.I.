const routerEstoque = require("./estoqueRoute")
module.exports = (app) => {
    app.use(routerEstoque)
}