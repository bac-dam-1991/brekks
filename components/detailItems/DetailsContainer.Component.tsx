import * as React from "react";

// MUI
import {
	withStyles,
	WithStyles,
	createStyles,
	Theme,
} from "@material-ui/core/styles";
import { Grid, GridProps, Typography } from "@material-ui/core";

// Utility
import { generateClassName } from "../../domain/utility/utility";

// NPM
import clsx from "clsx";

export const styles = (theme: Theme) =>
	createStyles({
		root: {},
	});

export interface DetailContainerProps extends GridProps {
	title: string;
}

const DetailContainer = React.forwardRef<
	HTMLDivElement,
	DetailContainerProps & WithStyles<typeof styles>
>(({ classes, className, children, title, ...gridProps }, ref) => {
	return (
		<Grid
			container
			spacing={2}
			{...gridProps}
			className={clsx(classes.root, className)}
			ref={ref}
		>
			<Grid item xs={12}>
				<Typography variant="h5" color="secondary">
					{title}
				</Typography>
			</Grid>
			{children}
		</Grid>
	);
});

export default withStyles(styles, {
	classNamePrefix: generateClassName("DetailContainer"),
})(DetailContainer);
