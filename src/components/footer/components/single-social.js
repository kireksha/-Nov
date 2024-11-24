export const SingleSocial = ({ children, href, alt }) => {
	return (
		<li>
			<a rel="noreferrer" target="_blank" href={href} alt={alt}>
				{children}
			</a>
		</li>
	);
};
