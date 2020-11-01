const logger = require("./logger");

const errorHandler = (error, request, response, next) => {
	logger.error(error);
	if (error.status) {
		return response.status(error.status).json({
			message: error.message,
			stack:
				process.env.NODE_ENV === "production"
					? "The app is in production 🤓"
					: error.stack,
		});
	} else {
		return response.status(500).json({
			message: error.message,
			stack:
				process.env.NODE_ENV === "production"
					? "The app is in production 🤓"
					: error.stack,
		});
	}

	next(error);
};

const unknownEndpoint = (request, response) => {
	response.status(404).json({ error: "Unknown Endpoint 🤔" });
};

module.exports = {
	errorHandler,
	unknownEndpoint,
};
