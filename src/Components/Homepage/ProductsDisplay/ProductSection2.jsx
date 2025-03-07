import React, { useState, useEffect } from "react";
import { fetchAllProducts } from "../../../API/fetch";
import ConceptButton from "../../Buttons/navigateButton";
import { Link } from "react-router-dom";

const ProductSection2 = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const allProducts = await fetchAllProducts();
      setProducts(allProducts.slice(Math.ceil(allProducts.length / 2)));
    }
    loadProducts();
  }, []);

  return (
    <section className="relative w-full pt-16 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {products.length > 0 && (
          <>
            {/* Left Column - Product Grid */}
            <div className="col-span-full lg:col-span-6 flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                {products.slice(0, 2).map((product) => (
                  <div key={product.id} className="flex flex-col">
                    <Link to={`/product/${product.id}`}>
                      <div className="w-full h-0 pb-[74%] relative overflow-hidden border border-black">
                        <img
                          src={product.image.url}
                          alt={product.image.alt}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="mt-2 text-center md:text-start text-3xl md:text-4xl font-medium uppercase">
                        {product.title}
                      </h4>
                    </Link>
                  </div>
                ))}
              </div>

              {/* Desktop-only Button Below the Grid */}
              <div className="flex-grow"></div>
              <div className="flex justify-start mb-14 hidden lg:flex">
                <ConceptButton href="/products/all-products" />
              </div>
            </div>

            {/* Right Column - Large Main Image */}
            <div className="col-span-full lg:col-span-6">
              <Link to={`/product/${products[0]?.id}`}>
                <div className="relative w-full overflow-hidden border border-black">
                  <img
                    src={products[2]?.image.url}
                    alt={products[2]?.image.alt}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </Link>
              <h3 className="mt-4 text-center md:text-start text-3xl md:text-4xl font-medium uppercase">
                {products[2]?.title}
              </h3>
            </div>
          </>
        )}
      </div>

      {/* Mobile-only Button Below the Entire Grid */}
      <div className="mt-8 flex justify-center lg:hidden">
        <ConceptButton href="/products/all-products" />
      </div>
    </section>
  );
};

export default ProductSection2;
