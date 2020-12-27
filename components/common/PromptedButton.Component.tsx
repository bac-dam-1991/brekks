import * as React from "react";

// MUI
import {
	withStyles,
	WithStyles,
	createStyles,
	Theme,
} from "@material-ui/core/styles";
import { Button, ButtonProps, Tooltip, TooltipProps } from "@material-ui/core";

// NPM
import clsx from "clsx";

// Utility
import { generateClassName } from "../../domain/utility/utility";

export const styles = (theme: Theme) => createStyles({ root: {}, button: {} });

export interface PromptedButtonProps extends ButtonProps {}

const PromptedButton: React.FC<
	PromptedButtonProps &
		WithStyles<typeof styles> &
		Pick<TooltipProps, "title">
> = ({ classes, className, title, children, ...buttonProps }) => {
	return (
		<Tooltip
			title={title}
			placement="top"
			arrow
			className={clsx(classes.root, className)}
		>
			<Button {...buttonProps} className={classes.button}>
				{children}
			</Button>
		</Tooltip>
	);
};

export default withStyles(styles, {
	classNamePrefix: generateClassName("PromptedButton"),
})(PromptedButton);
