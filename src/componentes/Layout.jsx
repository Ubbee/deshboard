import BarraLateral from "./MenuLateral";
import BarraSuperior from "./BarraSuperior";

function LayoutPrincipal({ children, seccionActiva, onCambiarSeccion }) {
  return (
    <div className="layout">
      <BarraLateral
        seccionActiva={seccionActiva}
        onCambiarSeccion={onCambiarSeccion}
      />

      <div className="layout__contenido">
        <BarraSuperior />
        <main className="layout__principal">{children}</main>
      </div>
    </div>
  );
}

export default LayoutPrincipal;
