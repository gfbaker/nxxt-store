import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { usePopupState, bindTrigger, bindMenu} from "material-ui-popup-state/hooks";
import { NavLink } from "react-router-dom";

const MenuPopupState = () => {

	const popupState = usePopupState({ variant: "popover", popupId: "demoMenu" });
    const activeStyle = {
		background: "linear-gradient(45deg, #F8A170, #FFCD61)", borderRadius: "3px",
		color: "#000", fontSize: "24px", width: "100%", textAlign: "center"};

	return (
		<>
			<NavLink 
                    variant="contained" {...bindTrigger(popupState)}
                    >CATEGORIES</NavLink>
			    <Menu {...bindMenu(popupState)}>
				<MenuItem onClick={popupState.close}>
					<NavLink to="/category/digital-art"
                     style={({ isActive }) => isActive ? { ...activeStyle } : undefined }
                    >DIGITAL ART</NavLink>
				</MenuItem>
				<MenuItem onClick={popupState.close}>
					<NavLink to="/category/abstract"
                    style={({ isActive }) => isActive ? { ...activeStyle } : undefined }
                    >ABSTRACT</NavLink>
				</MenuItem>
				<MenuItem onClick={popupState.close}>
					<NavLink to="/category/humanoide"
                     style={({ isActive }) => isActive ? { ...activeStyle } : undefined }
                    >HUMANOID</NavLink>
				</MenuItem>
				<MenuItem onClick={popupState.close}>					
                <NavLink to="/category/landscape"
                    style={({ isActive }) => isActive ? { ...activeStyle } : undefined }
                    >LANDSCAPE</NavLink>
                </MenuItem>
			</Menu>
		</>
	);
};

export default MenuPopupState;
