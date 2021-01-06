import * as React from "react";

// MUI
import {
	withStyles,
	WithStyles,
	createStyles,
	Theme,
} from "@material-ui/core/styles";
import { Grid, Paper, GridProps, Typography } from "@material-ui/core";

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

export interface OrganisationSummaryProps extends GridProps {}

const OrganisationSummary = React.forwardRef<
	HTMLDivElement,
	OrganisationSummaryProps & WithStyles<typeof styles>
>(({ classes, className, ...gridProps }, ref) => {
	return (
		<Grid
			item
			xs={12}
			md={8}
			{...gridProps}
			className={clsx(classes.root, className)}
		>
			<Paper elevation={0} className={classes.paper} square>
				<Typography variant="h5" color="secondary">
					Overview
				</Typography>
			</Paper>
		</Grid>
	);
});

export default withStyles(styles, {
	classNamePrefix: generateClassName("OrganisationSummary"),
})(OrganisationSummary);
