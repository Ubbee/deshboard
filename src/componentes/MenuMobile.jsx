import { SECCIONES } from "../constantes/secciones";

function MenuMobile({ seccionActiva, onCambiarSeccion }) {
  return (
    <nav className="menu-mobile">
      <button
        className={seccionActiva === SECCIONES.INICIO ? "activo" : ""}
        onClick={() => onCambiarSeccion(SECCIONES.INICIO)}
      >
        Inicio
      </button>

      <button
        className={seccionActiva === SECCIONES.VENTAS ? "activo" : ""}
        onClick={() => onCambiarSeccion(SECCIONES.VENTAS)}
      >
        Ventas
      </button>

      <button
        className={seccionActiva === SECCIONES.PRODUCTOS ? "activo" : ""}
        onClick={() => onCambiarSeccion(SECCIONES.PRODUCTOS)}
      >
        Productos
      </button>

      <button
        className={seccionActiva === SECCIONES.REPORTES ? "activo" : ""}
        onClick={() => onCambiarSeccion(SECCIONES.REPORTES)}
      >
        Reportes
      </button>
    </nav>
  );
}

export default MenuMobile;
