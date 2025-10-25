import { cuentas } from "../db/database.js";

// cuando es una base de datos, no es tan directo, pero xd
export const getAll = () => {
    return cuentas;
}

// como con el caso de getByName, el objeto es especial cuando no
// encuentra ningún cliente por su id.
export const getById = (id) => {
    const account = cuentas.find(e => e._id === id);
    if (!account) {
        return { "error": "No se encontró la cuenta con ese ID" };
    }
    return account;
}

// de una u otra forma, será un objeto. La cuestión es que, la propiedad
// "error" existe solo si no hay ningún cliente encontrado
export const getByName = (name) => {
    const account = cuentas.find(e => e.client === name);
    if (!account) {
        return { "error": "No se encontró la cuenta con ese nombre" }
    }
    return account;
}

// si no encuentra cuentas con el género dado, devuelve un arreglo vacío
// de lo contrario, devuelve el arreglo filtrado.
export const getByGender = (gender) => {
    const accounts = cuentas.filter(e => e.gender === gender);
    if (accounts.length === 0) {
        return []
    }
    return accounts;
}