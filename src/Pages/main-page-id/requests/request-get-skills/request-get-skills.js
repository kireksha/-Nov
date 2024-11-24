export const requestGetSkills = async (id) => {
	const response = await fetch(`http://localhost:5000/skills/${id}`);
	const coder = await response.json();
	return coder;
};
