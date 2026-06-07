const Header = () => {
  return (
    <div
      className="text-white text-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1400')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "280px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.55)",
        backgroundBlendMode: "darken",
      }}
    >
      <h1 className="fw-bold mb-2" style={{ fontSize: "2.5rem", textShadow: "1px 1px 4px rgba(0,0,0,0.8)" }}>
        ¡Pizzería Mamma Mia!
      </h1>
      <p className="mb-0" style={{ fontSize: "1rem", textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}>
        ¡Tenemos las mejores pizzas que podrás encontrar!
      </p>
    </div>
  );
};

export default Header;
