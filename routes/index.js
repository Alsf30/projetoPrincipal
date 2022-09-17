var express = require('express');
var router = express.Router();
const acessoriosController = require('../controller/acessoriosController');
const cadastroController = require('../controller/cadastroController');
const cadastroUserController = require('../controller/cadastroUserController');
const carrinhoController = require('../controller/carrinhoController');
const compraConcluidaController = require('../controller/compraConcluidaController');
const compraNegadaController = require('../controller/compraNegadaController');
const enderecoController = require('../controller/enderecoController');
const homeController = require('../controller/homeController');
const loginController = require('../controller/loginController');
const marcasController = require('../controller/marcasController');
const pagamentoController = require('../controller/pagamentoController');
const pesquisaController = require('../controller/pesquisaController');
const roupasController = require('../controller/roupasController');
const saleController = require('../controller/saleController');
const tenisController = require('../controller/tenisController');


/* GET home page.*/ 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Página Inicial' });
});

router.get('/acessorios', acessoriosController.index);
router.get('/cadastro', cadastroController.index);
router.get('/cadastroUser', cadastroUserController.index);
router.get('/carrinho', carrinhoController.index);
router.get('/compraConcluida', compraConcluidaController.index);
router.get('/compraNegada', compraNegadaController.index);
router.get('/endereco', enderecoController.index);
router.get('/login', loginController.index);
router.get('/marcas', marcasController.index);
router.get('/pagamento', pagamentoController.index);
router.get('/pesquisa', pesquisaController.index);
router.get('/roupas', roupasController.index);
router.get('/sale', saleController.index);
router.get('/tenis', tenisController.index);



module.exports = router;
