import PropTypes from "prop-types";
import { Link, generatePath } from "react-router-dom";
import { ROUTES } from "../routes/consts";

export const PetList = ({ pets, handleEditPet }) => {
  return (
    <ul>
      {pets.map((pet) => (
        <li key={pet.id}>
          <Link to={generatePath(ROUTES.PETS, { id: pet.id })}>
            {pet.id} {pet.name}
          </Link>
          <button
            onClick={() => handleEditPet(pet.id)}
            style={{ marginLeft: 16 }}
          >
            Edit
          </button>
        </li>
      ))}
    </ul>
  );
};

PetList.propTypes = {
  pets: PropTypes.array,
  handleEditPet: PropTypes.func,
};
