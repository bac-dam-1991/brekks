import * as React from "react";

// MUI
import {
	withStyles,
	WithStyles,
	createStyles,
	Theme,
} from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

// Types
import { ThemeColor } from "../../domain/common/types/ThemeColorType";

// Interfaces
import ICalendarDay from "../../domain/common/interfaces/ICalendarDay";

// NPM
import clsx from "clsx";
import moment from "moment";

// Utility
import { generateClassName } from "../../domain/utility/utility";

// Classes
import Calendar from "../../domain/common/classes/calendar";

export interface CalendarPanelHeadingProps
	extends React.HTMLAttributes<HTMLDivElement> {
	color: ThemeColor;
	data: ICalendarDay;
}

export const styles = (theme: Theme) =>
	createStyles({
		primaryTheme: {
			color: theme.palette.primary.main,
		},
		secondaryTheme: {
			color: theme.palette.secondary.main,
		},
		container: {
			height: "100%",
			transition: "0.3s",
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

const CalendarPanelHeading: React.FC<
	CalendarPanelHeadingProps & WithStyles<typeof styles>
> = ({ classes, color, data, ...divProps }) => {
	return (
		<div
			className={clsx(
				classes.container,
				color === "primary" && classes.primaryTheme,
				color === "secondary" && classes.secondaryTheme,
				!data.ofCurrentMonth && classes.ofDifferentMonth
			)}
			{...divProps}
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
	);
};

export default withStyles(styles, {
	classNamePrefix: generateClassName("CalendarPanelHeading"),
})(CalendarPanelHeading);
