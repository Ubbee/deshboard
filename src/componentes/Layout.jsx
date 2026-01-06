import BarraLateral from "./MenuLateral";
import BarraSuperior from "./BarraSuperior";
import MenuMobile from "./MenuMobile";

function LayoutPrincipal({ children, seccionActiva, onCambiarSeccion }) {
  return (
    <div className="layout">
      <BarraLateral
        seccionActiva={seccionActiva}
        onCambiarSeccion={onCambiarSeccion}
      />

      <div className="layout__contenido">
        <BarraSuperior seccionActiva={seccionActiva} />
        <main className="layout_principal">{children}</main>
      </div>

      <MenuMobile
        seccionActiva={seccionActiva}
        onCambiarSeccion={onCambiarSeccion}
      />
    </div>
  );
}

export default LayoutPrincipal;
