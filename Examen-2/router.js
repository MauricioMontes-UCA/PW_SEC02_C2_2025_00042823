import { Router } from "express"
import accountRouter from "./routes/account.routes.js"
import balanceRouter from "./routes/balance.routes.js"

const router = Router()

router.use("/cuentas", accountRouter)

router.use("/cuentasBalance", balanceRouter)

export default router;