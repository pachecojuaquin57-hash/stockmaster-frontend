export function Navbar({ usuario, onLogout }) {
  return (
    <nav style={{ backgroundColor: "#1e293b", color: "white", padding: "1rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <h2 style={{ margin: 0 }}>📦 StockMaster</h2>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <span>Hola, <strong>{usuario}</strong></span>
        <button onClick={onLogout} style={{ backgroundColor: "#ef4444", color: "white", border: "none", padding: "0.5rem 1rem", borderRadius: "5px", cursor: "pointer" }}>
          Cerrar Sesión
        </button>
      </div>
    </nav>
  );
}