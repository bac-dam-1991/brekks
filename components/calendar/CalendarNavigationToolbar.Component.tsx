import * as React from "react";

import {
	withStyles,
	WithStyles,
	createStyles,
	Theme,
} from "@material-ui/core/styles";
import { PaperProps, Paper } from "@material-ui/core";

// Utility
import { generateClassName } from "../../domain/utility/utility";

// MUI
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";

// Components
import PromptedIconButton from "../common/PromptedIconButton.Component";

// NPM
import clsx from "clsx";

export const styles = (theme: Theme) =>
	createStyles({
		root: {
			marginRight: theme.spacing(1),
			padding: theme.spacing(0.5),
			width: "auto",
			boxShadow: "none",
			"&:hover": {
				boxShadow: theme.shadows[4],
			},
		},
		paperRoot: {
			borderRadius: 26,
		},
	});

export interface CalendarNavigationToolbarProps extends PaperProps {}

const CalendarNavigationToolbar: React.FC<
	CalendarNavigationToolbarProps & WithStyles<typeof styles>
> = ({ classes, className, ...paperProps }) => {
	return (
		<Paper
			className={clsx(classes.root, className)}
			classes={{ root: classes.paperRoot }}
			elevation={0}
			{...paperProps}
		>
			<PromptedIconButton title="Previous month">
				<ArrowBackIosRoundedIcon />
			</PromptedIconButton>
			<PromptedIconButton title="Next month">
				<ArrowForwardIosRoundedIcon />
			</PromptedIconButton>
		</Paper>
	);
};

export default withStyles(styles, {
	classNamePrefix: generateClassName("CalendarNavigationToolbar"),
})(CalendarNavigationToolbar);
