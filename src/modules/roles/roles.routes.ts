import { FastifyInstance } from "fastify";
import { CreateRoleBody, createRoleJsonSchema } from "./roles.schemas";
import { createRoleHandler } from "./roles.controllers";

export async function roleRoutes(app: FastifyInstance) {
  app.post<{
    Body: CreateRoleBody;
  }>(
    "/",
    {
      schema: createRoleJsonSchema,
    },
    createRoleHandler
  );
}
