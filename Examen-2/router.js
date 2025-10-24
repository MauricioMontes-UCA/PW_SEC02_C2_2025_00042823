import { Router } from "express"

const router = Router()

router.get("/cuentas", (req, res) => {
    try {

    } catch (e) {
        res.status(500).json({ message: "Internal server error" })
    }
}) 

router.get("/cuentas/:id")

router.get("/cuentas?param")

router.get("/cuentasBalance")

export default router;