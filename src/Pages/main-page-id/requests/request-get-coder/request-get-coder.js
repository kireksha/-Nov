export const requestGetCoder = async (id) => {
	const response = await fetch(`http://localhost:5000/coders/${id}`);
	const coder = await response.json();
	return coder;
};
