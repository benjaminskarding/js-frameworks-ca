import React, { useState, useEffect } from "react";
import { fetchAllProducts } from "../../../API/fetch";
import { Link } from "react-router-dom";
import NavigateButton from "../../Buttons/navigateButton";

const ProductSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const allProducts = await fetchAllProducts();
      setProducts(allProducts.slice(0, Math.ceil(allProducts.length / 2)));
    }
    loadProducts();
  }, []);

  return (
    <section className="relative w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {products.length > 0 && (
          <>
            {/* Large Main Image (Left Side) */}
            <div className="col-span-full lg:col-span-6">
              <Link to={`/product/${products[0]?.id}`}>
                <div className="relative w-full overflow-hidden border border-black">
                  <img
                    src={products[0]?.image.url}
                    alt={products[0]?.image.alt}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </Link>
              <h3 className="mt-4 text-center md:text-start text-2xl md:text-4xl font-medium uppercase">
                {products[0]?.title}
              </h3>
            </div>

            {/* Right Column - Product Grid with Button at the Bottom */}
            <div className="col-span-full lg:col-span-6 flex flex-col h-full">
              <div className="grid grid-cols-2 gap-4">
                {products.slice(1, 3).map((product) => (
                  <div key={product.id} className="flex flex-col">
                    <Link to={`/product/${product.id}`}>
                      <div className="w-full h-0 pb-[74%] relative overflow-hidden border border-black">
                        <img
                          src={product.image.url}
                          alt={product.image.alt}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="mt-2 text-center md:text-start text-2xl md:text-4xl font-medium uppercase">
                        {product.title}
                      </h4>
                    </Link>
                  </div>
                ))}
              </div>
              {/*  Push Button to the Bottom */}
              <div className="flex-grow"></div>{" "}
              {/* Spacer to push button down */}
              <div className="flex justify-center lg:justify-end mb-14 mt-8 pt-12 md:pt-0 ">
                <NavigateButton href="/products/all-products" />
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ProductSection;
