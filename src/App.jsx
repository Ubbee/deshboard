import { useState } from "react";
import LayoutPrincipal from "./componentes/Layout";
import Inicio from "./pages/Inicio";
import Ventas from "./pages/Ventas";
import Productos from "./pages/Productos";
import Reportes from "./pages/Reportes";

function App() {
  const [seccionActiva, setSeccionActiva] = useState("inicio");

  const renderizarSeccion = () => {
    switch (seccionActiva) {
      case "inicio":
        return <Inicio />;
      case "ventas":
        return <Ventas />;
      case "productos":
        return <Productos />;
      case "reportes":
        return <Reportes />;
      default:
        return <Inicio />;
    }
  };

  return (
    <LayoutPrincipal
      seccionActiva={seccionActiva}
      onCambiarSeccion={setSeccionActiva}
    >
      {renderizarSeccion()}
    </LayoutPrincipal>
  );
}

export default App;
