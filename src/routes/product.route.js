import { getAllCategories } from "../controllers/product/category.controller.js";
import { getProductByCategoryId } from "../controllers/product/product.controller.js";

export const categoryRoutes = async (fastify, options) => {
  fastify.get("/categories", getAllCategories);
};

export const productRoutes = async (fastify, options) => {
  fastify.get("/products/:categoryId", getProductByCategoryId);
};
