export const requestGetAllCoders = async () => {
	const response = await fetch("http://localhost:/coders");
	const coders = await response.json();
	return coders;
};
