import { useState } from "react";

export function LoginForm({ onLogin }) {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!correo.includes("@") || password.length < 4) {
      setError("Ingresa un correo válido y una contraseña de mínimo 4 caracteres.");
      return;
    }
    setError("");
    onLogin(correo.split("@")[0]);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "5rem auto", padding: "2rem", border: "1px solid #cbd5e1", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)", fontFamily: "sans-serif" }}>
      <h2 style={{ textAlign: "center", color: "#1e293b" }}>📦 StockMaster - Acceso</h2>
      <p style={{ textAlign: "center", color: "#64748b", fontSize: "0.9rem" }}>Ingresa tus credenciales para gestionar el inventario</p>
      
      {error && <p style={{ color: "#ef4444", fontSize: "0.85rem", backgroundColor: "#fee2e2", padding: "0.5rem", borderRadius: "4px" }}>{error}</p>}

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div>
          <label style={{ display: "block", marginBottom: "0.3rem", fontWeight: "bold" }}>Correo Electrónico:</label>
          <input
            type="email"
            placeholder="admin@stockmaster.com"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            style={{ width: "100%", padding: "0.6rem", borderRadius: "4px", border: "1px solid #94a3b8", boxSizing: "border-box" }}
            required
          />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "0.3rem", fontWeight: "bold" }}>Contraseña:</label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: "0.6rem", borderRadius: "4px", border: "1px solid #94a3b8", boxSizing: "border-box" }}
            required
          />
        </div>
        <button type="submit" style={{ backgroundColor: "#2563eb", color: "white", padding: "0.75rem", border: "none", borderRadius: "5px", fontWeight: "bold", cursor: "pointer" }}>
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}