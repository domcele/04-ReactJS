export const fetchProducts = async () => {
  const response = await fetch(
    "https://sophisticated-humane-dandelion.glitch.me"
  );
  return response.json();
};

export const postProduct = async (productData) => {
  try {
    const response = await fetch(
      `https://sophisticated-humane-dandelion.glitch.me`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add any other headers your API requires
        },
        body: JSON.stringify(productData), // Send productData in the request body
      }
    );
    if (!response.ok) {
      throw new Error("Failed to post product");
    }
    return response.json();
  } catch (error) {
    console.error("Error posting product:", error);
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await fetch(
      `https://sophisticated-humane-dandelion.glitch.me/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          // Add any other headers your API requires
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to delete product");
    }
    return response.json();
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};
