var User = require('../models/user');

function pruebas(req, res){
    console.log(req.body);
    res.status(200).send({
        message: 'probando metodo'
    });
}

function saveUser(req, res){
    let params = req.body;
    let user = new User();
    

    if(params.name != '' && params.surname != '' && params.nick != '' && params.email != '' && params.password != ''){
        
        user.name = params.name.toLowerCase();
        user.surname = params.surname;
        user.nick = params.nick;
        user.email = params.email;
        user.password = params.password;

        
    }else{
        res.status(200).send({message: 'Introduzca los datos completos'});
        
    }
}





module.exports = {
    pruebas,
    saveUser
}