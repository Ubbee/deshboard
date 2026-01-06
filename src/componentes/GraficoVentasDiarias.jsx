import { Line } from "react-chartjs-2";
import { ventas } from "../datos/ventas";
import { opcionesGenerales } from "./configuracionChart";

function GraficoVentasDiarias() {
  const etiquetas = ventas.map((venta) => venta.dia);
  const valores = ventas.map((venta) => venta.total);

  const data = {
    labels: etiquetas,
    datasets: [
      {
        label: "Ventas diarias ($)",
        data: valores,
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59,130,246,0.25)",
        tension: 0.35,
        pointRadius: 4,
      },
    ],
  };

  const opciones = {
    ...opcionesGenerales,
    plugins: {
      ...opcionesGenerales.plugins,
      tooltip: {
        callbacks: {
          label: (context) =>
            `$ ${context.parsed.y.toLocaleString()}`,
        },
      },
    },
  };

  return (
    <div className="tarjeta" style={{ minHeight: "300px" }}>
      <h3>Ventas por día</h3>
      <Line data={data} options={opciones} />
    </div>

  );
}

export default GraficoVentasDiarias;
