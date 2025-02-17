import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "@/context/ThemeContext";
import { GiUbisoftSun } from "react-icons/gi";
import { GiMoon } from "react-icons/gi";

export default function Navbar() {
	const router = useRouter();
	const [searchTerm, setSearchTerm] = useState("");
	const { theme, toggleTheme } = useTheme(); // Access theme context
	const [hoveredItem, setHoveredItem] = useState(null);

	const items = [
		{ id: 1, name: "Trending", link: "/trending" },
		{ id: 2, name: "Movies", link: "/movies" },
		{ id: 3, name: "TV Shows", link: "/tv" },
		{ id: 4, name: "Genres", link: "/genres" },
		{ id: 5, name: "About", link: "/about" }
	];

	return (
		<div className={`font ${theme === "dark" ? "dark-theme" : "light-theme"}`}>
			<nav
				className="navbar navbar-expand-lg bg-body-tertiary font-regular"
				data-bs-theme={theme === "dark" ? "dark" : "light"}
			>
				<div className="container-fluid">
					<Link
						className="navbar-brand"
						style={{ fontSize: "23px", color: "orange" }}
						href="http://localhost:3000"
					>
						IMDb
					</Link>

					<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							{items.map((obj) => (
								<li
									key={obj.id}
									className="nav-item"
									style={{ cursor: "pointer" }}
									// Update hover state based on the item's ID
									onMouseEnter={() => setHoveredItem(obj.id)}
									onMouseLeave={() => setHoveredItem(null)}
								>
									<a
										className="nav-link active"
										aria-current="page"
										href={obj.link}
										style={{
											color: hoveredItem === obj.id ? "orange" : "lightgray",
										}}
									>
										{obj.name}
									</a>
								</li>
							))}
						</ul>
						
						<button
							className={`btn ${theme === "dark" ? "btn-light" : "btn-dark"}`}
							onClick={toggleTheme}
						>
							{theme === "light" ? (
								<GiMoon size={"30px"} />
							) : (
								<GiUbisoftSun size={"30px"} />
							)}
						</button>
					</div>
				</div>
			</nav>
		</div>
	);
}
