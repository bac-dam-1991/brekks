import * as React from "react";

// MUI
import {
	withStyles,
	WithStyles,
	createStyles,
	Theme,
} from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

// NPM
import clsx from "clsx";

// Utility
import { generateClassName } from "../../domain/utility/utility";

// Contexts
import { useCalendarManager } from "../../contexts/CalendarManager.Context";

export const styles = (theme: Theme) =>
	createStyles({
		root: {},
		textPrimary: {
			color: theme.palette.primary.main,
		},
		textSecondary: { color: theme.palette.secondary.main },
	});

export interface CalendarHeadingProps
	extends React.HTMLAttributes<HTMLDivElement> {}

const CalendarHeading: React.FC<
	CalendarHeadingProps & WithStyles<typeof styles>
> = ({ classes, className }) => {
	const { color } = useCalendarManager();

	return (
		<div className={clsx(className, classes.root)}>
			<Typography
				variant="h3"
				className={clsx(
					color === "primary" && classes.textPrimary,
					color === "secondary" && classes.textSecondary
				)}
			>
				<strong>December</strong>
			</Typography>
			<Typography
				variant="h4"
				className={clsx(
					color === "primary" && classes.textPrimary,
					color === "secondary" && classes.textSecondary
				)}
			>
				2020
			</Typography>
		</div>
	);
};

export default withStyles(styles, {
	classNamePrefix: generateClassName("CalendarHeading"),
})(CalendarHeading);
