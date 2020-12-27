import * as React from "react";

// MUI
import {
	withStyles,
	WithStyles,
	createStyles,
	Theme,
} from "@material-ui/core/styles";
import {
	IconButton,
	IconButtonProps,
	Tooltip,
	TooltipProps,
} from "@material-ui/core";

// NPM
import clsx from "clsx";

// Utility
import { generateClassName } from "../../domain/utility/utility";

export const styles = (theme: Theme) =>
	createStyles({ root: {}, iconButton: {} });

export interface PromptedIconButtonProps extends IconButtonProps {}

const PromptedIconButton: React.FC<
	PromptedIconButtonProps &
		WithStyles<typeof styles> &
		Pick<TooltipProps, "title">
> = ({ classes, className, title, children, ...iconButtonProps }) => {
	return (
		<Tooltip
			title={title}
			placement="top"
			arrow
			className={clsx(classes.root, className)}
		>
			<IconButton {...iconButtonProps} className={classes.iconButton}>
				{children}
			</IconButton>
		</Tooltip>
	);
};

export default withStyles(styles, {
	classNamePrefix: generateClassName("PromptedIconButton"),
})(PromptedIconButton);
