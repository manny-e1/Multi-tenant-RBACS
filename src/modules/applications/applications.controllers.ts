import {  FastifyRequest } from "fastify";
import { CreateApplicationBody } from "./applications.schemas";
import { createApplication } from "./applications.services";


export async function createApplicationHandler(
  request: FastifyRequest<{
    Body: CreateApplicationBody;
  }>,
) {
  const { name } = request.body;

  const application = await createApplication({
    name,
  });
 
  return application
  
}


