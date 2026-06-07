import { formatPrice } from "../utils/formatPrice";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, increase, decrease, total } = useCart();

  return (
    <div className="container mt-4" style={{ maxWidth: "600px" }}>
      <div style={{ border: "2px solid #8b9a3a", borderRadius: "8px", padding: "24px", backgroundColor: "#fff" }}>
        <h5 className="mb-4">Detalles del pedido:</h5>

        {cart.length === 0 && (
          <p className="text-muted text-center">No hay productos en el carrito.</p>
        )}

        {cart.map((item) => (
          <div
            key={item.id}
            className="d-flex align-items-center mb-3"
            style={{ gap: "16px" }}
          >
            <img
              src={item.img}
              alt={item.name}
              style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "4px" }}
            />
            <span style={{ flex: 1, fontWeight: "500" }}>{item.name}</span>
            <span style={{ minWidth: "70px" }}>${formatPrice(item.price)}</span>
            <div className="d-flex align-items-center" style={{ gap: "8px" }}>
              <button
                onClick={() => decrease(item.id)}
                style={{
                  width: "28px", height: "28px", border: "1px solid #ccc",
                  background: "#fff", borderRadius: "4px", cursor: "pointer",
                }}
              >
                -
              </button>
              <span style={{ minWidth: "20px", textAlign: "center" }}>{item.quantity}</span>
              <button
                onClick={() => increase(item.id)}
                style={{
                  width: "28px", height: "28px", border: "1px solid #ccc",
                  background: "#fff", borderRadius: "4px", cursor: "pointer",
                }}
              >
                +
              </button>
            </div>
          </div>
        ))}

        <hr />
        <h5 className="mt-3">Total: ${formatPrice(total)}</h5>
        <button
          className="btn btn-primary mt-2"
          onClick={() => {}}
        >
          Pagar
        </button>
      </div>
    </div>
  );
};

export default Cart;
