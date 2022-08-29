const acessoriosController = {
        
    index:(req, res) => {
        return res.render('acessorios')
    },
    create: (req, res) => {},

    update: (req, res) => {},
    
    show: (req, res) => { const {id} = req.params;
    const acessorios = Acessorios.findById(id);
    if(!acessorios) {
        return res.send(`Serviço não encontrado`);
    }
    return res.render('acessorios', {acessorios});,
    
    edit: (req, res) => {},

    destroy: (req, res) => {}

}

module.exports = acessoriosController