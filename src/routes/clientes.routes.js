import { Router } from "express"
import { getClientes,getCliente,crearClientes, actualizarClientes,eliminarClientes, } from "../controllers/clientes.controller.js"

const router = Router ()

router.get('/clientes',getClientes)
router.get('/clientes/:id',getCliente)
router.post('/clientes',crearClientes)
router.patch('/clientes/:id', actualizarClientes)
router.delete('/clientes/:id',eliminarClientes)

export default router