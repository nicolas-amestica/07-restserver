const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const Categoria = require('../models/categoria');

const getAll = async(req = request, res = response) => {

    res.json('Get all');
}

const getById = async(req = request, res = response) => {

    res.json('Get by id');
}

const createCategory = async(req = request, res = response) => {

    res.json('Crear categoría');
}
const updateCategory = async(req = request, res = response) => {

    res.json('Actualizar categoría');
}
const deleteCategory = async(req = request, res = response) => {

    res.json('Eliminar categoría');
}

module.exports = {
    getAll,
    getById,
    createCategory,
    updateCategory,
    deleteCategory
}