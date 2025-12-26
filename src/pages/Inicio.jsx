import { ventas } from "../datos/ventas";

function Inicio() {
  // Total de ventas de la semana
  const totalSemana = ventas.reduce(
    (acumulador, venta) => acumulador + venta.total,
    0
  );

  // Promedio diario
  const promedioDiario = Math.round(totalSemana / ventas.length);

  // Ventas del último día (simula "ventas de hoy")
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

      <div className="tarjeta" style={{ marginTop: "20px" }}>
        <h3>Estado del sistema</h3>
        <p>Los datos mostrados corresponden a un entorno de prueba.</p>
      </div>
    </section>
  );
}

export default Inicio;
