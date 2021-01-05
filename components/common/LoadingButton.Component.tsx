import * as React from "react";

// MUI
import {
	withStyles,
	WithStyles,
	createStyles,
	Theme,
} from "@material-ui/core/styles";
import { CircularProgress } from "@material-ui/core";

// Components
import RoundedButton, { RoundedButtonProps } from "./RoundedButton.Component";

// Utility
import { generateClassName } from "../../domain/utility/utility";

// NPM
import clsx from "clsx";

export const styles = (theme: Theme) =>
	createStyles({
		root: {
			position: "relative",
			width: "100%",
		},
		loaderContainer: {
			position: "absolute",
			top: "50%",
			left: "50%",
			transform: "translate(-50%, -50%)",
			display: "flex",
			justifyContent: "center",
		},
	});

export interface LoadingButtonProps
	extends React.HTMLAttributes<HTMLDivElement> {
	loading: boolean;
}

const LoadingButton = React.forwardRef<
	HTMLDivElement,
	LoadingButtonProps & RoundedButtonProps & WithStyles<typeof styles>
>(({ className, classes, text, loading, ...divProps }, ref) => {
	return (
		<div {...divProps} className={clsx(classes.root, className)} ref={ref}>
			<RoundedButton
				className={clsx(classes.root, className)}
				text={text}
				fullWidth
				color="secondary"
				variant="contained"
				disabled={loading}
			/>
			{loading && (
				<div className={classes.loaderContainer}>
					<CircularProgress size={24} color="secondary" />
				</div>
			)}
		</div>
	);
});

const StyledLoadingButton = withStyles(styles, {
	classNamePrefix: generateClassName("LoadingButton"),
})(LoadingButton);

export default StyledLoadingButton;
