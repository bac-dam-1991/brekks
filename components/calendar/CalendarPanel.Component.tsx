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

// Interfaces
import ICalendarHead, {
	instanecOfICalendarHead,
} from "../../domain/common/interfaces/ICalendarHead";
import ICalendarBody, {
	instanceOfICalendarBody,
} from "../../domain/common/interfaces/ICalendarBody";

// Types

export const styles = (theme: Theme) =>
	createStyles({
		root: {
			cursor: "pointer",
			"&:hover": {
				boxShadow: theme.shadows[4],
			},
		},
		head: {},
		body: {
			height: 100,
		},
	});

export interface CalendarPanelProps extends PaperProps {
	data: ICalendarHead | ICalendarBody;
}

const CalendarPanel: React.FC<
	CalendarPanelProps & WithStyles<typeof styles>
> = ({ classes, className, data, ...paperProps }) => {
	return (
		<Paper
			className={clsx(
				classes.root,
				className,
				instanceOfICalendarBody(data) ? classes.body : classes.head
			)}
			{...paperProps}
			square
			elevation={0}
		>
			{instanecOfICalendarHead(data) && (
				<Typography align="center">{data.text}</Typography>
			)}
			{instanceOfICalendarBody(data) && (
				<Typography align="right">{data.date}</Typography>
			)}
		</Paper>
	);
};

export default withStyles(styles, {
	classNamePrefix: generateClassName("CalendarPanel"),
})(CalendarPanel);
