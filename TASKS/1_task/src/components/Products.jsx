import PropTypes from "prop-types";
import Product from "./Product";
import "./Products.css";

const Products = ({ title }) => {
  return (
    <div className="productsContainer">
      <div>
        <h2>{title}</h2>
      </div>
      <div className="productContainer">
        <Product
          category="trail running shoes"
          name="hoka one one match 5"
          price="124.99"
        />
        <Product
          category="trail running shoes"
          name="salomon ultra trail2"
          price="184.99"
        />
        <Product
          category="road running shoes"
          name="nike pegasus 43"
          price="169.99"
        />
      </div>
    </div>
  );
};

Products.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Products;
