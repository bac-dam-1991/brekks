import * as React from "react";

// MUI
import {
	withStyles,
	WithStyles,
	createStyles,
	Theme,
} from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

// Utility
import { generateClassName } from "../../domain/utility/utility";

// Interfaces
import IStaticContent from "../../domain/common/interfaces/IStaticContent";

// NPM
import clsx from "clsx";

export const styles = (theme: Theme) =>
	createStyles({
		root: {
			position: "absolute",
			top: 0,
			left: 0,
			height: "100%",
			width: "100%",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			"&:hover > .MuiTypography-root": {
				letterSpacing: 2,
			},
		},
		secondary: {
			color: "white",
			backgroundColor: theme.palette.primary.main,
		},
		typography: {
			transition: "0.2s",
		},
	});

export interface StaticContentContainerProps
	extends React.HTMLAttributes<HTMLDivElement> {
	staticContent: IStaticContent;
}

const StaticContentContainer = React.forwardRef<
	HTMLDivElement,
	StaticContentContainerProps & WithStyles<typeof styles>
>(({ classes, className, staticContent, ...divProps }, ref) => {
	return (
		<div
			className={clsx(
				classes.root,
				staticContent.theme === "secondary" && classes.secondary
			)}
			ref={ref}
			{...divProps}
		>
			<Typography className={classes.typography} variant="h6">
				{staticContent.content}
			</Typography>
		</div>
	);
});

const StyledStaticContentContainer = withStyles(styles, {
	classNamePrefix: generateClassName("StaticContentContainer"),
})(StaticContentContainer);

export default StyledStaticContentContainer;
