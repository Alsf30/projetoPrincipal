var express = require('express');
var router = express.Router();

const acessoriosController = require('../controllers/acessoriosController');

router.get('/acessorios', acessoriosController.index);

router.get('/acessorios', acessoriosController.create);

router.get('/acessorios/:id', acessoriosController.show);

router.get('/acessorios/:id/editar',acessoriosController.edit);

router.put('/acessorios/:id', acessoriosController.update);

router.delete('/acessorios:id', acessoriosController.destroy);

module.exports = router;
 