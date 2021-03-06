import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Nav.module.css";

function MyLink(props) {
	let { href, children, ...rest } = props;
	return (
		<Link href={href}>
			<a {...rest}>{children}</a>
		</Link>
	);
}

function Nav() {
	const router = useRouter();

	var activated = styles.active;

	return (
		<nav
			className="absolute w-full h-5 left-0 top-0 z-10 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl flex px-3 pb-0 py-3 justify-evenly select-none"
			id="startPage">
			<MyLink href="/">
				<h1
					className={
						router.pathname == "/"
							? "active px-[10px] py-[10px] link"
							: "px-[10px] py-[10px] link"
					}>
					Home
				</h1>
			</MyLink>
			<MyLink href="/what-we-do">
				<h1
					className={
						router.pathname == "/what-we-do"
							? "active px-[10px] py-[10px] link"
							: "px-[10px] py-[10px] link"
					}>
					What We Do
				</h1>
			</MyLink>
			<MyLink href="meet-the-team">
				<h1
					className={
						router.pathname == "/meet-the-team"
							? "active px-[10px] py-[10px] link"
							: "px-[10px] py-[10px] link"
					}>
					Meet The Team
				</h1>
			</MyLink>
			<MyLink href="merchandise">
				<h1
					className={
						router.pathname == "/merchandise"
							? "active px-[10px] py-[10px] link"
							: "px-[10px] py-[10px] link"
					}>
					Merchandise
				</h1>
			</MyLink>
			<MyLink href="contact-us">
				<h1
					className={
						router.pathname == "/contact-us"
							? "active px-[10px] py-[10px] link"
							: "px-[10px] py-[10px] link"
					}>
					Contact Us
				</h1>
			</MyLink>
		</nav>
	);
}

export default Nav;
