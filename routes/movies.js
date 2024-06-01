const express = require('express');
const router = express.Router();
const movieController = require("../controller/movies_controller")

/

router.post('/', upload.single('photo'), movieController.create);
router.get('/', movieController.getAll);
router.get('/:id', movieController.getById);
router.put('/:id', upload.single('photo'), movieController.update);
router.delete('/:id', movieController.delete);

module.exports = router;
