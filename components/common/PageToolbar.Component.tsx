import * as React from "react";

// Next
import Link from "next/link";

// MUI
import {
	withStyles,
	WithStyles,
	createStyles,
	Theme,
} from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

// Icons
import KeyboardReturnRoundedIcon from "@material-ui/icons/KeyboardReturnRounded";

// Utility
import { generateClassName } from "../../domain/utility/utility";

// Components
import SectionComponent from "./Section.Component";

export const styles = (theme: Theme) =>
	createStyles({
		root: {},
		container: {
			display: "flex",
			flexDirection: "row",
		},
		toolbarContainer: {
			display: "flex",
			flexGrow: 1,
			flexDirection: "row-reverse",
		},
	});

export interface PageToolbarProps {}

const PageToolbar = React.forwardRef<
	HTMLDivElement,
	PageToolbarProps & WithStyles<typeof styles>
>(({ classes, children }, ref) => {
	return (
		<SectionComponent ref={ref} className={classes.root}>
			<div className={classes.container}>
				<Link href="/profile">
					<Button startIcon={<KeyboardReturnRoundedIcon />}>
						Profile
					</Button>
				</Link>
				<div className={classes.toolbarContainer}>{children}</div>
			</div>
		</SectionComponent>
	);
});

export default withStyles(styles, {
	classNamePrefix: generateClassName("PageToolbar"),
})(PageToolbar);
