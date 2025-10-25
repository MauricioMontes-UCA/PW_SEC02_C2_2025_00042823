import { Router } from "express"
import { getAccountById, getAccountByParam } from "../controller/account.controller.js" 

const accountRouter = Router()

// Esta ruta de aquí manejará "/cuentas" para obtener todas las cuentas
// como también "cuentas?param=valor", con los parámetros siendo id, name y gender
// why gender, of all things?
accountRouter.get("/", getAccountByParam) 

// Esta ruta es para búsquedas específicas por ID en el formato /cuentas/123
accountRouter.get("/:id", getAccountById)

export default accountRouter;