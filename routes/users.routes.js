var express = require('express');
const cadastroUserController = require('../controller/cadastroUserController');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/criar',cadastroUserController.create);
router.get('/:id/editar',cadastroUserController.editar);


module.exports = router;
