import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center mt-5">
      <h1 style={{ fontSize: "6rem", fontWeight: "bold", color: "#8b9a3a" }}>404</h1>
      <h2 className="mb-3">¡Página no encontrada!</h2>
      <p className="text-muted mb-4">La ruta que buscas no existe.</p>
      <Link to="/" className="btn btn-dark px-4">
        🍕 Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
