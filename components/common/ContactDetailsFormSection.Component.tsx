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
import GenericSelect from "./GenericSelect.Component";

// Classes
import Person from "../../domain/common/classes/Person";

//Type
import ContactDetailsType from "../../domain/common/types/ContactDetailsType";

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

export interface ContactDetailsFormSectionProps extends PaperProps {
	type: ContactDetailsType;
}

const ContactDetailsFormSection = React.forwardRef<
	HTMLDivElement,
	ContactDetailsFormSectionProps & WithStyles<typeof styles>
>(({ classes, className, type, ...paperProps }, ref) => {
	// States
	const [
		preferredContactMethod,
		setPreferredContactMethod,
	] = React.useState<string>("");

	// Handlers
	const handlePreferredContactMethodChange = (
		event: React.ChangeEvent<{ value: unknown }>
	) => {
		setPreferredContactMethod(event.target.value as string);
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
						<strong>Contact details</strong>
					</Typography>
				</Grid>
				{type === "Personal" && (
					<React.Fragment>
						<Grid item xs={12} sm={4}>
							<TextField
								variant="outlined"
								color="secondary"
								label="Mobile"
								fullWidth
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<TextField
								variant="outlined"
								color="secondary"
								label="Home"
								fullWidth
							/>
						</Grid>
					</React.Fragment>
				)}

				{type === "Business" && (
					<Grid item xs={12} sm={4}>
						<TextField
							variant="outlined"
							color="secondary"
							label="Business"
							fullWidth
						/>
					</Grid>
				)}

				<Grid item xs={12} sm={4}>
					<TextField
						variant="outlined"
						color="secondary"
						label="Fax"
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} sm={4}>
					<TextField
						variant="outlined"
						color="secondary"
						label="Email"
						fullWidth
					/>
				</Grid>
				{type === "Personal" && (
					<Grid item xs={12} sm={4}>
						<GenericSelect
							selectLabel="Preferred contact method"
							value={preferredContactMethod}
							onValueChange={handlePreferredContactMethodChange}
							valuesList={Person.getSelectablePreferredContactMethods()}
						/>
					</Grid>
				)}
			</Grid>
		</Paper>
	);
});

export default withStyles(styles, {
	classNamePrefix: generateClassName("ContactDetailsFormSection"),
})(ContactDetailsFormSection);
