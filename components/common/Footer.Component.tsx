import * as React from "react";

// MUI
import {
	withStyles,
	WithStyles,
	createStyles,
	Theme,
} from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

// NPM
import clsx from "clsx";

// Utility
import { generateClassName } from "../../domain/utility/utility";

export const styles = (theme: Theme) =>
	createStyles({
		root: {
			backgroundColor: theme.palette.primary.main,
			padding: theme.spacing(1),
			color: "white",
		},
	});

export interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const Footer = React.forwardRef<
	HTMLDivElement,
	FooterProps & WithStyles<typeof styles>
>(({ className, classes, ...divProps }, ref) => {
	return (
		<div className={clsx(classes.root, className)} {...divProps} ref={ref}>
			<Typography variant="caption" display="block" align="center">
				BTD Tech &copy; 2020
			</Typography>
		</div>
	);
});

const StyledFooter = withStyles(styles, {
	classNamePrefix: generateClassName("Footer"),
})(Footer);

export default StyledFooter;
