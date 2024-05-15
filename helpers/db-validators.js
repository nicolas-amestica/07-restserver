const Role = require ('../models/role');
const Usuario = require ('../models/usuario');

const esRoleValido = async(rol = '') => {
    const existeRol = await Role.findOne({ role: rol });
    if ( !existeRol ) {
        throw new Error(`El rol ${rol} no está registrado en la base de datos`);
    }
};

const emailExiste = async(correo = '') => {
    const existeMail = await Usuario.findOne({correo})
    if ( existeMail ) {
        throw new Error(`El email ${correo} ya se encuentra registrado en la base de datos`);
    }
};

const existeUsuarioPorId = async(id) => {
    const existeUsuario = await Usuario.findById(id)
    if ( !existeUsuario ) {
        throw new Error(`El id ${id} no existe`);
    }
};

module.exports = {
    esRoleValido,
    emailExiste,
    existeUsuarioPorId
};