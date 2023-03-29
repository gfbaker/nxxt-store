import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

function ResponsiveAppBar() {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [isScrolling, setIsScrolling] = React.useState(false);

	const activeStyle = {
		color: "#c58b7d",
		boxShadow: "0px 0px 2px 2px #c55d56",
	};

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

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBar
			position="fixed"
			sx={{
				backgroundColor: isScrolling ? "rgba(0, 0, 0, 0.8)" : "transparent",
				opacity: isScrolling ? 0.9 : 1,
			}}>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
							display: { xs: "none", md: "flex" },
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}>
						<img src="./logo-icon.png" alt="Logo" border="0" />
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit">
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}></Menu>
					</Box>
					<Typography
						variant="h5"
						noWrap
						component="a"
						href=""
						sx={{
							display: { xs: "flex", md: "none" },
							flexGrow: 1,
						}}>
						<img src="./logo-icon.png" alt="Logo" border="0" />
					</Typography>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "none", md: "flex" },
							justifyContent: "flex-end",
							alignItems: "center",
						}}>
						<NavLink
							to="/"
							style={({ isActive }) =>
								isActive ? { ...activeStyle  } : undefined
							}
							sx={{
								my: 2,
								color: "white",
								display: "block",
								textDecoration: "underline",
							}}>
							HOME
						</NavLink>
						<NavLink
							to="/collection"
							style={({ isActive }) =>
								isActive ? { ...activeStyle } : undefined
							}
							sx={{
								mx: 2,
								color: "white",
								fontSize: "18px",
								fontWeight: "bold",
								textDecoration: "none",
							}}>
							COLLECTION
						</NavLink>
						<NavLink
							to="/category/jewelery"
							style={({ isActive }) =>
								isActive ? { ...activeStyle } : undefined
							}>
							JEWELERY
						</NavLink>
						<NavLink
							to="/category/electronics"
							style={({ isActive }) =>
								isActive ? { ...activeStyle } : undefined
							}>
							ELECTRONICS
						</NavLink>
						<NavLink
							to="/category/men's clothing"
							style={({ isActive }) =>
								isActive ? { ...activeStyle } : undefined
							}>
							MEN CLOTHING
						</NavLink>
						<NavLink
							to="/category/women's clothing"
							style={({ isActive }) =>
								isActive ? { ...activeStyle } : undefined
							}>
							WOMEN CLOTHING
						</NavLink>
						<CartWidget />
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default ResponsiveAppBar;
