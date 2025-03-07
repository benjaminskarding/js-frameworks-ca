import { fetchAllProducts } from "../API/fetch";

const productMatchCache = new Map(); // Caching matches

export async function findMatchingProduct(category) {
  if (!category || typeof category !== "object" || !category.apiName) {
    console.warn("⚠️ Invalid category object received:", category);
    return null;
  }

  if (productMatchCache.has(category.apiName)) {
    return productMatchCache.get(category.apiName);
  }

  const products = await fetchAllProducts();

  const keyword = category.apiName.toLowerCase(); // use apiName directly
  if (!keyword) {
    console.warn(`⚠️ No valid search keyword found for ${category.name}`);
    return null;
  }

  const matchedProduct = products.find((product) => {
    if (!product.description) return false;
    return product.description.toLowerCase().includes(keyword);
  });

  if (matchedProduct) {
    productMatchCache.set(category.apiName, matchedProduct);
  } else {
    console.warn(`❌ No match found for ${category.name}`);
  }

  return matchedProduct || null;
}
