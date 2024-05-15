const {response} = require('express');
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');
const { generarJWT } = require('../helpers/generar-jwt');

const login = async(req, res = response) => {

    const { correo, password } = req.body

    try {

        // Validar si existe el correo
        const usuario = await Usuario.findOne({ correo });
        if (!usuario) {
            return res.status(400).json({
                msg: "Usuario / password no son correctos - correo"
            })
        }

        // validar si el usuario está activo
        if (!usuario.estado) {
            return res.status(400).json({
                msg: "Usuario / password no son correctos - estado: false"
            })
        }

        // Verificar la contraseña
        const validPassword = bcryptjs.compareSync(password, usuario.password);
        if (!validPassword) {
            return res.status(400).json({
                msg: "Usuario / password no son correctos - password"
            })
        }

        // Generar el JWT
        const token = await generarJWT(usuario.id)



        res.json({
            usuario,
            token
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Algo salió mal, hable con el administrador"
        });
    }
}

module.exports = {
    login
}