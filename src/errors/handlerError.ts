import { ApiGateway } from "../lib/ApiGateway";
import { CustomError } from "./CustomError";

export function handlerError(err : any, headers?: any) {

	if(err instanceof CustomError) {
		console.log("lol");
		return ApiGateway.response({
			body: err.serializeErrors(),
			statusCode: err.statusCode,
			headers
		});
	} 

	console.log("error log => ", err);
	return ApiGateway.response({
		body: [
			{
				message: err.message
			}
		],
		statusCode: 500,
		headers
	});
  
  
}