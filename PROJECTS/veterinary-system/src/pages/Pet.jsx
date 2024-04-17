import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchPets } from "../api/pets";
import { PetList } from "./PetList";
import { ROUTES } from "../routes/consts";

const Pet = () => {
  const { id } = useParams();
  const [pet, setPet] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPets()
      .then((response) => {
        const foundPet = response.find((pet) => pet.id === +id);
        setPet(foundPet);
        console.log(foundPet);
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
      {!isLoading && !pet && (
        <div>
          <strong>Pet not found</strong>
        </div>
      )}
      {!isLoading && pet && (
        <div>
          <PetList pets={[pet]} />
        </div>
      )}
    </div>
  );
};

export default Pet;
