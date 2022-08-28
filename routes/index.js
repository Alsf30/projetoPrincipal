var express = require('express');
var router = express.Router();


const homeController = require('../controllers/homeController');
const tenisController = require('../controllers/tenisController');
const acessoriosController = require('../controllers/acessoriosController');
const roupasController = require('../controllers/roupasController');
const marcasController = require('../controllers/marcasController')
const testeController = require('../controllers/testeController');
const saleController = require('../controllers/saleController');
const pesquisaController = require('../controllers/pesquisaController');
const loginController = require('../controllers/loginController');
const carrinhoController = require('../controllers/carrinhoController');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/home', homeController.index)

router.get('/tenis', tenisController.index);

router.get('/acessorios', acessoriosController.index);

router.get('/roupas', roupasController.index);

router.get('/marcas', marcasController.index);

router.get('/teste', testeController.index);

router.get('/sale', saleController.index);

router.get('/pesquisa', pesquisaController.index);

router.get('/login', loginController.index);

router.get('/carrinho', carrinhoController.index);

router.get('/acessorios', acessoriosController.create);;

router.get('/acessorios/:id', acessoriosController.show);

router.get('/acessorios/:id/editar',acessoriosController.edit);

router.put('/acessorios/:id', acessoriosController.update);

router.delete('/acessorios:id', acessoriosController.destroy);

module.exports = router;