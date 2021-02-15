import * as React from "react";

// MUI
import {
	withStyles,
	WithStyles,
	createStyles,
	Theme,
} from "@material-ui/core/styles";
import { Button, CircularProgress } from "@material-ui/core";

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
		fitContent: { width: "fit-content !important" },
	});

export interface LoadingButtonProps
	extends React.HTMLAttributes<HTMLDivElement> {
	loading: boolean;
	square?: boolean;
}

const LoadingButton = React.forwardRef<
	HTMLDivElement,
	LoadingButtonProps & RoundedButtonProps & WithStyles<typeof styles>
>(
	(
		{
			className,
			classes,
			text,
			loading,
			square,
			fullWidth = true,
			...divProps
		},
		ref
	) => {
		return (
			<div
				{...divProps}
				className={clsx(
					classes.root,
					className,
					!fullWidth && classes.fitContent
				)}
				ref={ref}
			>
				{square ? (
					<Button
						fullWidth={fullWidth}
						color="primary"
						variant="contained"
						disabled={loading}
					>
						{text}
					</Button>
				) : (
					<RoundedButton
						fullWidth={fullWidth}
						text={text}
						color="primary"
						variant="contained"
						disabled={loading}
					/>
				)}
				{loading && (
					<div className={classes.loaderContainer}>
						<CircularProgress size={24} color="primary" />
					</div>
				)}
			</div>
		);
	}
);

const StyledLoadingButton = withStyles(styles, {
	classNamePrefix: generateClassName("LoadingButton"),
})(LoadingButton);

export default StyledLoadingButton;
