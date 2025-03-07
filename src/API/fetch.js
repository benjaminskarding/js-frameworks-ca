const productCache = new Map(); // Global cache for fetched products

export async function fetchAllProducts(limit = 100) {
  if (productCache.size > 0) {
    return Array.from(productCache.values());
  }

  try {
    const response = await fetch(
      `https://v2.api.noroff.dev/online-shop?limit=${limit}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const jsonData = await response.json();

    // Cache fetched products for future use
    jsonData.data.forEach((product) => {
      productCache.set(product.id, product);
    });

    return jsonData.data || [];
  } catch (err) {
    console.error("Error fetching products:", err);
    return [];
  }
}

export async function fetchProductById(id) {
  // Check if product is already cached
  if (productCache.has(id)) {
    return productCache.get(id);
  }

  try {
    const response = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const jsonData = await response.json();

    // Cache the product
    productCache.set(id, jsonData.data);

    return jsonData.data;
  } catch (err) {
    console.error("Error fetching product:", err);
    return null;
  }
}

// Fetch products by category. Tags are not great for finding category, so we scour the description for certain words

const CATEGORY_KEYWORDS = {
  fragrances: ["perfume", "fragrance", "scent", "cologne"],
  toys: ["toy", "game"],
  headsets: ["headset", "headphones", "earphones"],
  harddrives: ["hard drive", "ssd", "storage", "hdd"],
  bags: ["bag", "backpack", "tote", "purse"],
  hairdryers: ["hairdryer", "blow dryer", "styling"],
  oils: ["serum", "oil", "moisturizer"],
  shoes: ["shoes", "sneakers", "boots", "sandals"],
  speakers: ["speaker", "audio", "bluetooth"],
  sunglasses: ["sunglasses", "shades", "eyewear"],
  watches: ["watch", "timepiece", "wristwatch"],
  earrings: ["earrings", "jewelry", "accessories"],
  keyboards: ["keyboard", "mechanical", "typing"],
  mice: ["mouse", "gaming mouse"],
  chargers: ["charger", "type-c", "power adapter"],
};

// Receives categoryName from the const in ProductCategoryPage function sheet
export async function fetchProductsByCategory(categoryName) {
  const formattedCategory = categoryName.toLowerCase().replace("-", " ");

  if (formattedCategory === "all products") {
    return await fetchAllProducts();
  }

  // Ensure the category exists in keyword list
  const keywords = CATEGORY_KEYWORDS[formattedCategory];
  if (!keywords) {
    console.warn(`⚠️ No keywords defined for category: ${formattedCategory}`);
    return [];
  }

  try {
    const allProducts = await fetchAllProducts();

    // Filter products based on keywords in description
    const filteredProducts = allProducts.filter((product) => {
      if (!product.description) return false; // Skip if no description

      const lowerCaseDesc = product.description.toLowerCase();
      return keywords.some((keyword) => lowerCaseDesc.includes(keyword));
    });

    return filteredProducts; // Return only matching products
  } catch (error) {
    console.error(
      `Error fetching products for category: ${categoryName}`,
      error
    );
    return [];
  }
}
