import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export const opcionesGenerales = {
  responsive: true,
  plugins: {
    legend: {
      labels: {
        color: "#e5e7eb",
      },
    },
  },
  scales: {
    x: {
      ticks: { color: "#cbd5f5" },
      grid: { color: "rgba(255,255,255,0.05)" },
    },
    y: {
      ticks: { color: "#cbd5f5" },
      grid: { color: "rgba(255,255,255,0.05)" },
    },
  },
};
