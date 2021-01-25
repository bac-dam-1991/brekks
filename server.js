const admin = require("firebase-admin");
const functions = require("firebase-functions");
const express = require("express");
const next = require("next");
const config = require("./next.config");
const axios = require("axios");
const PORT = 8080;

admin.initializeApp();

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev, conf: config });
const requestHandler = app.getRequestHandler();
const expressServer = express();
expressServer.use(express.json());
expressServer.use(express.urlencoded({ extended: true }));

async function init(request, response, dev) {
	await app.prepare();
	expressServer.get("/", (req, res) => app.render(req, res, "/"));
	expressServer.post("/api/verifyRecaptcha", async (req, res) => {
		const { token } = req.body;

		const params = new URLSearchParams();
		params.append("secret", "");
		params.append("response", token);

		const response = await axios({
			method: "POST",
			url: "https://www.google.com/recaptcha/api/siteverify",
			params: params,
		});
		console.log(response.data);
		res.json(response.data);
	});
	expressServer.get("*", (req, res) => requestHandler(req, res));

	if (dev) {
		expressServer.listen(PORT, (error) => {
			if (error) throw error;
			console.log(`Listening on port ${PORT}...`);
		});
	} else {
		expressServer(request, response);
	}

	return app;
}

const server = functions.https.onRequest(async (request, response) => {
	return await init(request, response, dev);
});

if (dev) {
	init(null, null, dev);
}

exports.handler = { server };
