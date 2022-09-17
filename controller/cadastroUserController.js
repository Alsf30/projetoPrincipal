const cadastroUserController = {
    index:(req,res) =>{res.render('cadastroUser')},
    
    create:(req,res) => {
        let {nomeuser,sobrenomeuser,idadeuser,cpfuser,telefoneuser,emailuser,cepuser} = req.body;        
        res.redirect('login')
        },  
    editar: (req,res) => {
        let {id} = req.params;
        res.send('eu quero editar o produto' + id);
    }    

}

 


    module.exports = cadastroUserController;