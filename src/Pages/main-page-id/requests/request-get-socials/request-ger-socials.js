export const requestGetSocials = async (id) => {
	const response = await fetch(`http://localhost:5000/socials/${id}`);
	const coder = await response.json();
	return coder;
};
