import * as React from "react";

// MUI
import {
	Drawer,
	IconButton,
	Divider,
	List,
	ListItem,
	ListItemText,
} from "@material-ui/core";
import {
	withStyles,
	WithStyles,
	createStyles,
	Theme,
} from "@material-ui/core/styles";

// Next
import Link from "next/link";

// Icons
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

// Utility
import { byAttributeOf, generateClassName } from "../../domain/utility/utility";

// NPM
import clsx from "clsx";

// COntexts
import { useNavigation } from "../../contexts/NavigationManager.Context";
import INavigation from "../../domain/common/interfaces/INavigation";
import navigations from "../../domain/config/navigations";

const drawerWidth: number = 400;

export const styles = (theme: Theme) =>
	createStyles({
		root: { width: drawerWidth, flexShrink: 0 },
		drawerPaper: { width: drawerWidth },
		drawerHeader: { display: "flex" },
		listItem: {
			"&.MuiButtonBase-root": {
				padding: theme.spacing(1, 2),
			},
		},
	});

export interface SideDrawerProps extends React.HTMLAttributes<HTMLDivElement> {}

const SideDrawer = React.forwardRef<
	HTMLDivElement,
	SideDrawerProps & WithStyles<typeof styles>
>(({ classes, className, ...divProps }, ref) => {
	const { handleSideDrawerOpenChange, sideDrawerOpen } = useNavigation();

	return (
		<Drawer
			className={clsx(classes.root, className)}
			{...divProps}
			ref={ref}
			classes={{ paper: classes.drawerPaper }}
			variant="persistent"
			anchor="right"
			open={sideDrawerOpen}
		>
			<div className={classes.drawerHeader}>
				<IconButton onClick={() => handleSideDrawerOpenChange(false)}>
					<CloseRoundedIcon />
				</IconButton>
			</div>
			<Divider />
			<List>
				{navigations
					.filter((item: INavigation) =>
						byAttributeOf<INavigation>(item, "inDrawer", true)
					)
					.map((item: INavigation) => (
						<Link href={item.link} key={item.displayText}>
							<ListItem button className={classes.listItem}>
								<ListItemText primary={item.displayText} />
							</ListItem>
						</Link>
					))}
			</List>
		</Drawer>
	);
});

export default withStyles(styles, {
	classNamePrefix: generateClassName("SideDrawer"),
})(SideDrawer);
