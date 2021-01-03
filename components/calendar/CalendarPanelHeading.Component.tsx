import * as React from "react";

// MUI
import {
	withStyles,
	WithStyles,
	createStyles,
	Theme,
} from "@material-ui/core/styles";
import { Typography, Paper, PaperProps } from "@material-ui/core";

// Interfaces
import ICalendarHead from "../../domain/common/interfaces/ICalendarHead";

// NPM
import clsx from "clsx";

// Utility
import { generateClassName } from "../../domain/utility/utility";

// Contexts
import { useCalendarManager } from "../../contexts/CalendarManager.Context";

export interface CalendarPanelHeadingProps extends PaperProps {
	data: ICalendarHead;
}

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
> = ({ classes, className, data, ...paperProps }) => {
	const { color } = useCalendarManager();

	return (
		<Paper
			className={clsx(classes.root, className, classes.head)}
			{...paperProps}
			square
			elevation={0}
		>
			<div
				className={clsx(
					color === "primary" && classes.primaryThemeHeading,
					color === "secondary" && classes.secondaryThemeHeading
				)}
			>
				<div className={classes.headingContainer}>
					<Typography align="center" variant="body1">
						<strong>{data.text}</strong>
					</Typography>
				</div>
			</div>
		</Paper>
	);
};

export default withStyles(styles, {
	classNamePrefix: generateClassName("CalendarPanelHeading"),
})(CalendarPanelHeading);
