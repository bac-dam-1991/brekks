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
import AddCircleOutlineRoundedIcon from "@material-ui/icons/AddCircleOutlineRounded";

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

export interface LocationUtilityToolbarProps extends PaperProps {}

const LocationUtilityToolbar: React.FC<
	LocationUtilityToolbarProps & WithStyles<typeof styles>
> = ({ classes, className, ...paperProps }) => {
	return (
		<Paper
			className={clsx(classes.root, className)}
			classes={{ root: classes.paperRoot }}
			{...paperProps}
			elevation={0}
		>
			<PromptedIconButton title="Add store">
				<AddCircleOutlineRoundedIcon />
			</PromptedIconButton>
		</Paper>
	);
};

export default withStyles(styles, {
	classNamePrefix: generateClassName("LocationUtilityToolbar"),
})(LocationUtilityToolbar);
