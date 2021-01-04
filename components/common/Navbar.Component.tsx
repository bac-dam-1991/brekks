import * as React from "react";

// Next
import Link from "next/link";

import {
	AppBar,
	AppBarProps,
	IconButton,
	Toolbar,
	Typography,
} from "@material-ui/core";
import {
	WithStyles,
	withStyles,
	createStyles,
	Theme,
} from "@material-ui/core/styles";

// Utility
import { generateClassName } from "../../domain/utility/utility";

// Icons
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";

// NPM
import clsx from "clsx";

// Components
import RoundedButton from "./RoundedButton.Component";

export interface NavbarProps extends AppBarProps {}

export const styles = (theme: Theme) =>
	createStyles({
		root: {},
		linksContainer: {
			flexGrow: 1,
			margin: theme.spacing(0, 1),
			display: "flex",
			flexDirection: "row-reverse",
		},
		logo: {
			cursor: "pointer",
		},
	});

const Navbar = React.forwardRef<
	HTMLDivElement,
	NavbarProps & WithStyles<typeof styles>
>(({ classes, className }, ref) => {
	return (
		<React.Fragment>
			<AppBar
				ref={ref}
				className={clsx(classes.root, className)}
				color="primary"
			>
				<Toolbar variant="dense">
					<Link href="/">
						<Typography variant="h6" className={classes.logo}>
							<strong>brekks</strong>
						</Typography>
					</Link>
					<div className={classes.linksContainer}>
						<Link href="/signup">
							<RoundedButton
								text="Sign up"
								variant="contained"
								color="secondary"
							/>
						</Link>
					</div>
					<IconButton color="inherit">
						<MenuRoundedIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
			<Toolbar variant="dense" />
		</React.Fragment>
	);
});

export default withStyles(styles, {
	classNamePrefix: generateClassName("Navbar"),
})(Navbar);
