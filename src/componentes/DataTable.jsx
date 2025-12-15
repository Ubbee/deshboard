const DataTable = ({ rows }) => {
  return (
    <table>
      <thead>
        <tr>
          {Object.keys(rows[0]).map((key) => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id}>
            {Object.values(row).map((val, i) => (
              <td key={i}>{val}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
