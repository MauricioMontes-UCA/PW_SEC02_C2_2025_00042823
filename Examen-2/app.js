import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import router from "./router.js"

const app = express()

// Esto de aquí debería trabajarse con una variable de entorno, pero ajá, con una
// variable de entorno esto de acá puede ser cualquier puerto, así que dejo esto así
// como constancia de que se usa el puerto 3130.
const PORT = 3130

app.use(bodyParser.json())
app.use(cors())

app.use("/", router)

app.listen(PORT, () => {
    console.log(`Server running and listening in PORT: ${PORT}`)
})