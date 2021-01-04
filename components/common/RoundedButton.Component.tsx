import * as React from "react";

// MUI
import {
	withStyles,
	WithStyles,
	Theme,
	createStyles,
} from "@material-ui/core/styles";
import { Button, ButtonProps } from "@material-ui/core";

// Domain
import { generateClassName } from "../../domain/utility/utility";

// NPM
import clsx from "clsx";

export const styles = (theme: Theme) =>
	createStyles({
		root: {},
		roundedButton: {
			borderRadius: 18,
		},
	});

export interface RoundedButtonProps extends ButtonProps {
	text: string;
}

const RoundedButton = React.forwardRef<
	HTMLButtonElement,
	RoundedButtonProps & WithStyles<typeof styles>
>(({ text, classes, className, ...buttonProps }, ref) => {
	return (
		<Button
			{...buttonProps}
			className={clsx(classes.root, className)}
			classes={{ root: classes.roundedButton }}
		>
			{text}
		</Button>
	);
});

export default withStyles(styles, {
	classNamePrefix: generateClassName("RoundedButton"),
})(RoundedButton);
