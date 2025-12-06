function BarraLateral({ seccionActiva, onCambiarSeccion }) {
  return (
    <aside className="menu-lateral">
      <h2 className="menu-lateral__logo">Dashboard</h2>

      <nav className="menu-lateral__nav">
        <button onClick={() => onCambiarSeccion("inicio")}>Inicio</button>
      </nav>
    </aside>
  );
}

export default BarraLateral;
