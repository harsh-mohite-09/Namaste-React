export const filterData = (searchTxt, restaurants) => {
  return restaurants.filter((e) =>
    e.data.name.toLowerCase().startsWith(searchTxt.toLowerCase())
  );
};
