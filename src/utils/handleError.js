function handleError(promise) {
	return promise
		.then(data => {
			return data;
		})
		.catch(err => {
			console.log(err);
			return null;
		});
}

export default handleError;
