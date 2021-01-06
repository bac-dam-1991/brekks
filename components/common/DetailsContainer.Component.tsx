import * as React from "react";

// MUI
import {
	withStyles,
	WithStyles,
	createStyles,
	Theme,
} from "@material-ui/core/styles";
import { Grid, GridProps } from "@material-ui/core";

// Utility
import { generateClassName } from "../../domain/utility/utility";

// NPM
import clsx from "clsx";

export const styles = (theme: Theme) =>
	createStyles({
		root: {},
		paper: {
			padding: theme.spacing(2),
			"&:hover": {
				boxShadow: theme.shadows[1],
			},
		},
	});

export interface DetailContainerProps extends GridProps {}

const DetailContainer = React.forwardRef<
	HTMLDivElement,
	DetailContainerProps & WithStyles<typeof styles>
>(({ classes, className, children, ...gridProps }, ref) => {
	return (
		<Grid
			container
			spacing={2}
			{...gridProps}
			className={clsx(classes.root, className)}
			ref={ref}
		>
			{children}
		</Grid>
	);
});

export default withStyles(styles, {
	classNamePrefix: generateClassName("DetailContainer"),
})(DetailContainer);
