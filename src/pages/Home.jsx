import { useState, useEffect } from "react";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/pizzas")
      .then((res) => res.json())
      .then((data) => setPizzas(data))
      .catch((err) => console.error("Error al cargar pizzas:", err));
  }, []);

  return (
    <div>
      <Header />
      <div style={{ border: "2px solid #8b9a3a", margin: "20px", padding: "20px", backgroundColor: "#fff" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px" }}>
          {pizzas.map((pizza) => (
            <CardPizza
              key={pizza.id}
              id={pizza.id}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
