import * as React from "react";

import {
	withStyles,
	WithStyles,
	createStyles,
	Theme,
} from "@material-ui/core/styles";
import { PaperProps, Paper, ThemeProvider } from "@material-ui/core";
import { DatePicker } from "@material-ui/pickers";
import { ParsableDate } from "@material-ui/pickers/constants/prop-types";

// Utility
import { generateClassName } from "../../domain/utility/utility";

// MUI
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import CalendarTodayRoundedIcon from "@material-ui/icons/CalendarTodayRounded";

// Components
import PromptedIconButton from "../common/PromptedIconButton.Component";
import PromptedButton from "../common/PromptedButton.Component";

// NPM
import clsx from "clsx";
import moment from "moment";

// Contexts
import { useCalendarManager } from "../../contexts/CalendarManager.Context";

// Interfaces
import ICalendarData, {
	InitialCalendarDataState,
} from "../../domain/common/interfaces/ICalendarData";

// Classes
import Calendar from "../../domain/common/classes/Calendar";

// Theme
import theme, { invertedTheme } from "../../domain/common/theme";

export const styles = (theme: Theme) =>
	createStyles({
		root: {
			marginRight: theme.spacing(1),
			padding: theme.spacing(0.5),
			width: "auto",
			boxShadow: "none",
			"&:hover": {
				boxShadow: theme.shadows[4],
			},
		},
		paperRoot: {
			"&.MuiPaper-rounded": {
				borderRadius: 26,
			},
		},
		datePicker: {
			display: "none",
		},
	});

export interface CalendarNavigationToolbarProps extends PaperProps {}

const CalendarNavigationToolbar: React.FC<
	CalendarNavigationToolbarProps & WithStyles<typeof styles>
> = ({ classes, className, ...paperProps }) => {
	// Contexts
	const {
		calendarData,
		handleCalendarDataChange,
		color,
	} = useCalendarManager();

	// States
	const [datePickerOpen, setDatePickerOpen] = React.useState<boolean>(false);
	const [selectedDate, setSelectedDate] = React.useState<ParsableDate>(
		moment(calendarData.fullDate).toDate()
	);

	// Effects
	React.useEffect(() => {
		const selectedMoment: moment.Moment = moment(selectedDate);

		const year: number = parseInt(selectedMoment.format("YYYY"));
		const month: number = parseInt(selectedMoment.format("M"));
		const fullDate: string = selectedMoment.format(
			Calendar.DEFAULT_DATE_FORMAT
		);

		handleCalendarDataChange({ ...calendarData, year, fullDate, month });
	}, [selectedDate]);

	// Handler
	const handleNextMonthButtonClick = () => {
		const nextMonthData: ICalendarData = Calendar.goToNextMonth(
			calendarData
		);

		handleCalendarDataChange(nextMonthData);
		setSelectedDate(nextMonthData.fullDate);
	};

	const handlePrevMonthButtonClick = () => {
		const prevMonthData: ICalendarData = Calendar.goToPrevMonth(
			calendarData
		);

		handleCalendarDataChange(prevMonthData);
		setSelectedDate(prevMonthData.fullDate);
	};

	const handleTodayButtonClick = () => {
		handleCalendarDataChange(InitialCalendarDataState);
		setSelectedDate(InitialCalendarDataState.fullDate);
	};

	const handleDatePickerOpen = () => {
		setDatePickerOpen(true);
	};

	const handleDatePickerClose = () => {
		setDatePickerOpen(false);
	};

	const handleDateChange = (date: moment.Moment) => {
		setSelectedDate(date.toDate());
	};

	return (
		<Paper
			className={clsx(classes.root, className)}
			classes={{ root: classes.paperRoot }}
			elevation={0}
			{...paperProps}
		>
			<PromptedIconButton
				title="Previous month"
				onClick={handlePrevMonthButtonClick}
			>
				<ArrowBackIosRoundedIcon />
			</PromptedIconButton>
			<PromptedIconButton
				title="Open calendar"
				onClick={handleDatePickerOpen}
			>
				<CalendarTodayRoundedIcon />
			</PromptedIconButton>
			<PromptedButton
				title="Return to today"
				onClick={handleTodayButtonClick}
			>
				Today
			</PromptedButton>
			<PromptedIconButton
				title="Next month"
				onClick={handleNextMonthButtonClick}
			>
				<ArrowForwardIosRoundedIcon />
			</PromptedIconButton>
			<ThemeProvider theme={color === "primary" ? theme : invertedTheme}>
				<DatePicker
					open={datePickerOpen}
					value={selectedDate}
					onChange={handleDateChange}
					onClose={handleDatePickerClose}
					views={["year", "month"]}
					className={classes.datePicker}
					color="secondary"
				/>
			</ThemeProvider>
		</Paper>
	);
};

export default withStyles(styles, {
	classNamePrefix: generateClassName("CalendarNavigationToolbar"),
})(CalendarNavigationToolbar);
