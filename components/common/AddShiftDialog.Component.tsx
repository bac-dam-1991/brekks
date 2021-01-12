import * as React from "react";

// MUI
import {
	withStyles,
	WithStyles,
	createStyles,
	Theme,
	useTheme,
} from "@material-ui/core/styles";
import {
	Dialog,
	DialogProps,
	DialogTitle,
	DialogActions,
	DialogContent,
	Grid,
	Typography,
	Button,
	useMediaQuery,
	ThemeProvider,
} from "@material-ui/core";

// NPM
import clsx from "clsx";
import moment from "moment";

// Components
import GenericSelect from "./GenericSelect.Component";
import StyledLoadingButton from "./LoadingButton.Component";

// Utility
import { generateClassName } from "../../domain/utility/utility";
import { invertedTheme } from "../../domain/common/theme";
import { KeyboardDatePicker, KeyboardTimePicker } from "@material-ui/pickers";
import { ParsableDate } from "@material-ui/pickers/constants/prop-types";

export const styles = (theme: Theme) =>
	createStyles({
		root: {},
		dialogContent: {
			width: 500,
			[theme.breakpoints.down("sm")]: {
				width: "100%",
			},
		},
	});

export interface AddShiftDialogProps extends DialogProps {
	onDialogClose: () => void;
}

const AddShiftDialog = React.forwardRef<
	HTMLDivElement,
	AddShiftDialogProps & WithStyles<typeof styles>
>(({ classes, className, onDialogClose, ...dialogProps }, ref) => {
	// States
	const [employeeId, setEmployeeId] = React.useState<string>("");
	const [loading, setLoading] = React.useState<boolean>(false);
	const [startTime, setStartTime] = React.useState<ParsableDate>(
		moment().toDate()
	);
	const [endTime, setEndTime] = React.useState<ParsableDate>(
		moment().add(3, "hours").toDate()
	);

	// Theme
	const theme = useTheme();
	const matchSm = useMediaQuery(theme.breakpoints.down("sm"));

	// Handlers
	const handleEmployeeChange = (
		event: React.ChangeEvent<{ value: unknown }>
	) => {
		setEmployeeId(event.target.value as string);
	};

	const handleStartTimeChange = (date: moment.Moment) => {
		setStartTime(date.toDate());
	};

	const handleEndTimeChange = (date: moment.Moment) => {
		setEndTime(date.toDate());
	};

	const handleAddShift = () => {
		setLoading(true);
	};

	return (
		<Dialog
			ref={ref}
			className={clsx(className, classes.root)}
			{...dialogProps}
			fullScreen={matchSm}
			onClose={onDialogClose}
		>
			<DialogTitle>
				<Typography variant="h6">Add shift</Typography>
			</DialogTitle>
			<DialogContent dividers>
				<ThemeProvider theme={invertedTheme}>
					<Grid
						container
						spacing={2}
						className={classes.dialogContent}
					>
						<Grid item xs={12}>
							<GenericSelect
								value={employeeId}
								onValueChange={handleEmployeeChange}
								valuesList={[]}
								selectLabel="Select employee"
								fullWidth
								color="primary"
							/>
						</Grid>
						<Grid item xs={12}>
							<KeyboardDatePicker
								format="DD/MM/YYYY"
								value={startTime}
								onChange={handleStartTimeChange}
								label="Start date"
								fullWidth
								inputVariant="outlined"
								autoOk
							/>
						</Grid>
						<Grid item xs={12}>
							<KeyboardTimePicker
								value={startTime}
								onChange={handleStartTimeChange}
								label="Start time"
								fullWidth
								inputVariant="outlined"
								autoOk
							/>
						</Grid>
						<Grid item xs={12}>
							<KeyboardDatePicker
								format="DD/MM/YYYY"
								value={endTime}
								onChange={handleEndTimeChange}
								label="End date"
								fullWidth
								inputVariant="outlined"
								autoOk
							/>
						</Grid>
						<Grid item xs={12}>
							<KeyboardTimePicker
								value={endTime}
								onChange={handleEndTimeChange}
								label="End time"
								fullWidth
								inputVariant="outlined"
								autoOk
							/>
						</Grid>
					</Grid>
				</ThemeProvider>
			</DialogContent>
			<DialogActions>
				<Button onClick={onDialogClose}>Cancel</Button>
				<StyledLoadingButton
					onClick={handleAddShift}
					loading={loading}
					square
					text="Add shift"
					fullWidth={false}
				/>
			</DialogActions>
		</Dialog>
	);
});

export default withStyles(styles, {
	classNamePrefix: generateClassName("AddShiftDialog"),
})(AddShiftDialog);
