import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductsByCategory } from "../../API/fetch";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ProductCategoryPage() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getProducts() {
      try {
        setLoading(true);
        const data = await fetchProductsByCategory(categoryName);
        setProducts(data);
      } catch (err) {
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    }

    getProducts();
  }, [categoryName]);

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;
  if (products.length === 0)
    return <div>No products found for {categoryName}.</div>;

  return (
    <motion.div
      className="pt-16 md:pt-56"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-semibold mb-6 capitalize">
        {categoryName.replace("-", " ")}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {products.map((product) => (
          <div key={product.id} className="gap-4 flex flex-col">
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image?.url || "/fallback-image.jpg"}
                alt={product.title}
                className="w-full h-[20rem] md:h-[32rem] object-cover"
              />
            </Link>
            <h2 className="text-lg font-medium mt-2 capitalize">
              {product.title}
            </h2>
            <p className="text-gray-600">{product.price}KR</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default ProductCategoryPage;
