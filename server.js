const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

const config = require("./utils/config");
const middleware = require("./utils/middleware");
const logger = require("./utils/logger");

const author = require("./controllers/authorApiRouter");

logger.info("Connecting to", process.env.MONGO_URI);
mongoose
	.connect(config.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then((res) => logger.info("Successfully connected to MongoDB Atlas"))
	.catch((e) => logger.info("Something bad happened", e));

app.use(morgan("common"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/authors", author);

app.use(middleware.errorHandler);
app.use(middleware.unknownEndpoint);

const PORT = config.PORT || 5000;
app.listen(PORT, () => {
	console.log(`App listening on http://localhost:${PORT}/`);
});
