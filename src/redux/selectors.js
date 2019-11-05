import { createSelector } from "reselect";

export const selectAllProducts = state => state.productsApp.products;

export const selectHomeAndKitchen = createSelector(
  selectAllProducts,
  allProducts => allProducts.filter(product => product.bsr_category === "Home & Kitchen")
);

export const selectSportsAndOutdoors = createSelector(
  selectAllProducts,
  allProducts => allProducts.filter(product => product.bsr_category === "Sports & Outdoors")
);
