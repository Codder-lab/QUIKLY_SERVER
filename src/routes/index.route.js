import { authRoutes } from "./auth.route.js";
import { orderRoutes } from "./order.route.js";
import { categoryRoutes, productRoutes } from "./product.route.js";

const prefix = "/api/v1";

export const registerRoutes = async (fastify) => {
  fastify.register(authRoutes, { prefix: prefix });
  fastify.register(productRoutes, { prefix: prefix });
  fastify.register(categoryRoutes, { prefix: prefix });
  fastify.register(orderRoutes, { prefix: prefix });
};
