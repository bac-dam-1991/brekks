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
	ThemeProvider,
	Typography,
	Button,
} from "@material-ui/core";
import { ParsableDate } from "@material-ui/pickers/constants/prop-types";
import { KeyboardDatePicker } from "@material-ui/pickers";

// NPM
import clsx from "clsx";
import moment from "moment";

// Utility
import { generateClassName } from "../../domain/utility/utility";

// Components
import GenericSelect from "../common/GenericSelect.Component";
import StyledLoadingButton from "../common/LoadingButton.Component";

// Classes
import Employee from "../../domain/common/classes/Employee";

// Theme
import { invertedTheme } from "../../domain/common/theme";

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

export interface ContactDetailsFormSectionProps extends PaperProps {}

const ContactDetailsFormSection = React.forwardRef<
	HTMLDivElement,
	ContactDetailsFormSectionProps & WithStyles<typeof styles>
>(({ classes, className, ...paperProps }, ref) => {
	// States
	const [jobRole, setJobRole] = React.useState<string>("");
	const [employmentType, setEmploymentType] = React.useState<string>("");
	const [startDate, setStartDate] = React.useState<ParsableDate>(
		moment().toDate()
	);

	// Handlers
	const handleJobRoleChange = (
		event: React.ChangeEvent<{ value: unknown }>
	) => {
		setJobRole(event.target.value as string);
	};

	const handleEmploymentTypeChange = (
		event: React.ChangeEvent<{ value: unknown }>
	) => {
		setEmploymentType(event.target.value as string);
	};

	const handleStartDateChange = (date: moment.Moment) => {
		setStartDate(date.toDate());
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
						<strong>Employment details</strong>
					</Typography>
				</Grid>
				<Grid item xs={12} sm={4}>
					<GenericSelect
						value={jobRole}
						onValueChange={handleJobRoleChange}
						valuesList={[]}
						selectLabel="Job role"
					/>
				</Grid>
				<Grid item xs={12} sm={4}>
					<GenericSelect
						value={employmentType}
						onValueChange={handleEmploymentTypeChange}
						valuesList={Employee.getEmploymentTypes()}
						selectLabel="Employment type"
					/>
				</Grid>
				<Grid item xs={12} sm={4}>
					<ThemeProvider theme={invertedTheme}>
						<KeyboardDatePicker
							inputVariant="outlined"
							format="YYYY/MM/DD"
							fullWidth
							value={startDate}
							onChange={handleStartDateChange}
							views={["year", "month", "date"]}
							openTo={"year"}
							label="Start date"
						/>
					</ThemeProvider>
				</Grid>
			</Grid>
		</Paper>
	);
});

export default withStyles(styles, {
	classNamePrefix: generateClassName("ContactDetailsFormSection"),
})(ContactDetailsFormSection);
