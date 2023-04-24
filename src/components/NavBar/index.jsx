import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
import MenuPopupState from "./Menu";

function ResponsiveAppBar() {
	const [isScrolling, setIsScrolling] = React.useState(false);

	const activeStyle = { background: "linear-gradient(45deg, #F8A170, #FFCD61)",
		color: "#000", borderRadius: "3px" };

	const handleScroll = () => {
		const scrollTop = window.pageYOffset;
		setIsScrolling(scrollTop > 0);
	};

	React.useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<AppBar
			position="fixed"
			sx={{ backgroundColor: isScrolling ? "rgba(0, 0, 0, 0.8)" : "transparent", 	color: "white", transition: "background-color 0.2s, color 0.2s",
				"& a": { color: "inherit", textDecoration: "none", transition: "color 0.2s", "&:hover": { color: "#d6d6d6",
					}}}}>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Typography	variant="h6" noWrap component="a" href="/">
						<img src="./logo-icon.png" alt="Logo" border="0" width={"210px"}/>
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "flex-end",
							alignItems: "center" }}>
						<NavLink to="/" style={({ isActive }) => isActive ? { ...activeStyle } : undefined }
							sx={{	my: 2, color: "#f2f2f2", 	display: "block", textDecoration: "underline" }}>
							HOME
						</NavLink>
						<MenuPopupState/>
						<NavLink to="/cart" style={({ isActive }) => isActive ? { ...activeStyle } : undefined }>
							<CartWidget />
						</NavLink>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default ResponsiveAppBar;
