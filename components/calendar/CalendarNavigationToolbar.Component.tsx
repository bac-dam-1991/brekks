import * as React from "react";

import {
	withStyles,
	WithStyles,
	createStyles,
	Theme,
} from "@material-ui/core/styles";
import { PaperProps, Paper } from "@material-ui/core";

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

// Contexts
import { useCalendarManager } from "../../contexts/CalendarManager.Context";

// Interfaces
import ICalendarData, {
	InitialCalendarDataState,
} from "../../domain/common/interfaces/ICalendarData";

// Classes
import Calendar from "../../domain/common/classes/calendar";

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
			borderRadius: 26,
		},
	});

export interface CalendarNavigationToolbarProps extends PaperProps {}

const CalendarNavigationToolbar: React.FC<
	CalendarNavigationToolbarProps & WithStyles<typeof styles>
> = ({ classes, className, ...paperProps }) => {
	// Contexts
	const { calendarData, handleCalendarDataChange } = useCalendarManager();

	// Handler
	const handleNextMonthButtonClick = () => {
		const nextMonthData: ICalendarData = Calendar.goToNextMonth(
			calendarData
		);

		handleCalendarDataChange(nextMonthData);
	};

	const handlePrevMonthButtonClick = () => {
		const prevMonthData: ICalendarData = Calendar.goToPrevMonth(
			calendarData
		);

		handleCalendarDataChange(prevMonthData);
	};

	const handleTodayButtonClick = () => {
		handleCalendarDataChange(InitialCalendarDataState);
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
			<PromptedIconButton title="Open calendar">
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
		</Paper>
	);
};

export default withStyles(styles, {
	classNamePrefix: generateClassName("CalendarNavigationToolbar"),
})(CalendarNavigationToolbar);
