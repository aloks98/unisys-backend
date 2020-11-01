const authorApiRouter = require("express").Router();

authorApiRouter.get("/", (request, response) => {
	response.json({
		authors: "Alok Kumar Sahoo 😉, Rajarshee Basu 😋, Abhipsa Mohapatra 🤭",
		message: "The API Works! 🎊",
	});
});

module.exports = authorApiRouter;
