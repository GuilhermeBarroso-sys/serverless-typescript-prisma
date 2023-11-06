import middy from "@middy/core";
import { helloWorld } from "./src/functions/helloWorld";
import { AuthenticationMiddleware } from "./src/middlewares/AuthenticationMiddlewareExample";



export const hello = helloWorld;


/**
 * Middy example
 */
export const helloWithMiddy = middy(hello)
	.use(new AuthenticationMiddleware());
