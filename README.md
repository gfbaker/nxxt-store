# nxxt-store

Curso React.js en CoderHouse, proyecto de E-commerce, entrega final

NXXT-STORE es una tienda virtual para comprar NFT's. Para el proyecto se utilizó React.js, Javascript, Firebase y Material UI como librería de estilos.

La página inicia en el Home que muestra la lista de todos los items disponibles para la compra. 
Desde el navbar, se puede utilizar un menú desplegable para acceder a los items filtrados según su categoría. Haciendo clíck sobre alguna imagen, se puede acceder a los detalles del producto, y desde allí el usuario podrá elegir la cantidad de items que desea comprar y agregarlos al carrito. A medida que se agregúen elementos al carrito de compra, se podrá ver la cantidad total de items en el carrito desde el navbar en todo momento.

En el carrito de compra, el usuario podrá ver los items que ha agregado y podrá eliminarlos. Si desea agregar más elementos del mismo item, haciendo click en la imagen accedera nuevamente al detalle del producto y podrá agregar más unidades. También podrá eliminarlos individualmente o reiniciar la cantidad de productos del carrito 0. 

El carrito solo permite hacer check-out si hay elementos, de lo contrario una alerta le avisara al usuario que debe agregar elementos. Cuando el usuario hace check-out, se desplegará un formulario para completar con sus datos. El usuario debe completar todos los datos y además, escribir su email 2 veces de manera correcta para activar el botón de "Hacer pedido", de lo contrario no podrá hacer el pedido. Una vez que el usuario hace click en "Hacer pedido", se desplegará un loader y luego un mensaje de confirmación de pedido. El pedido se guarda en la base de datos de Firebase y el usuario puede ver el nro. de ID de su compra. En el caso de haber algún error de ejecución durante el proceso de compra, se le avisará al usuario con un mensaje de alerta y podrá volver a intentarlo.

## RUN

npm run dev

### Vercel Deploy:
https://nxxt-store.vercel.app/
