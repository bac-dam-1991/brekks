import * as React from "react";

// MUI
import {
	withStyles,
	WithStyles,
	createStyles,
	Theme,
} from "@material-ui/core/styles";
import { Button, Grid, Paper, PaperProps, TextField } from "@material-ui/core";

// NPM
import clsx from "clsx";

// Utility
import { generateClassName } from "../../domain/utility/utility";

// Component
import StyledLoadingButton from "../common/LoadingButton.Component";

// Next
import { useRouter } from "next/router";

export const styles = (theme: Theme) =>
	createStyles({
		root: {
			marginTop: theme.spacing(5),
			padding: theme.spacing(2),
			"&:hover": {
				boxShadow: theme.shadows[2],
			},
		},
		buttonContainer: {
			display: "flex",
			flexDirection: "row-reverse",
		},
		addButton: {
			marginLeft: theme.spacing(1),
		},
	});

export interface RoleDetailsFormSectionProps extends PaperProps {}

const RoleDetailsFormSection = React.forwardRef<
	HTMLDivElement,
	RoleDetailsFormSectionProps & WithStyles<typeof styles>
>(({ classes, className, ...paperProps }, ref) => {
	// States
	const [loading, setLoading] = React.useState<boolean>(false);

	// Router
	const router = useRouter();

	// Handler
	const handleAddRole = () => {
		setLoading(true);
	};

	const handleCancel = () => {
		router.push("/role");
	};

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
					<TextField
						label="Role name"
						variant="outlined"
						color="secondary"
						fullWidth
					/>
				</Grid>
				<Grid item xs={12}>
					<div className={classes.buttonContainer}>
						<StyledLoadingButton
							text="Create role"
							loading={loading}
							fullWidth={false}
							onClick={handleAddRole}
							square
							className={classes.addButton}
						/>
						<Button onClick={handleCancel}>Cancel</Button>
					</div>
				</Grid>
			</Grid>
		</Paper>
	);
});

export default withStyles(styles, {
	classNamePrefix: generateClassName("RoleDetailsFormSection"),
})(RoleDetailsFormSection);
