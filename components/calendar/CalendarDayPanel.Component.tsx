import * as React from "react";

// MUI
import {
	withStyles,
	WithStyles,
	createStyles,
	Theme,
} from "@material-ui/core/styles";
import { PaperProps, Typography, Paper } from "@material-ui/core";

// Interfaces
import ICalendarDay from "../../domain/common/interfaces/ICalendarDay";

// NPM
import clsx from "clsx";
import moment from "moment";

// Utility
import { generateClassName } from "../../domain/utility/utility";

// Classes
import Calendar from "../../domain/common/classes/calendar";

// Contexts
import { useCalendarManager } from "../../contexts/CalendarManager.Context";

export const styles = (theme: Theme) =>
	createStyles({
		root: {
			cursor: "pointer",
			transition: "0.4s",
			"&:hover": {
				boxShadow: theme.shadows[4],
			},
		},
		head: {},
		body: {
			height: 100,
		},
		primaryTheme: {
			color: theme.palette.primary.main,
		},
		secondaryTheme: {
			color: theme.palette.secondary.main,
		},
		container: {
			height: "100%",
			transition: "0.3s",
			cursor: "pointer",
			"&:hover": {
				backgroundColor: "inherit",
			},
		},
		ofDifferentMonth: {
			backgroundColor: "#EFEFEF",
		},
		dateContainer: {
			marginRight: theme.spacing(0.5),
		},
	});

export interface CalendarDayPanelProps extends PaperProps {
	data: ICalendarDay;
}

const CalendarDayPanel: React.FC<
	CalendarDayPanelProps & WithStyles<typeof styles>
> = ({ classes, className, data, ...paperProps }) => {
	const { color } = useCalendarManager();

	return (
		<Paper
			className={clsx(classes.root, className, classes.body)}
			{...paperProps}
			square
			elevation={0}
		>
			<div
				className={clsx(
					classes.container,
					color === "primary" && classes.primaryTheme,
					color === "secondary" && classes.secondaryTheme,
					!data.ofCurrentMonth && classes.ofDifferentMonth
				)}
			>
				<div className={classes.dateContainer}>
					<Typography align="right" variant="body2">
						{Calendar.isToday(data.fullDate) ? (
							<strong>Today</strong>
						) : (
							moment(data.fullDate).date()
						)}
					</Typography>
				</div>
			</div>
		</Paper>
	);
};

export default withStyles(styles, {
	classNamePrefix: generateClassName("CalendarDayPanel"),
})(CalendarDayPanel);
