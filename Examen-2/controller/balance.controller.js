import { getAll } from "../services/account.services.js";

// función para obtener el balance total, e indicar si hay cuentas activas.
export const getTotalBalance = async (req, res) => {
    try {
        const accounts = getAll();
        let status = false;
        let total = 0;

        accounts.forEach((e) => {
            if (e.isActive) {
                status = true;
                total += parseFloat(e.balance.replace(/[$,]/g, ""))
            }
        })

        res.status(200).json({
            "status": status,
            "accountBalance": total
        });
    }
    catch (e) {
        res.status(500).json({ message: "Internal server error" })
    }
}