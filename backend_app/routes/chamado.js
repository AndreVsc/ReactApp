import express from 'express';
import { getChamados, createChamado, updateChamado } from '../controllers/chamadoController.js';

const chamadoRoutes = express.Router();

chamadoRoutes.get('/', getChamados);
chamadoRoutes.post('/', createChamado);
chamadoRoutes.put('/:id', updateChamado); 

export default chamadoRoutes;
