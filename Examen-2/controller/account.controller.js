import { getAll, getById, getByName, getByGender } from "../services/account.services.js"

export const getAllAccounts = async (req, res) => {
    try {
        const data = getAll()

        res.status(200).json({
            count: data.length,
            data: data
        })
    }
    catch (e) {
        res.status(500).json({ message: "Internal server error"})
    }
}

export const getAccountByParam = async (req, res) => {
    try {
        const queries = req.query;
        
        // si no hay params, devuelve todas las cuentas
        if (Object.keys(queries).length === 0) {
            return getAllAccounts(req, res);
        }

        // entiendo que solo se ingresará un parámetro, así que valido eso
        if (Object.keys(queries).length > 1) {
            res.status(400).json({ message: "Solo se permite un parámetro a la vez" })
        }

        let data;
        const { id, name, gender } = queries;
        
        if (id) {
            // Es exactamente el mismo procedimiento que la función
            // getAccountById, pero como esa maneja el caso req.params.id...
            // tocó de nuevo

            data = getById(id);

            if (data.error) {
                res.status(404).json({
                    "finded": false,
                    "account": data
                })
            }
            else {
                res.status(200).json({
                    "finded": true,
                    "account": data
                })
            }
        }

        if (name) {
            data = getByName(name)
            if (data.error) {
                res.status(404).json({
                    "finded": false,
                    "account": data
                })
            }
            else {
                res.status(200).json({
                    "finded": true,
                    "account": data
                })
            }
        }

        if (gender) {
            data = getByGender(gender)

            if (data.length === 0) {
                res.status(404).json({
                    "finded": false,
                    "account": data
                })
            }
            else if (data.length === 1) {
                res.status(200).json({
                    "finded": true,
                    "account": data[0]
                })
            }
            else {
                res.status(200).json({
                    "finded": true,
                    "data": data
                })
            }
        }
    } 
    catch (e) {
        res.status(500).json({ message: "Internal server error" })
    }
}

export const getAccountById = async (req, res) => {
    try {
        const id = req.params.id;

        let account = getById(id);

        if (account.error) {
            res.status(404).json({
                "finded": false,
                "account": account
            })
        }
        else {
            res.status(200).json({
                "finded": true,
                "account": account
            })
        }

    }
    catch (e) {
        res.status(500).json({ message: "Internal server error" })
    }
}
