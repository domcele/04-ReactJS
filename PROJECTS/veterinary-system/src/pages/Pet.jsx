import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchPets } from "../api/pets";
import { ROUTES } from "../routes/consts";

const Pet = () => {
  const { id } = useParams();
  const { pet, setPets } = useState(null);

  useEffect(() => {
    fetchPets()
      .then((response) => {
        const foundPet = response.fin((pet) => pet.id === +id);
        setPets(foundPet);
      })
      .catch((error) => console.error(error));
  });

  return (
    <div>
      <Link to={ROUTES.HOME}>Go back</Link>
      <h1>Pet information</h1>
      <div>
        {pet.name} {pet.id}
      </div>
    </div>
  );
};

export default Pet;
