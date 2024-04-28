import { Router } from 'express';
import { crearUsuario, getHome, verusuario, actualizarusuario, borrarusuario } from '../controllers/data.controllers.js';

const router = Router();

router.get('/', getHome);
router.post('/crear', crearUsuario);
router.get('/ver', verusuario);
router.put('/actualizar', actualizarusuario);
router.delete('/eliminar/:carnet', borrarusuario);

export default router;