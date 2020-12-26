import * as React from "react";

// MUI
import { Typography, TypographyProps } from "@material-ui/core";
import {
	withStyles,
	WithStyles,
	createStyles,
	Theme,
} from "@material-ui/core/styles";

// Utility
import { generateClassName } from "../../domain/utility/utility";

// NPM
import clsx from "clsx";

export const styles = (theme: Theme) =>
	createStyles({
		root: {},
	});

export interface SectionHeaderProps extends TypographyProps {
	text: string;
}

const SectionHeader: React.FC<
	SectionHeaderProps & WithStyles<typeof styles>
> = ({ classes, className, text }) => {
	return (
		<Typography
			variant="h1"
			color="primary"
			className={clsx(classes.root, className)}
		>
			{text}
		</Typography>
	);
};

export default withStyles(styles, {
	classNamePrefix: generateClassName("SectionHeader"),
})(SectionHeader);
