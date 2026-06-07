import { Link } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { total } = useCart();
  const token = false;

  return (
    <nav className="navbar navbar-dark bg-dark px-3 d-flex align-items-center">
      <Link to="/" className="navbar-brand fw-bold mb-0 text-decoration-none">
        Pizzería Mamma Mia!
      </Link>
      <div className="d-flex gap-2">
        <Link to="/" className="btn btn-outline-light btn-sm">🍕 Home</Link>
        {token ? (
          <>
            <Link to="/profile" className="btn btn-outline-light btn-sm">🔓 Profile</Link>
            <button className="btn btn-outline-light btn-sm">🔒 Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-outline-light btn-sm">🔐 Login</Link>
            <Link to="/register" className="btn btn-outline-light btn-sm">🔐 Register</Link>
          </>
        )}
      </div>
      <Link to="/cart" className="btn btn-outline-info btn-sm ms-auto">
        🛒 Total: ${formatPrice(total)}
      </Link>
    </nav>
  );
};

export default Navbar;
