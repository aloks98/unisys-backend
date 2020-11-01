const error = (...params) => {
	console.error(...params);
};

const warn = (...params) => {
	console.warn(...params);
};

const info = (...params) => {
	console.log(...params);
};

module.exports = {
	error,
	warn,
	info,
};
