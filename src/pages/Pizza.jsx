import { useState, useEffect } from "react";
import { formatPrice } from "../utils/formatPrice";
import { useCart } from "../context/CartContext";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("http://localhost:5001/api/pizzas/p001")
      .then((res) => res.json())
      .then((data) => setPizza(data))
      .catch((err) => console.error("Error al cargar la pizza:", err));
  }, []);

  if (!pizza) return <p className="text-center mt-5">Cargando...</p>;

  return (
    <div className="container mt-4" style={{ maxWidth: "900px" }}>
      <div
        style={{
          border: "2px solid #8b9a3a",
          borderRadius: "8px",
          overflow: "hidden",
          backgroundColor: "#fff",
        }}
      >
        <img
          src={pizza.img}
          alt={pizza.name}
          style={{ width: "100%", height: "350px", objectFit: "cover" }}
        />
        <div style={{ padding: "24px" }}>
          <h2 className="fw-bold mb-2">{pizza.name}</h2>
          <p className="text-muted mb-3">{pizza.desc}</p>

          <h5 className="mb-2">Ingredientes:</h5>
          <ul style={{ paddingLeft: "20px", marginBottom: "20px" }}>
            {pizza.ingredients.map((ingredient, index) => (
              <li key={index} style={{ fontSize: "0.95rem", color: "#555" }}>
                🍕 {ingredient}
              </li>
            ))}
          </ul>

          <div className="d-flex align-items-center justify-content-between">
            <h4 className="fw-bold mb-0">Precio: ${formatPrice(pizza.price)}</h4>
            <button
              className="btn btn-dark px-4"
              onClick={() => addToCart({ id: pizza.id, name: pizza.name, price: pizza.price, img: pizza.img })}
            >
              Añadir al carrito 🛒
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
