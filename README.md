# Desafio entregable n°3:

# Servidor con Express.

# Consignas:

Desarrollar un servidor basado en express donde podamos hacer consultas a nuestro archivo de productos.
Aspectos a incluir:
- Utilizar la clase ProductManager que utilizamos con persistencia de archivos.
- Desarrollar un servidor express que, en su archivo app.js importe al archivo de ProductManager que actualmente tenemos.
- El servidor debe contar con los siguientes endpoints:
Ruta '/products', la cual debe leer el archivo de productos y devolverlos dentro de un objeto. Agregar el soporte para recibir por query param el valor?limit=el cual recibira un limite de resultados.
- Si no se recibe query de limite, se devolveran todos los productos.
- Si se recibe un limite, solo devolver el numero de productos solicitados:
ruta '/products/pid', la cual debe recibir por req.params el pid y devolver solo el producto solicitado en lugar de todos los productos.

Formato de entrega: 

carpeta src con app.js dentro y ProductManager dentro.
package.json con la info del proyecto.
no incluir los node-modules generados.

# PROCESO DE TESTING.

Servidores con express

Desarrollar un servidor basado en express donde podamos hacer consultas a nuestro archivo de productos.

Se instalarán las dependencias a partir del comando npm install
Se echará a andar el servidor
Se revisará que el archivo YA CUENTE CON AL MENOS DIEZ PRODUCTOS CREADOS al momento de su entrega, es importante para que los tutores no tengan que crear los productos por sí mismos, y así agilizar el proceso de tu evaluación.
Se corroborará que el servidor esté corriendo en el puerto 8080.
Se mandará a llamar desde el navegador a la url http://localhost:8080/products sin query, eso debe devolver todos los 10 productos.
Se mandará a llamar desde el navegador a la url http://localhost:8080/products?limit=5 , eso debe devolver sólo los primeros 5 de los 10 productos.
Se mandará a llamar desde el navegador a la url http://localhost:8080/products/2, eso debe devolver sólo el producto con id=2.
Se mandará a llamar desde el navegador a la url http://localhost:8080/products/34123123, al no existir el id del producto, debe devolver un objeto con un error indicando que el producto no existe.

# Ordonez Santiago