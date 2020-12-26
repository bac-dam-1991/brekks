import * as React from "react";

// MUI
import { CssBaseline } from "@material-ui/core";

export interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div>
			<CssBaseline />
			{children}
		</div>
	);
};

export default Layout;
