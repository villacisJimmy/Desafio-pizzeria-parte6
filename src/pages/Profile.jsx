const Profile = () => {
  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <div style={{ border: "2px solid #8b9a3a", borderRadius: "8px", padding: "32px", backgroundColor: "#fff" }}>
        <h2 className="fw-bold mb-4">Mi Perfil</h2>
        <p className="mb-1 text-muted">Email:</p>
        <p className="fw-bold mb-4">usuario@mammamia.com</p>
        <button className="btn btn-dark px-4">
          🔒 Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default Profile;
