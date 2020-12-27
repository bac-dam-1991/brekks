import * as React from "react";

import {
	withStyles,
	WithStyles,
	createStyles,
	Theme,
} from "@material-ui/core/styles";

// NPM
import clsx from "clsx";
import { generateClassName } from "../../domain/utility/utility";

export const styles = (theme: Theme) => createStyles({ root: {} });

export interface CalendarToolbarProps
	extends React.HTMLAttributes<HTMLDivElement> {}

const CalendarToolbar: React.FC<
	CalendarToolbarProps & WithStyles<typeof styles>
> = ({ classes, className }) => {
	return <div className={clsx(classes.root, className)}></div>;
};

export default withStyles(styles, {
	classNamePrefix: generateClassName("CalendarToolbar"),
})(CalendarToolbar);
