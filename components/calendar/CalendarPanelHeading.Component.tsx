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
import ICalendarHead from "../../domain/common/interfaces/ICalendarHead";

// NPM
import clsx from "clsx";

// Utility
import { generateClassName } from "../../domain/utility/utility";

export interface CalendarPanelHeadingProps
	extends React.HTMLAttributes<HTMLDivElement> {
	color: ThemeColor;
	data: ICalendarHead;
}

export const styles = (theme: Theme) =>
	createStyles({
		primaryThemeHeading: {
			backgroundColor: theme.palette.primary.main,
			color: theme.palette.primary.contrastText,
		},
		secondaryThemeHeading: {
			backgroundColor: theme.palette.secondary.main,
			color: theme.palette.secondary.contrastText,
		},
		headingContainer: { padding: theme.spacing(0.5) },
	});

const CalendarPanelHeading: React.FC<
	CalendarPanelHeadingProps & WithStyles<typeof styles>
> = ({ classes, color, data, ...divProps }) => {
	return (
		<div
			className={clsx(
				color === "primary" && classes.primaryThemeHeading,
				color === "secondary" && classes.secondaryThemeHeading
			)}
			{...divProps}
		>
			<div className={classes.headingContainer}>
				<Typography align="center" variant="body1">
					<strong>{data.text}</strong>
				</Typography>
			</div>
		</div>
	);
};

export default withStyles(styles, {
	classNamePrefix: generateClassName("CalendarPanelHeading"),
})(CalendarPanelHeading);
