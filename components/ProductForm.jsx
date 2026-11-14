import { useState } from "react";

export function ProductForm({ onAgregarProducto }) {
  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("Periféricos");
  const [cantidad, setCantidad] = useState("");
  const [precio, setPrecio] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !cantidad || !precio) return;

    onAgregarProducto({
      id: Date.now(),
      nombre,
      categoria,
      cantidad: Number(cantidad),
      precio: Number(precio),
    });

    setNombre("");
    setCantidad("");
    setPrecio("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem", padding: "1rem", backgroundColor: "#f8fafc", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
      <input type="text" placeholder="Nombre del producto" value={nombre} onChange={(e) => setNombre(e.target.value)} required style={{ padding: "0.5rem", flex: "2", borderRadius: "4px", border: "1px solid #cbd5e1" }} />
      <select value={categoria} onChange={(e) => setCategoria(e.target.value)} style={{ padding: "0.5rem", flex: "1", borderRadius: "4px", border: "1px solid #cbd5e1" }}>
        <option value="Periféricos">Periféricos</option>
        <option value="Pantallas">Pantallas</option>
        <option value="Almacenamiento">Almacenamiento</option>
        <option value="Accesorios">Accesorios</option>
      </select>
      <input type="number" placeholder="Cantidad" value={cantidad} onChange={(e) => setCantidad(e.target.value)} required min="1" style={{ padding: "0.5rem", width: "100px", borderRadius: "4px", border: "1px solid #cbd5e1" }} />
      <input type="number" placeholder="Precio ($)" value={precio} onChange={(e) => setPrecio(e.target.value)} required min="100" style={{ padding: "0.5rem", width: "130px", borderRadius: "4px", border: "1px solid #cbd5e1" }} />
      <button type="submit" style={{ backgroundColor: "#16a34a", color: "white", border: "none", padding: "0.5rem 1.2rem", borderRadius: "4px", fontWeight: "bold", cursor: "pointer" }}>
        + Agregar
      </button>
    </form>
  );
}