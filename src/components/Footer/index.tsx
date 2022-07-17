export const Footer = () => {
	return (
		<footer className="flex flex-1 py-4 justify-center">
			<small>&copy; {`${new Date().getFullYear()} foobar.`}</small>
		</footer>
	);
};

export default Footer;
