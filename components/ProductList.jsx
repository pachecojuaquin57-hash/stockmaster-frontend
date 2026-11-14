export function ProductList({ productos, onEliminar }) {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
      <thead>
        <tr style={{ backgroundColor: "#e2e8f0", color: "#1e293b" }}>
          <th style={{ padding: "0.75rem" }}>Producto</th>
          <th style={{ padding: "0.75rem" }}>Categoría</th>
          <th style={{ padding: "0.75rem" }}>Stock</th>
          <th style={{ padding: "0.75rem" }}>Precio Unitario</th>
          <th style={{ padding: "0.75rem" }}>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((prod) => (
          <tr key={prod.id} style={{ borderBottom: "1px solid #cbd5e1" }}>
            <td style={{ padding: "0.75rem" }}>{prod.nombre}</td>
            <td style={{ padding: "0.75rem" }}>{prod.categoria}</td>
            <td style={{ padding: "0.75rem", color: prod.cantidad < 5 ? "#dc2626" : "#16a34a", fontWeight: "bold" }}>
              {prod.cantidad} uds {prod.cantidad < 5 && "(Bajo)"}
            </td>
            <td style={{ padding: "0.75rem" }}>${prod.precio.toLocaleString("es-CO")}</td>
            <td style={{ padding: "0.75rem" }}>
              <button onClick={() => onEliminar(prod.id)} style={{ backgroundColor: "#ef4444", color: "white", border: "none", padding: "0.3rem 0.7rem", borderRadius: "4px", cursor: "pointer" }}>
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}