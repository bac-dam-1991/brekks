import * as React from "react";

// MUI
import {
	withStyles,
	WithStyles,
	createStyles,
	Theme,
} from "@material-ui/core/styles";
import { Paper, PaperProps } from "@material-ui/core";

// Utility
import { generateClassName } from "../../domain/utility/utility";

// NPM
import clsx from "clsx";

// Interfaces
import ICalendarHead, {
	instanceOfICalendarHead,
} from "../../domain/common/interfaces/ICalendarHead";
import ICalendarDay, {
	instanceOfICalendarDay,
} from "../../domain/common/interfaces/ICalendarDay";

// Components
import CalendarPanelHeading from "./CalendarPanelHeading.Component";
import CalendarDayPanel from "./CalendarDayPanel.Component";

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
	});

export interface CalendarPanelProps extends PaperProps {
	data: ICalendarHead | ICalendarDay;
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
			{instanceOfICalendarHead(data) && (
				<CalendarPanelHeading data={data} />
			)}
			{instanceOfICalendarDay(data) && <CalendarDayPanel data={data} />}
		</Paper>
	);
};

export default withStyles(styles, {
	classNamePrefix: generateClassName("CalendarPanel"),
})(CalendarPanel);
