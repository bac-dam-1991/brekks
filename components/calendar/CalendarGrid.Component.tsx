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
import ICalendarHead from "../../domain/common/interfaces/ICalendarHead";
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

	// Contexts
	const { firstDayOfWeek } = useCalendar();

	// Effects
	React.useEffect(() => {
		setCalendarHeadings(Calendar.getDaysOfWeek(firstDayOfWeek));
	}, [firstDayOfWeek]);

	return (
		<div className={clsx(classes.root, className)} {...divProps}>
			{calendarHeadings.map((heading: ICalendarHead) => (
				<CalendarPanel data={heading} />
			))}

			<CalendarPanel
				data={{ discriminator: "ICalendarBody", date: "21" }}
			/>
		</div>
	);
};

export default withStyles(styles, {
	classNamePrefix: generateClassName("CalendarGrid"),
})(CalendarGrid);
