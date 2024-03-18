import { useEffect, useState } from "react";
import { fetchProducts, postProduct, deleteProduct } from "../../api/index";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts()
      .then((response) => setProducts(response))
      .catch((error) => console.error(error));
  }, []);

  const handlePost = (event) => {
    event.preventDefault(); // Prevent form submission
    const formData = new FormData(event.target); // Create FormData object from form
    const productData = {
      id: formData.get("id"),
      image: formData.get("image"),
      title: formData.get("title"),
      price: formData.get("price"),
    };

    // Call postProduct API function with the productData to post the new product
    postProduct(productData)
      .then((response) => {
        // Add the posted product to the products state
        setProducts([...products, response]);
        // Clear the form fields
        event.target.reset();
      })
      .catch((error) => console.error(error));
  };

  const handleDelete = (productId) => {
    // Call deleteProduct API function with the productId to delete the product
    deleteProduct(productId)
      .then(() => {
        // Remove the deleted product from the products state
        setProducts(products.filter((product) => product.id !== productId));
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <ol>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <p>{product.title}</p>
            <p>{product.price}</p>
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </li>
        ))}
      </ol>
      <div>
        <ol>
          <li>
            <form onSubmit={handlePost}>
              <input name="id" type="number" placeholder="id" />
              <input name="image" type="text" placeholder="image url" />
              <input name="title" type="text" placeholder="product title" />
              <input name="price" type="text" placeholder="product price" />
              <button type="submit">Submit</button>
            </form>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Products;
