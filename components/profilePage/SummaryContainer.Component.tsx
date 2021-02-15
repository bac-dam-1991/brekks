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

// Components
import ProfileSummary from "./ProfileSummary.Component";
import OrganisationSummary from "./OrganisationSummary.Component";

export const styles = (theme: Theme) =>
	createStyles({
		root: { margin: theme.spacing(5, 0) },
		paper: {
			padding: theme.spacing(2),
			"&:hover": {
				boxShadow: theme.shadows[1],
			},
		},
	});

export interface SummaryContainerProps extends GridProps {}

const SummaryContainer = React.forwardRef<
	HTMLDivElement,
	SummaryContainerProps & WithStyles<typeof styles>
>(({ classes, className, ...gridProps }, ref) => {
	return (
		<Grid
			container
			spacing={2}
			className={clsx(classes.root, className)}
			{...gridProps}
		>
			<ProfileSummary />
			<OrganisationSummary />
		</Grid>
	);
});

export default withStyles(styles, {
	classNamePrefix: generateClassName("SummaryContainer"),
})(SummaryContainer);
