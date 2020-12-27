import * as React from "react";

// MUI
import {
	withStyles,
	WithStyles,
	createStyles,
	Theme,
} from "@material-ui/core/styles";
import { TypographyProps, Typography } from "@material-ui/core";

// NPM
import clsx from "clsx";

// Utility
import { generateClassName } from "../../domain/utility/utility";

export const styles = (theme: Theme) => createStyles({ root: {} });

export interface CalendarHeadingProps
	extends React.HTMLAttributes<HTMLDivElement> {}

const CalendarHeading: React.FC<
	CalendarHeadingProps &
		WithStyles<typeof styles> &
		Pick<TypographyProps, "color">
> = ({ classes, className, color }) => {
	return (
		<div className={clsx(className, classes.root)}>
			<Typography variant="h3" color={color}>
				<strong>December</strong>
			</Typography>
			<Typography variant="h4" color={color}>
				2020
			</Typography>
		</div>
	);
};

export default withStyles(styles, {
	classNamePrefix: generateClassName("CalendarHeading"),
})(CalendarHeading);
