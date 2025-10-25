import { Router } from "express"
import { getTotalBalance } from "../controller/balance.controller.js";

const balanceRouter = Router()

// Está un router diferente, que tiene como dirección /cuentasBalance, entonces
// no se le agrega nada más.
balanceRouter.get("/", getTotalBalance)

export default balanceRouter;