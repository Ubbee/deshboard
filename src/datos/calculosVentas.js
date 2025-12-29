export function calcularTotalVentas(ventas) {
  return ventas.reduce(
    (acumulador, venta) => acumulador + venta.total,
    0
  );
}
