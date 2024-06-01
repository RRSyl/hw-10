const express = require('express');
const userController = require('../controller/user_controller');
const router = express.Router();
const auth = require("../middleware/auth")
const multer = require("multer")
const path = require("path")


// Define routes
const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, path.join(__dirname,"../uploads"));
    },
    filename: (req,file,cb) => {
        const uniqueSuffix = Date.now() + '-' +Math.round(Math.random()*1E9)+path.extname(file.originalname)
        cb(null,file.fieldname +'-'+uniqueSuffix)
    }
})

const upload = multer({storage:storage})
router.post('/cek',userController.upload)

router.post('/',userController.create);
router.get('/',userController.getAll);
router.get('/:id',userController.getById);
router.delete('/:id',userController.delete);
router.post('/login',userController.login);
router.post('/register', (req, res) => {
    res.send('Registrasi berhasil');
});


module.exports = router;