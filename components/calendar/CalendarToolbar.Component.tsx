import * as React from "react";

import {
	withStyles,
	WithStyles,
	createStyles,
	Theme,
} from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

// NPM
import clsx from "clsx";

// Utility
import { generateClassName } from "../../domain/utility/utility";

// Components
import PromptedIconButton from "../common/PromptedIconButton.Component";

// Icons
import PersonAddRoundedIcon from "@material-ui/icons/PersonAddRounded";
import AddAlarmRoundedIcon from "@material-ui/icons/AddAlarmRounded";
import PromptedButton from "../common/PromptedButton.Component";
import UnfoldLessRoundedIcon from "@material-ui/icons/UnfoldLessRounded";
import UnfoldMoreRoundedIcon from "@material-ui/icons/UnfoldMoreRounded";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";

import { FirstDayOfWeekType } from "../../domain/common/types/FirstDayOfWeekType";

export const styles = (theme: Theme) =>
	createStyles({
		root: { display: "flex", flexDirection: "row" },
		paper: {
			padding: theme.spacing(0.5),
			width: "auto",
			boxShadow: "none",
			"&:hover": {
				boxShadow: theme.shadows[4],
			},
		},
		navigation: {
			marginRight: theme.spacing(1),
		},
		paperRoot: { borderRadius: 26 },
		toolbar: {},
	});

export interface CalendarToolbarProps
	extends React.HTMLAttributes<HTMLDivElement> {}

const CalendarToolbar: React.FC<
	CalendarToolbarProps & WithStyles<typeof styles>
> = ({ classes, className }) => {
	// States
	const [
		firstDayOfWeek,
		setFirstDayOfWeek,
	] = React.useState<FirstDayOfWeekType>("Monday");
	const [expandAll, setExpandAll] = React.useState<boolean>(false);

	// Handler
	const toggleFirstDayOfWeek = () => {
		setFirstDayOfWeek((prevState: FirstDayOfWeekType) =>
			firstDayOfWeek === "Monday" ? "Sunday" : "Monday"
		);
	};

	const toggleExpandAll = () => {
		setExpandAll((prevState: boolean) => !prevState);
	};

	return (
		<div className={clsx(classes.root, className)}>
			<Paper
				className={clsx(classes.paper, classes.navigation)}
				classes={{ root: classes.paperRoot }}
				elevation={0}
			>
				<PromptedIconButton title="Previous month">
					<ArrowBackIosRoundedIcon />
				</PromptedIconButton>
				<PromptedIconButton title="Next month">
					<ArrowForwardIosRoundedIcon />
				</PromptedIconButton>
			</Paper>

			<Paper
				className={clsx(classes.paper, classes.toolbar)}
				classes={{ root: classes.paperRoot }}
				elevation={0}
			>
				<PromptedIconButton title="Add staff">
					<PersonAddRoundedIcon />
				</PromptedIconButton>
				<PromptedIconButton title="Add shift">
					<AddAlarmRoundedIcon />
				</PromptedIconButton>
				<PromptedButton
					title="Toggle first day of week"
					onClick={toggleFirstDayOfWeek}
				>
					{firstDayOfWeek.slice(0, 3)}
				</PromptedButton>
				<PromptedIconButton
					title={expandAll ? "Collapse all" : "Expand all"}
					onClick={toggleExpandAll}
				>
					{expandAll ? (
						<UnfoldLessRoundedIcon />
					) : (
						<UnfoldMoreRoundedIcon />
					)}
				</PromptedIconButton>
			</Paper>
		</div>
	);
};

export default withStyles(styles, {
	classNamePrefix: generateClassName("CalendarToolbar"),
})(CalendarToolbar);
