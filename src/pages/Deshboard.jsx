import { useFetch } from "../hooks/useFetch";
import { getDashboardStats } from "../services/api";

const Dashboard = () => {
  const { data: stats, loading } = useFetch(getDashboardStats);

  if (loading) return <p>Cargando...</p>;

  return (
    <div className="dashboard">
      {stats.map((item) => (
        <div key={item.id} className="stat-card">
          <h3>{item.label}</h3>
          <p>{item.value}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
