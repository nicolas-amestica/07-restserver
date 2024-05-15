const { response } = require("express")
const jwt = require('jsonwebtoken');

const Usuario = require('../models/usuario');


const validarJWT = async(req, res = response, next) => {
    
    const token = req.header('x-token');

    if (!token) {
        return res.status(401).json({
            msg: 'No hay token en la petición'
        })
    }

    try {
     
        const { uid } = jwt.verify(token, process.env.PSECRETORPRIVATEKEY);

        // Leer al usuario que corresponde al uid
        const usuario = await Usuario.findById(uid);

        req.usuario = usuario;

        if (!usuario) {
            return res.status(401).json({
                msg: 'Token no válido - usuario no existe en BD'
            })
        }

        if (!usuario.estado) {
            return res.status(401).json({
                msg: 'Token no válido - usuario con estado: false'
            })
        }


        req.uid = uid;
        next()


    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'Token no válido'
        })
    }
}


module.exports = {
    validarJWT
}