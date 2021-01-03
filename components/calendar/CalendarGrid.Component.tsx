import * as React from "react";

// NPM
import clsx from "clsx";

// Utility
import { generateClassName } from "../../domain/utility/utility";

// MUI
import {
	withStyles,
	WithStyles,
	createStyles,
	Theme,
} from "@material-ui/core/styles";

// Contexts
import { useCalendarManager } from "../../contexts/CalendarManager.Context";

// Interfaces
import ICalendarHead from "../../domain/common/interfaces/ICalendarHead";
import ICalendarDay from "../../domain/common/interfaces/ICalendarDay";

// Classes
import Calendar from "../../domain/common/classes/calendar";

// Components
import CalendarPanelHeading from "./CalendarPanelHeading.Component";
import CalendarDayPanel from "./CalendarDayPanel.Component";

export const styles = (theme: Theme) =>
	createStyles({
		root: {
			display: "grid",
			gridTemplateColumns: "repeat(7, 1fr)",
			gridGap: theme.spacing(0.5),
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
	const { firstDayOfWeek, calendarData } = useCalendarManager();

	// Effects
	React.useEffect(() => {
		setCalendarHeadings(Calendar.getDaysOfWeek(firstDayOfWeek));

		const newCalendar: ICalendarDay[] = Calendar.generateCalendar(
			calendarData.year,
			calendarData.month,
			firstDayOfWeek
		);
		setCalendarDays(newCalendar);
	}, [firstDayOfWeek]);

	React.useEffect(() => {
		const newCalendar: ICalendarDay[] = Calendar.generateCalendar(
			calendarData.year,
			calendarData.month,
			firstDayOfWeek
		);

		setCalendarDays(newCalendar);
	}, [calendarData]);

	return (
		<div className={clsx(classes.root, className)} {...divProps}>
			{calendarHeadings.map((heading: ICalendarHead) => (
				<CalendarPanelHeading data={heading} key={heading.text} />
			))}

			{calendarDays.map((day: ICalendarDay) => (
				<CalendarDayPanel data={day} key={day.fullDate} />
			))}
		</div>
	);
};

export default withStyles(styles, {
	classNamePrefix: generateClassName("CalendarGrid"),
})(CalendarGrid);
