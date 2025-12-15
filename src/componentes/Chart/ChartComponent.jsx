import { Bar } from "react-chartjs-2";

const ChartComponent = () => {
  const data = {
    labels: ["Lun", "Mar", "Mié", "Jue", "Vie"],
    datasets: [
      {
        label: "Visitas",
        data: [50, 70, 40, 90, 60],
        backgroundColor: "#4F46E5",
      },
    ],
  };

  return <Bar data={data} />;
};

export default ChartComponent;
