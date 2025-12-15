function MenuLateral({ seccionActiva, onCambiarSeccion }) {
  const opciones = [
    { id: "inicio", label: "Inicio" },
    { id: "ventas", label: "Ventas" },
    { id: "productos", label: "Productos" },
    { id: "reportes", label: "Reportes" },
  ];

  return (
    <aside className="menu-lateral">
      <h2 className="menu-lateral__titulo">Dashboard</h2>

      <nav className="menu-lateral__nav">
        {opciones.map(({ id, label }) => (
          <button
            key={id}
            className={`item-menu ${
              seccionActiva === id ? "item-menu--activo" : ""
            }`}
            onClick={() => onCambiarSeccion(id)}
          >
            {label}
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default MenuLateral;
