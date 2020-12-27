import * as React from "react";

// MUI
import {
	withStyles,
	WithStyles,
	createStyles,
	Theme,
} from "@material-ui/core/styles";
import { Container, ContainerProps } from "@material-ui/core";
import { generateClassName } from "../../domain/utility/utility";

// NPM
import clsx from "clsx";

export const styles = (theme: Theme) =>
	createStyles({
		root: {
			margin: theme.spacing(10, 0),
		},
		container: {},
	});

export interface SectionProps extends ContainerProps {}

const Section: React.FC<SectionProps & WithStyles<typeof styles>> = ({
	children,
	classes,
	className,
	maxWidth = "lg",
}) => {
	return (
		<div className={classes.root}>
			<Container
				maxWidth={maxWidth}
				className={clsx(classes.container, className)}
			>
				{children}
			</Container>
		</div>
	);
};

export default withStyles(styles, {
	classNamePrefix: generateClassName("Section"),
})(Section);
