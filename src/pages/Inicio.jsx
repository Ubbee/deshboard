import { ventas } from "../datos/ventas";
import { calcularTotalVentas } from "../datos/calculosVentas";

function Inicio() {
  const totalSemana = calcularTotalVentas(ventas);
  const promedioDiario = Math.round(totalSemana / ventas.length);
  const ventasHoy = ventas[ventas.length - 1]?.total ?? 0;

  return (
    <section className="pagina">
      <h2>Resumen general</h2>

      <div className="resumen">
        <div className="tarjeta">
          <h3>Total semanal</h3>
          <p>${totalSemana.toLocaleString()}</p>
        </div>

        <div className="tarjeta">
          <h3>Promedio diario</h3>
          <p>${promedioDiario.toLocaleString()}</p>
        </div>

        <div className="tarjeta">
          <h3>Ventas hoy</h3>
          <p>${ventasHoy.toLocaleString()}</p>
        </div>
      </div>
    </section>
  );
}

export default Inicio;
