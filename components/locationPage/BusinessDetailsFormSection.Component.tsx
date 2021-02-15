import * as React from "react";

// MUI
import {
	withStyles,
	WithStyles,
	createStyles,
	Theme,
} from "@material-ui/core/styles";
import {
	Grid,
	Paper,
	PaperProps,
	Typography,
	TextField,
} from "@material-ui/core";

// NPM
import clsx from "clsx";

// Utility
import { generateClassName } from "../../domain/utility/utility";

export const styles = (theme: Theme) =>
	createStyles({
		root: {
			marginTop: theme.spacing(5),
			padding: theme.spacing(2),
			"&:hover": {
				boxShadow: theme.shadows[2],
			},
		},
	});

export interface BusinessDetailsFormProps extends PaperProps {}

const BusinessDetailsForm = React.forwardRef<
	HTMLDivElement,
	BusinessDetailsFormProps & WithStyles<typeof styles>
>(({ classes, className, ...paperProps }, ref) => {
	// States

	return (
		<Paper
			square
			className={clsx(classes.root, className)}
			{...paperProps}
			elevation={0}
			ref={ref}
		>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Typography variant="h6" color="secondary">
						<strong>Location details</strong>
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<TextField
						variant="outlined"
						color="secondary"
						label="Location name"
						fullWidth
					/>
				</Grid>
			</Grid>
		</Paper>
	);
});

export default withStyles(styles, {
	classNamePrefix: generateClassName("BusinessDetailsForm"),
})(BusinessDetailsForm);
