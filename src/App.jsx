import { useState } from "react";
import LayoutPrincipal from "./componentes/Layout";
import Inicio from "./pages/Inicio";

function App() {
  const [seccionActiva, setSeccionActiva] = useState("inicio");

  return (
    <LayoutPrincipal seccionActiva={seccionActiva} onCambiarSeccion={setSeccionActiva}>
      <Inicio />
    </LayoutPrincipal>
  );
}

export default App;
