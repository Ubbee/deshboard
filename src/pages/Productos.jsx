import { productos } from "../datos/productos";

function Productos() {
  // Calcular el producto más vendido
  const productoMasVendido = productos.reduce((prev, current) => {
    return prev.vendidos > current.vendidos ? prev : current;
  });

  // Calcular el total generado por cada producto
  const productosConIngreso = productos.map((producto) => ({
    ...producto,
    ingreso: producto.precio * producto.vendidos,
  }));

  return (
    <section className="pagina">
      <h2>Productos más vendidos</h2>

      <div className="resumen">
        <div className="tarjeta">
          <h3>Producto más vendido</h3>
          <p>{productoMasVendido.nombre} – Vendidos: {productoMasVendido.vendidos}</p>
        </div>

        <div className="tarjeta">
          <h3>Ingresos por producto</h3>
          <ul>
            {productosConIngreso.map((producto) => (
              <li key={producto.id}>
                {producto.nombre} – Ingreso: ${producto.ingreso.toLocaleString()}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Productos;
