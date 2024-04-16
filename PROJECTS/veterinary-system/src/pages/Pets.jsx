import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchPets } from "../api/pets";
import { PetList } from "./PetList";
import { ROUTES } from "../routes/consts";

const Pets = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetchPets()
      .then((response) => {
        setPets(response);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <Link to={ROUTES.HOME}>Go back</Link>
      <h1>Pet information</h1>
      <div>
        <PetList pets={pets} />
      </div>
    </div>
  );
};

export default Pets;
