function BarraSuperior({ seccionActiva }) {
  return (
    <header className="barra-superior">
      <h1>{seccionActiva.toUpperCase()}</h1>
    </header>
  );
}

export default BarraSuperior;
