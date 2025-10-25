import { Router } from "express"
import { getAccountById, getTotalBalance, getAccountByParam } from "./account.controller.js" 

const accountRouter = Router()

// Esta ruta de aquí manejará "/cuentas" para obtener todas las cuentas
// como también "cuentas?param=valor", con los parámetros siendo id, name y gender
// why gender, of all things?
accountRouter.get("/", getAccountByParam) 

// Ruta necesaria para tener la suma de los balances de los clientes
accountRouter.get("/accountBalance", getTotalBalance)

// Esta ruta es para búsquedas específicas por ID en el formato /cuentas/123
accountRouter.get("/:id", getAccountById)

export default accountRouter;