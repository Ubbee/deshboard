import { Link } from "react-router-dom";

const Sidebar = () => (
  <nav className="sidebar">
    <ul>
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li><Link to="/users">Usuarios</Link></li>
      <li><Link to="/settings">Ajustes</Link></li>
    </ul>
  </nav>
);

export default Sidebar;
