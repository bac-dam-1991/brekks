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

// Components
import PromptedIconButton from "../common/PromptedIconButton.Component";

// NPM
import clsx from "clsx";

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
		paperRoot: { borderRadius: 26 },
	});

export interface EmployeeUtilityToolbarProps extends PaperProps {}

const EmployeeUtilityToolbar: React.FC<
	EmployeeUtilityToolbarProps & WithStyles<typeof styles>
> = ({ classes, className, ...paperProps }) => {
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
		</Paper>
	);
};

export default withStyles(styles, {
	classNamePrefix: generateClassName("EmployeeUtilityToolbar"),
})(EmployeeUtilityToolbar);
