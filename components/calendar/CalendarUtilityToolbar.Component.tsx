import * as React from "react";

// MUI
import {
	withStyles,
	WithStyles,
	createStyles,
	Theme,
} from "@material-ui/core/styles";
import { PaperProps, Paper } from "@material-ui/core";

// Utility
import { generateClassName } from "../../domain/utility/utility";

// Icons
import PersonAddRoundedIcon from "@material-ui/icons/PersonAddRounded";
import AddAlarmRoundedIcon from "@material-ui/icons/AddAlarmRounded";
import PromptedButton from "../common/PromptedButton.Component";
import UnfoldLessRoundedIcon from "@material-ui/icons/UnfoldLessRounded";
import UnfoldMoreRoundedIcon from "@material-ui/icons/UnfoldMoreRounded";

// Components
import PromptedIconButton from "../common/PromptedIconButton.Component";

// NPM
import clsx from "clsx";

// Contexts
import { useCalendarManager } from "../../contexts/CalendarManager.Context";

export const styles = (theme: Theme) =>
	createStyles({
		root: {
			padding: theme.spacing(0.5),
			width: "auto",
			boxShadow: "none",
			"&:hover": {
				boxShadow: theme.shadows[4],
			},
		},
		paperRoot: { "&.MuiPaper-rounded": { borderRadius: 26 } },
	});

export interface CalendarUtilityToolbarProps extends PaperProps {}

const CalendarUtilityToolbar: React.FC<
	CalendarUtilityToolbarProps & WithStyles<typeof styles>
> = ({ classes, className, ...paperProps }) => {
	const {
		firstDayOfWeek,
		toggleExpandAll,
		toggleFirstDayOfWeek,
		expandAll,
		handleAddShiftDialogOpenChange,
	} = useCalendarManager();

	return (
		<Paper
			className={clsx(classes.root, className)}
			classes={{ root: classes.paperRoot }}
			{...paperProps}
			elevation={0}
		>
			<PromptedIconButton title="Add staff">
				<PersonAddRoundedIcon />
			</PromptedIconButton>
			<PromptedIconButton
				title="Add shift"
				onClick={() => handleAddShiftDialogOpenChange(true)}
			>
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
	);
};

export default withStyles(styles, {
	classNamePrefix: generateClassName("CalendarUtilityToolbar"),
})(CalendarUtilityToolbar);
