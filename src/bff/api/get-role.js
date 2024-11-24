import { transformRole } from '../transformers';

export const getRole = (coderId) =>
	fetch(`http://localhost:5000/role/${coderId}`)
		.then((loadedRole) => loadedRole.json())
		.then((loadedRole) => transformRole(loadedRole));
