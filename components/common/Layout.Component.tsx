import * as React from "react";

// MUI
import { CssBaseline } from "@material-ui/core";

// Components
import Navbar from "./Navbar.Component";

export interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div>
			<CssBaseline />
			<Navbar />
			{children}
		</div>
	);
};

export default Layout;
