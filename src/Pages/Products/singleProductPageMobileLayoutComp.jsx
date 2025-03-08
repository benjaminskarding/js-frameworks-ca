import React from "react";
import SubmitButton from "../../Components/Buttons/submitButton";
import DecorativeCornersSmall from "../../Utilities/decorativeCornersSmall";

const MobileProductLayout = ({ product, handleAddToCart, reviews }) => {
  return (
    <div className="flex flex-col items-center p-4 mt-6 md:mt-0">
      <div className="flex justify-center items-center">
        <img
          src={product.image?.url || "/fallback-image.jpg"}
          alt={product.title}
          className="w-auto max-h-[45rem] border border-black shadow-lg"
        />
      </div>
      {/* Title Rectangle */}
      <div className="relative flex justify-center items-center w-full border border-black p-4 mt-12">
        <p className="text-xl font-semibold uppercase">{product.title}</p>
        <DecorativeCornersSmall />
      </div>

      {/* Description Rectangle */}
      <div className="border border-t-0 border-black p-8 w-full mt-0">
        <p className="text-base text-center">{product.description}</p>
      </div>

      {/* Price Rectangle */}
      <div className="flex justify-end w-full mt-0">
        <div className="flex justify-center items-center w-full border border-black border-t-0 p-4">
          <p className="text-lg font-semibold text-center">{product.price}KR</p>
        </div>
      </div>

      {/* Add to Cart Button */}
      <div className="mt-0 w-full">
        <SubmitButton
          className="border-t-0 w-full"
          text="ADD TO CART"
          onClick={handleAddToCart}
        />
      </div>
      {/* Reviews Section */}
      {reviews && reviews.length > 0 && (
        <div className="mt-8 border-t border-black pt-4 w-full">
          <h3 className="text-lg font-semibold text-center mb-2">
            Customer Reviews
          </h3>
          <ul className="space-y-3 text-center">
            {reviews.map((review) => (
              <li
                key={review.id}
                className="border border-gray-300 p-3 rounded-md"
              >
                <p className="font-semibold">{review.username}</p>
                <div className="text-yellow-500">
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </div>
                <p className="mt-1">{review.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileProductLayout;
