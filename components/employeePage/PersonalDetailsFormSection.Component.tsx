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
	GridProps,
	TextField,
	ThemeProvider,
	Typography,
} from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { ParsableDate } from "@material-ui/pickers/constants/prop-types";

// NPM
import clsx from "clsx";
import moment from "moment";

// Utility
import { generateClassName } from "../../domain/utility/utility";

// Theme
import { invertedTheme } from "../../domain/common/theme";

// Components
import GenericSelect from "../common/GenericSelect.Component";

// Classes
import Person from "../../domain/common/classes/Person";

export const styles = (theme: Theme) =>
	createStyles({
		root: {},
	});

export interface PersonalDetailsFormSectionProps extends GridProps {}

const PersonalDetailsFormSection = React.forwardRef<
	HTMLDivElement,
	PersonalDetailsFormSectionProps & WithStyles<typeof styles>
>(({ classes, className, ...gridProps }, ref) => {
	// States
	const [dob, setDob] = React.useState<ParsableDate>(moment().toDate());
	const [gender, setGender] = React.useState<string>("");

	// Handlers
	const handleDobChange = (date: moment.Moment) => {
		setDob(date.toDate());
	};

	const handleGenderChange = (
		event: React.ChangeEvent<{ value: unknown }>
	) => {
		setGender(event.target.value as string);
	};

	return (
		<Grid
			container
			spacing={2}
			{...gridProps}
			ref={ref}
			className={clsx(className, classes.root)}
		>
			<Grid item xs={12}>
				<Typography variant="h6" color="secondary">
					<strong>Personal details</strong>
				</Typography>
			</Grid>
			<Grid item xs={12} sm={4}>
				<TextField
					focused
					variant="outlined"
					color="secondary"
					label="Given name"
					fullWidth
				/>
			</Grid>
			<Grid item xs={12} sm={4}>
				<TextField
					variant="outlined"
					color="secondary"
					label="Middle name"
					fullWidth
				/>
			</Grid>
			<Grid item xs={12} sm={4}>
				<TextField
					variant="outlined"
					color="secondary"
					label="Family name"
					fullWidth
				/>
			</Grid>
			<Grid item xs={12} sm={4}>
				<ThemeProvider theme={invertedTheme}>
					<KeyboardDatePicker
						inputVariant="outlined"
						format="DD/MM/YYYY"
						fullWidth
						disableFuture
						value={dob}
						onChange={handleDobChange}
						views={["year", "month", "date"]}
						openTo={"year"}
					/>
				</ThemeProvider>
			</Grid>
			<Grid item xs={12} sm={4}>
				<GenericSelect
					selectLabel="Gender"
					value={gender}
					onValueChange={handleGenderChange}
					valuesList={Person.getSelectableGenders()}
				/>
			</Grid>
		</Grid>
	);
});

export default withStyles(styles, {
	classNamePrefix: generateClassName("PersonalDetailsFormSection"),
})(PersonalDetailsFormSection);
