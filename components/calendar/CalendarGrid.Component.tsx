import * as React from "react";

// NPM
import clsx from "clsx";
import { useTrail, config } from "react-spring";

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
import Calendar from "../../domain/common/classes/Calendar";

// Components
import CalendarPanelHeading from "./CalendarPanelHeading.Component";
import { AnimatedCalendarDayPanel } from "./CalendarDayPanel.Component";

export const styles = (theme: Theme) =>
	createStyles({
		root: {
			display: "grid",
			gridTemplateColumns: "repeat(7, 1fr)",
			gridGap: theme.spacing(0.5),
		},
	});

export interface CalendarGridProps
	extends React.HTMLAttributes<HTMLDivElement> {
	startAnim?: boolean;
}

const CalendarGrid = React.forwardRef<
	HTMLDivElement,
	CalendarGridProps & WithStyles<typeof styles>
>(({ classes, className, startAnim, ...divProps }, ref) => {
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

	// Spring

	const trail = useTrail(calendarDays.length, {
		config: { mass: 2, tension: 2200, friction: 90 },
		from: { height: 0, opacity: 0 },
		height: startAnim ? 100 : 0,
		opacity: startAnim ? 1 : 0,
	});

	return (
		<div className={clsx(classes.root, className)} {...divProps} ref={ref}>
			{calendarHeadings.map((heading: ICalendarHead) => (
				<CalendarPanelHeading data={heading} key={heading.text} />
			))}

			{trail.map(({ height, opacity }, index) => (
				<AnimatedCalendarDayPanel
					data={calendarDays[index]}
					key={calendarDays[index].fullDate}
					style={{ height, opacity }}
				/>
			))}
		</div>
	);
});

export default withStyles(styles, {
	classNamePrefix: generateClassName("CalendarGrid"),
})(CalendarGrid);
