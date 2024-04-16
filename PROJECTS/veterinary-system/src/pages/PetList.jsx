import PropTypes from "prop-types";
import { Link, generatePath } from "react-router-dom";
import { ROUTES } from "../routes/consts";

const PetList = ({ pets }) => {
  return (
    <ul>
      {pets.map((pet) => (
        <li key={pet.id}>
          <Link to={generatePath(ROUTES.PET, { id: pet.id })}>
            {pet.name} {pet.id}
          </Link>
        </li>
      ))}
    </ul>
  );
};

PetList.propTypes = {
  pets: PropTypes.array,
};

export default PetList;
