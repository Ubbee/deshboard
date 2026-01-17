import { useState } from "react";
import { productos } from "../datos/productos";

function TablaProductos() {
    const [columnaOrden, setColumnaOrden] = useState("nombre");
    const [ordenAscendente, setOrdenAscendente] = useState(true);
    const [busqueda, setBusqueda] = useState("");

    const productosCalculados = productos.map((producto) => ({
        ...producto,
        ingreso: producto.precio * producto.vendidos,
    }));

    const productosFiltrados = productosCalculados.filter((producto) =>
        producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    const productosOrdenados = [...productosFiltrados].sort(
        (a, b) => b.vendidos - a.vendidos
    );


    function cambiarOrden(columna) {
        if (columna === columnaOrden) {
            setOrdenAscendente(!ordenAscendente);
        } else {
            setColumnaOrden(columna);
            setOrdenAscendente(true);
        }
    }

    function renderFlecha(columna) {
        if (columna !== columnaOrden) return null;
        return ordenAscendente ? " ▲" : " ▼";
    }

    const totalIngresos = productosCalculados.reduce(
        (acc, producto) => acc + producto.ingreso,
        0
    );

    const totalVendidos = productosCalculados.reduce(
        (acc, producto) => acc + producto.vendidos,
        0
    );

    const productoTop = productosCalculados.reduce((top, actual) =>
        actual.vendidos > top.vendidos ? actual : top
    );


    return (
        <div className="tarjeta">
            <h3>Productos</h3>

            <input
                type="text"
                placeholder="Buscar producto..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="input-busqueda"
            />

            <div className="resumen-productos">
                <p>Total ingresos: ${totalIngresos.toLocaleString()}</p>
                <p>Unidades vendidas: {totalVendidos}</p>
            </div>

            <div className="tabla-wrapper">
                <table className="tabla-productos">
                    <thead>
                        <tr>
                            <th onClick={() => cambiarOrden("nombre")}>
                                Producto {renderFlecha("nombre")}
                            </th>
                            <th onClick={() => cambiarOrden("precio")}>
                                Precio {renderFlecha("precio")}
                            </th>
                            <th onClick={() => cambiarOrden("vendidos")}>
                                Vendidos {renderFlecha("vendidos")}
                            </th>
                            <th onClick={() => cambiarOrden("ingreso")}>
                                Ingresos {renderFlecha("ingreso")}
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {productosOrdenados.map((producto) => (
                            <tr
                                key={producto.id}
                                className={
                                    producto.id === productoTop.id ? "producto-destacado" : ""
                                }
                            >
                                <td>{producto.nombre}</td>
                                <td>${producto.precio}</td>
                                <td>{producto.vendidos}</td>
                                <td>${producto.ingreso}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default TablaProductos;
