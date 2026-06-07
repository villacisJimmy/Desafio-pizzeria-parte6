import { Link } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice";
import { useCart } from "../context/CartContext";

const CardPizza = ({ id, name, price, ingredients, img }) => {
  const { addToCart } = useCart();

  return (
    <div
      style={{
        backgroundColor: "#fff",
        border: "1px solid #dee2e6",
        borderRadius: "8px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
      }}
    >
      <img
        src={img}
        alt={name}
        style={{ width: "100%", height: "220px", objectFit: "cover" }}
      />
      <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
        <h5 style={{ fontWeight: "bold", fontSize: "1.1rem", margin: 0 }}>Pizza {name}</h5>
        <hr style={{ margin: "4px 0" }} />
        <p style={{ textAlign: "center", color: "#888", fontStyle: "italic", fontSize: "0.85rem", margin: 0 }}>
          Ingredientes:
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, textAlign: "center" }}>
          {ingredients.map((ingredient, index) => (
            <li key={index} style={{ fontSize: "0.85rem", color: "#555" }}>
              🍕 {ingredient}
            </li>
          ))}
        </ul>
        <hr style={{ margin: "4px 0" }} />
        <p style={{ textAlign: "center", fontWeight: "bold", fontSize: "1rem", margin: 0 }}>
          Precio: ${formatPrice(price)}
        </p>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "8px" }}>
          <Link
            to={`/pizza/${id}`}
            style={{
              padding: "6px 14px",
              border: "1px solid #ccc",
              background: "#fff",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "0.85rem",
              textDecoration: "none",
              color: "#212529",
            }}
          >
            Ver Más »
          </Link>
          <button
            onClick={() => addToCart({ id, name, price, img })}
            style={{
              padding: "6px 14px",
              border: "none",
              background: "#212529",
              color: "#fff",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "0.85rem",
            }}
          >
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
