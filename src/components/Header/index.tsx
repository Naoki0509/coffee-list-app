import Image from "next/image";
import Link from "next/link";
import logo from "src/public/logo.png";

export const Header = () => {
	return (
		<header className="flex justify-center gap-4 py-6 text-gray-600 bg-gray-200">
			<Link href="/">
				<a>
					<Image src={logo} alt="logo" width={75} height={75} />
				</a>
			</Link>
			<Link href="/">
				<a className="text-4xl text-center">
					<p className="pt-2 m-2">Manga List</p>
				</a>
			</Link>
		</header>
	);
};
