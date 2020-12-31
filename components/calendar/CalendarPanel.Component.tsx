import * as React from "react";

// MUI
import {
	withStyles,
	WithStyles,
	createStyles,
	Theme,
} from "@material-ui/core/styles";
import { Paper, PaperProps, Typography } from "@material-ui/core";

// Utility
import { generateClassName } from "../../domain/utility/utility";

// NPM
import clsx from "clsx";
import moment from "moment";

// Interfaces
import ICalendarHead, {
	instanecOfICalendarHead,
} from "../../domain/common/interfaces/ICalendarHead";
import ICalendarDay, {
	instanceOfICalendarDay,
} from "../../domain/common/interfaces/ICalendarDay";
import { ThemeColor } from "../../domain/common/types/ThemeColorType";

// Types

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
		headingContainer: { padding: theme.spacing(0.5) },
		body: {
			height: 100,
		},
		dateContainer: {
			marginRight: theme.spacing(0.5),
		},
		primaryTheme: {
			color: theme.palette.primary.main,
		},
		secondaryTheme: {
			color: theme.palette.secondary.main,
		},
		primaryThemeHeading: {
			backgroundColor: theme.palette.primary.main,
			color: theme.palette.primary.contrastText,
		},
		secondaryThemeHeading: {
			backgroundColor: theme.palette.secondary.main,
			color: theme.palette.secondary.contrastText,
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
	});

export interface CalendarPanelProps extends PaperProps {
	data: ICalendarHead | ICalendarDay;
	color: ThemeColor;
}

const CalendarPanel: React.FC<
	CalendarPanelProps & WithStyles<typeof styles>
> = ({ classes, className, data, color, ...paperProps }) => {
	return (
		<Paper
			className={clsx(
				classes.root,
				className,
				instanceOfICalendarDay(data) ? classes.body : classes.head
			)}
			{...paperProps}
			square
			elevation={0}
		>
			<div
				className={clsx(
					color === "primary" && classes.primaryThemeHeading,
					color === "secondary" && classes.secondaryThemeHeading
				)}
			>
				{instanecOfICalendarHead(data) && (
					<div className={classes.headingContainer}>
						<Typography align="center" variant="body1">
							<strong>{data.text}</strong>
						</Typography>
					</div>
				)}
			</div>
			<div
				className={clsx(
					classes.container,
					color === "primary" && classes.primaryTheme,
					color === "secondary" && classes.secondaryTheme,
					!(data as ICalendarDay).ofCurrentMonth &&
						classes.ofDifferentMonth
				)}
			>
				{instanceOfICalendarDay(data) && (
					<div className={classes.dateContainer}>
						<Typography align="right" variant="body2">
							{moment(data.fullDate).date()}
						</Typography>
					</div>
				)}
			</div>
		</Paper>
	);
};

export default withStyles(styles, {
	classNamePrefix: generateClassName("CalendarPanel"),
})(CalendarPanel);
