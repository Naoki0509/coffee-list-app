export const Footer = () => {
	return (
		<div>
			<footer className="flex flex-1 py-4 justify-center">
				<small>&copy; {`${new Date().getFullYear()} foobar.`}</small>
			</footer>
		</div>
	);
};

export default Footer;
