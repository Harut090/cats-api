const getImages = async (categoryId, page) => {
  const response = await fetch(
    `https://api.thecatapi.com/v1/images/search?limit=10&page=${page}&category_ids=${categoryId}`
  );
  return response.json();
};

// const diferent_categories="https://api.thecatapi.com/v1/categories "

const getCategories = async () => {
  const response = await fetch("https://api.thecatapi.com/v1/categories");
  return response.json();
};
export { getImages, getCategories };
