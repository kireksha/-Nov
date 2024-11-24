export const requestGetAllCoders = async () => {
	const response = await fetch("http://localhost:3004/coders");
	const coders = await response.json();
	return coders;
};
