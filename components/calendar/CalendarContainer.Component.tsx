import * as React from "react";

// MUI
import {
	withStyles,
	WithStyles,
	createStyles,
	Theme,
	ThemeProvider,
} from "@material-ui/core/styles";

// NPM
import clsx from "clsx";

// Utility
import { generateClassName } from "../../domain/utility/utility";

// Components
import CalendarHeading from "./CalendarHeading.Component";
import CalendarToolbar from "./CalendarToolbar.Component";
import CalendarGrid from "./CalendarGrid.Component";

// Types
import { ThemeColor } from "../../domain/common/types/ThemeColorType";

// Contexts
import CalendarManager from "../../contexts/CalendarManager.Context";
import { Waypoint } from "react-waypoint";

export const styles = (theme: Theme) =>
	createStyles({
		root: {
			position: "relative",
		},
	});

export interface CalendarContainerProps
	extends React.HTMLAttributes<HTMLDivElement> {
	color: ThemeColor;
}

const CalendarContainer: React.FC<
	CalendarContainerProps & WithStyles<typeof styles>
> = ({ classes, className, color, ...divProps }) => {
	// States
	const [startAnim, setStartAnim] = React.useState<boolean>(false);

	// Handlers
	const handleCalendarGridEnter = () => {
		setStartAnim(true);
	};

	return (
		<CalendarManager color={color}>
			<div className={clsx(className, classes.root)} {...divProps}>
				<CalendarHeading />
				<CalendarToolbar />

				<CalendarGrid color={color} startAnim={startAnim} />
			</div>
			<Waypoint onEnter={handleCalendarGridEnter} />
		</CalendarManager>
	);
};

export default withStyles(styles, {
	classNamePrefix: generateClassName("CalendarContainer"),
})(CalendarContainer);
