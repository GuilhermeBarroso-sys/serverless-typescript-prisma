interface ApiGatewayParameters {
	headers?: unknown | null
	body?: unknown,
	statusCode?: number
}

class ApiGateway {
	static response({body = undefined, statusCode = 200, headers = null} : ApiGatewayParameters) {
		return {
			headers,
			body: body ? JSON.stringify(body, (key, value) =>
				typeof value === "bigint"
					? value.toString()
					: value 
			) : "",
			statusCode
		};
	}
}

export {ApiGateway};