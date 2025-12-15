export const getDashboardStats = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, label: "Usuarios activos", value: 321 },
        { id: 2, label: "Ventas hoy", value: 27 },
        { id: 3, label: "Tickets abiertos", value: 12 },
      ]);
    }, 800);
  });
