export const requestGetAllCoders = async () => {
	const response = await fetch("http://localhost:5000/coders");
	const coders = await response.json();
	return coders;
};
