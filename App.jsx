import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { LoginForm } from "./components/LoginForm";
import { ProductForm } from "./components/ProductForm";
import { ProductList } from "./components/ProductList";
import { obtenerProductosIniciales } from "./services/productService";

function App() {
  const [usuario, setUsuario] = useState(null);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    obtenerProductosIniciales().then((data) => setProductos(data));
  }, []);

  const agregarProducto = (nuevo) => setProductos([...productos, nuevo]);
  const eliminarProducto = (id) => setProductos(productos.filter((p) => p.id !== id));

  if (!usuario) {
    return <LoginForm onLogin={(nombreUsuario) => setUsuario(nombreUsuario)} />;
  }

  const stockBajo = productos.filter((p) => p.cantidad < 5).length;

  return (
    <div style={{ fontFamily: "sans-serif", minHeight: "100vh", backgroundColor: "#f1f5f9" }}>
      <Navbar usuario={usuario} onLogout={() => setUsuario(null)} />
      
      <main style={{ maxWidth: "1000px", margin: "2rem auto", padding: "1.5rem", backgroundColor: "white", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.05)" }}>
        <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
          <div style={{ flex: 1, padding: "1rem", backgroundColor: "#dbeafe", borderRadius: "6px" }}>
            <strong>Total Productos:</strong> {productos.length}
          </div>
          <div style={{ flex: 1, padding: "1rem", backgroundColor: "#fee2e2", borderRadius: "6px" }}>
            <strong>Alertas Stock Bajo:</strong> {stockBajo}
          </div>
        </div>

        <h3>Registrar Nuevo Producto</h3>
        <ProductForm onAgregarProducto={agregarProducto} />

        <h3>Inventario Actual</h3>
        <ProductList productos={productos} onEliminar={eliminarProducto} />
      </main>
    </div>
  );
}

export default App;