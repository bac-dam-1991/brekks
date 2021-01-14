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
import Shift from "../../domain/common/classes/Shift";
import Break from "../../domain/common/classes/Break";

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
		moment().add(Shift.minDuration, "minutes").toDate()
	);
	const [shiftDuration, setShiftDuration] = React.useState<number>(
		Shift.minDuration
	);
	const [breakDuration, setBreakDuration] = React.useState<string>("");

	// Theme
	const theme = useTheme();
	const matchSm = useMediaQuery(theme.breakpoints.down("sm"));

	// Handlers
	const handleEmployeeChange = (
		event: React.ChangeEvent<{ value: unknown }>
	) => {
		setEmployeeId(event.target.value as string);
	};

	const handleBreakDurationChange = (
		event: React.ChangeEvent<{ value: unknown }>
	) => {
		setBreakDuration(event.target.value as string);
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

	// Use effects
	React.useEffect(() => {
		const shiftDuration: number = moment(endTime).diff(
			moment(startTime),
			"minutes"
		);

		setShiftDuration(shiftDuration);
	}, [startTime, endTime]);

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
						<Grid item xs={12} sm={6}>
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
						<Grid item xs={12} sm={6}>
							<KeyboardTimePicker
								value={startTime}
								onChange={handleStartTimeChange}
								label="Start time"
								fullWidth
								inputVariant="outlined"
								autoOk
								minutesStep={15}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
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
						<Grid item xs={12} sm={6}>
							<KeyboardTimePicker
								value={endTime}
								onChange={handleEndTimeChange}
								label="End time"
								fullWidth
								inputVariant="outlined"
								autoOk
								minutesStep={15}
							/>
						</Grid>
						{shiftDuration > 300 && (
							<React.Fragment>
								<Grid item xs={12} sm={4}>
									<KeyboardDatePicker
										format="DD/MM/YYYY"
										value={endTime}
										onChange={handleEndTimeChange}
										label="Break date"
										fullWidth
										inputVariant="outlined"
										autoOk
									/>
								</Grid>
								<Grid item xs={12} sm={4}>
									<KeyboardTimePicker
										value={endTime}
										onChange={handleEndTimeChange}
										label="Break time"
										fullWidth
										inputVariant="outlined"
										autoOk
										minutesStep={15}
									/>
								</Grid>
								<Grid item xs={12} sm={4}>
									<GenericSelect
										value={breakDuration}
										onValueChange={
											handleBreakDurationChange
										}
										valuesList={Break.getSelectableBreakDurations()}
										selectLabel="Break duration"
										color="primary"
									/>
								</Grid>
							</React.Fragment>
						)}
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
