import * as React from "react";

// Next
import Link from "next/link";

import {
	AppBar,
	AppBarProps,
	Button,
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
import {
	filterByAttributeOf,
	generateClassName,
	sortByAttributeOf,
} from "../../domain/utility/utility";

// Icons
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";

// NPM
import clsx from "clsx";

// Components
import RoundedButton from "./RoundedButton.Component";
import SideDrawer from "./SideDrawer.Component";

// Context
import { useNavigation } from "../../contexts/NavigationManager.Context";
import navigations from "../../domain/config/navigations";
import INavigation from "../../domain/common/interfaces/INavigation";

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
		navigation: {
			"&.MuiButton-root": {
				marginLeft: theme.spacing(1),
			},
		},
	});

const Navbar = React.forwardRef<
	HTMLDivElement,
	NavbarProps & WithStyles<typeof styles>
>(({ classes, className }, ref) => {
	// Contexts
	const { handleSideDrawerOpenChange } = useNavigation();

	return (
		<React.Fragment>
			<AppBar
				ref={ref}
				className={clsx(classes.root, className)}
				color="secondary"
			>
				<Toolbar variant="dense">
					<Link href="/">
						<Typography variant="h6" className={classes.logo}>
							<strong>brekks</strong>
						</Typography>
					</Link>
					<div className={classes.linksContainer}>
						{navigations
							.filter((item: INavigation) =>
								filterByAttributeOf(item, "inNavbar", true)
							)
							.sort((a: INavigation, b: INavigation) =>
								sortByAttributeOf(a, b, "type")
							)
							.map((item: INavigation) => (
								<Link href={item.link} key={item.displayText}>
									{item.type === "cta" ? (
										<RoundedButton
											text={item.displayText}
											variant="contained"
											color="primary"
											className={classes.navigation}
										/>
									) : (
										<Button
											color="inherit"
											className={classes.navigation}
										>
											{item.displayText}
										</Button>
									)}
								</Link>
							))}
					</div>
					<IconButton
						color="inherit"
						onClick={() => handleSideDrawerOpenChange(true)}
					>
						<MenuRoundedIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
			<Toolbar variant="dense" />
			<SideDrawer />
		</React.Fragment>
	);
});

export default withStyles(styles, {
	classNamePrefix: generateClassName("Navbar"),
})(Navbar);
