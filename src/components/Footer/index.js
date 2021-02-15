import React from "react";
import "./style.css";

function Footer() {
	return (
		<footer className="footer">
			<span> &copy; Mark Shelgren's Portfolio {new Date().getFullYear()}</span>
		</footer>
	);
}

export default Footer;
