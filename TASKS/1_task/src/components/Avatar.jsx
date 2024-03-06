import PropTypes from "prop-types";
import "./Avatar.css";

const Avatar = ({ name, color }) => {
  // Function to extract first letters
  const extractFirstLetters = (name) => {
    // Split the string into an array of words
    let words = name.split(" ");

    // Map over the array and extract the first character of each word
    let firstLetters = words.map((word) => word.charAt(0));

    // Join the first letters back into a string
    let result = firstLetters.join("");

    return result;
  };

  // Call the function to get the first letters
  const firstLetters = extractFirstLetters(name);

  return (
    <div>
      <p
        style={{ backgroundColor: firstLetters.charAt(0) }}
        className="pCircle"
      >
        {firstLetters}
      </p>
    </div>
  );
};

Avatar.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
};

export default Avatar;
