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
	TextField,
	Typography,
} from "@material-ui/core";

// NPM
import clsx from "clsx";

// Utility
import { generateClassName } from "../../domain/utility/utility";

// Components
import GenericSelect from "../common/GenericSelect.Component";

// Classes
import Person from "../../domain/common/classes/Person";

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

export interface AddressDetailsFormSectionProps extends PaperProps {}

const AddressDetailsFormSection = React.forwardRef<
	HTMLDivElement,
	AddressDetailsFormSectionProps & WithStyles<typeof styles>
>(({ classes, className, ...paperProps }, ref) => {
	// States
	const [state, setState] = React.useState<string>("");

	// Handlers
	const handleStateChange = (
		event: React.ChangeEvent<{ value: unknown }>
	) => {
		setState(event.target.value as string);
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
					<Typography variant="h6" color="secondary">
						<strong>Address details</strong>
					</Typography>
				</Grid>
				<Grid item xs={12} sm={4}>
					<TextField
						variant="outlined"
						color="secondary"
						label="Building number"
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} sm={4}>
					<TextField
						variant="outlined"
						color="secondary"
						label="Street number"
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} sm={4}>
					<TextField
						variant="outlined"
						color="secondary"
						label="Street name"
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} sm={4}>
					<TextField
						variant="outlined"
						color="secondary"
						label="Suburb"
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} sm={4}>
					<TextField
						variant="outlined"
						color="secondary"
						label="Postcode"
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} sm={4}>
					<GenericSelect
						selectLabel="State"
						value={state}
						onValueChange={handleStateChange}
						valuesList={Person.getSelectableStates()}
					/>
				</Grid>
				<Grid item xs={12} sm={4}>
					<TextField
						variant="outlined"
						color="secondary"
						label="Country"
						fullWidth
					/>
				</Grid>
			</Grid>
		</Paper>
	);
});

export default withStyles(styles, {
	classNamePrefix: generateClassName("AddressDetailsFormSection"),
})(AddressDetailsFormSection);
