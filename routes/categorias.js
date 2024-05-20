const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { getAll,
        getById,
        createCategory,
        updateCategory,
        deleteCategory
 } = require('../controllers/categorias');

const router = Router();

router.get('/', getAll);

router.get('/:id', getById);

router.post('/', createCategory)

router.put('/:id', updateCategory)

router.delete('/:id', deleteCategory)

module.exports = router;