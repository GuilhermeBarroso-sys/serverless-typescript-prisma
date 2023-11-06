import {randomUUID} from "node:crypto";
import { handlerError } from "../errors/handlerError";
import { ApiGateway } from "../lib/ApiGateway";
import { prisma } from "../prisma";
import { EventLambda } from "../@types";
import { z } from "zod";
import { BadRequestError } from "../errors/BadRequestError";
export const helloWorld = async (event : EventLambda ) => {
	// zod example
	// const schema = z.object({
	// 	test: z.string().optional()
	// });
	// const validation = schema.safeParse(event.queryStringParameters);
	// if(!validation.success) {
	// 	throw new BadRequestError("Check the params");
	// } 
	try {
		await prisma.user.create({
			data: {
				email: randomUUID()
			}
		});
		return ApiGateway.response({
			body: {
				message: "Hello world!"
			}
		});
	} catch(err) {
		return handlerError(err);
	}
  
};