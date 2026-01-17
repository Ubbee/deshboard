import GraficoVentasDiarias from "../componentes/GraficoVentasDiarias";
import { ventas } from "../datos/ventas";

function Ventas() {
  if (!ventas.length) {
    return (
      <section className="pagina">
        <h2>Ventas</h2>
        <p>No hay datos de ventas disponibles.</p>
      </section>
    );
  }

  return (
    <section className="pagina">
      <p className="pagina-descripcion">
        Análisis de ingresos y evolución diaria.
      </p>
      <GraficoVentasDiarias />
    </section>
  );
}

export default Ventas;
