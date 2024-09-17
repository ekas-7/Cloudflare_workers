export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
	  console.log(request.headers);
	  console.log(request.method);
  
	  if (request.method === "GET") {
		// Return response for GET request
		return new Response(
		  JSON.stringify({
			message: "You sent a GET request",
		  }),
		  {
			headers: { "Content-Type": "application/json" },
		  }
		);
	  } else if (request.method === "POST") {
		// Parse the body for POST request
		const requestBody = await request.json();
		return new Response(
		  JSON.stringify({
			message: "You sent a POST request",
			body: requestBody,
		  }),
		  {
			headers: { "Content-Type": "application/json" },
		  }
		);
	  }
  
	  // Handle other methods if needed
	  return new Response(
		JSON.stringify({
		  message: "Unsupported request method",
		}),
		{
		  headers: { "Content-Type": "application/json" },
		  status: 405, // Method Not Allowed
		}
	  );
	},
  } satisfies ExportedHandler<Env>;
  