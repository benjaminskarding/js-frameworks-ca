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

export function findCategoryForProduct(product) {
  if (!product.description) return "Uncategorized";

  const desc = product.description.toLowerCase();
  // Look for the first category whose keywords appear in desc
  for (const [cat, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
    if (keywords.some((keyword) => desc.includes(keyword))) {
      return cat; // Return the first matching category
    }
  }
  return "Uncategorized";
}
