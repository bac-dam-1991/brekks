import * as React from "react";

// MUI
import { CssBaseline } from "@material-ui/core";

// Components
import Navbar from "./Navbar.Component";

// Contexts
import NavigationManager from "../../contexts/NavigationManager.Context";
import StyledFooter from "./Footer.Component";

export interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div>
			<CssBaseline />
			<NavigationManager>
				<Navbar />
			</NavigationManager>
			{children}
			<StyledFooter />
		</div>
	);
};

export default Layout;
