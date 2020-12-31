import * as React from "react";

// NPM
import clsx from "clsx";

// Utility
import { generateClassName } from "../../domain/utility/utility";

// Components
import CalendarPanel from "./CalendarPanel.Component";

// MUI
import {
	withStyles,
	WithStyles,
	createStyles,
	Theme,
} from "@material-ui/core/styles";

// Contexts
import { useCalendar } from "../../contexts/CalendarManager.Context";

// Interfaces
import ICalendarHead from "../../domain/common/interfaces/ICalendarHead";
import ICalendarDay from "../../domain/common/interfaces/ICalendarDay";

// Classes
import Calendar from "../../domain/common/classes/calendar";

export const styles = (theme: Theme) =>
	createStyles({
		root: {
			display: "grid",
			gridTemplateColumns: "repeat(7, 1fr)",
			gridGap: theme.spacing(0.5),
			margin: theme.spacing(5, 0),
		},
	});

export interface CalendarGridProps
	extends React.HTMLAttributes<HTMLDivElement> {}

const CalendarGrid: React.FC<CalendarGridProps & WithStyles<typeof styles>> = ({
	classes,
	className,
	...divProps
}) => {
	// States
	const [calendarHeadings, setCalendarHeadings] = React.useState<
		ICalendarHead[]
	>([]);
	const [calendarDays, setCalendarDays] = React.useState<ICalendarDay[]>([]);

	// Contexts
	const { firstDayOfWeek } = useCalendar();

	// Effects
	React.useEffect(() => {
		setCalendarHeadings(Calendar.getDaysOfWeek(firstDayOfWeek));
		setCalendarDays(Calendar.generateCalendar(2021, 1, firstDayOfWeek));
	}, [firstDayOfWeek]);

	return (
		<div className={clsx(classes.root, className)} {...divProps}>
			{calendarHeadings.map((heading: ICalendarHead) => (
				<CalendarPanel
					data={heading}
					key={heading.text}
					color="secondary"
				/>
			))}

			{calendarDays.map((day: ICalendarDay) => (
				<CalendarPanel
					data={day}
					key={day.fullDate}
					color="secondary"
				/>
			))}
		</div>
	);
};

export default withStyles(styles, {
	classNamePrefix: generateClassName("CalendarGrid"),
})(CalendarGrid);
