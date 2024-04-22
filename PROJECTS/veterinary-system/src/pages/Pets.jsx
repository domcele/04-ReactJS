import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchPets } from "../api/pets";
import { PetList } from "./PetList";
import { ROUTES } from "../routes/consts";

const Pets = () => {
  const { id } = useParams();
  const [pets, setPets] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPets()
      .then((response) => {
        const foundPets = response.find((pet) => pet.id === +id);
        setPets(foundPets);
        console.log(foundPets);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  return (
    <div>
      <Link to={ROUTES.HOME}>Go back</Link>
      <h2>Pet information</h2>
      {isLoading && <div>Loading...</div>}
      {!isLoading && !pets && (
        <div>
          <strong>Pet not found</strong>
        </div>
      )}
      {!isLoading && pets && (
        <div>
          <PetList pets={[pets]} />
        </div>
      )}
    </div>
  );
};

export default Pets;
