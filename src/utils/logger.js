function logger(type) {
	return function (message) {
		console.log(`[${type}] ${message}`);
	};
}

export default logger;
