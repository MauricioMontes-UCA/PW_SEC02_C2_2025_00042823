# PW_SEC02_C2_2025_00042823

## Examen 2

Solo por si acaso, documento cómo entendí que se supone debe trabajar esto:

- `/cuentas` es el método GET que permite obtener todas las cuentas.
- `/cuentas/:id` es el método GET que obtiene una cuenta cuando se le da un ID.
- `/cuentas?id=` es lo mismo que que el método anterior, pero esta vez con parámetros en la URL.
- `/cuentas?name=` es un método GET que busca de acuerdo al nombre. Es case sensitive, respeta las mayúsculas y acentos.
- `/cuentas?gender=` es un método GET que devuelve una lista, filtrado por el género.
- `/cuentasBalance` devuelve la suma de los balances de las cuentas activas.

En el caso de `cuentas?params`, solo usar un parámetro a la vez; y usar solo `id`, `name` o `gender`, porque de otra forma nunca devuelve algo. No sé como hacer un timeout error, o forzar que se usen esos parámetros.