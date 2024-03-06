import PropTypes from "prop-types";
import StarRating from "./StarRating";

const Product = ({ category, name, price }) => {
  return (
    <div className="product">
      <p>{category}</p>
      <p>{name}</p>
      <StarRating totalStars={5} />
      <p>{price}</p>
    </div>
  );
};

Product.propTypes = {
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Product;
