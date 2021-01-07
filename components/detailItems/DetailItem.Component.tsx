import * as React from "react";

// MUI
import {
	withStyles,
	WithStyles,
	createStyles,
	Theme,
} from "@material-ui/core/styles";
import { Grid, GridProps, Typography } from "@material-ui/core";

// Utility
import { generateClassName } from "../../domain/utility/utility";

// NPM
import clsx from "clsx";

// Interfaces
import IDetail from "../../domain/common/interfaces/IDetail";

export const styles = (theme: Theme) =>
	createStyles({
		root: {},
		caption: {
			color: "#ADADAD",
		},
	});

export interface DetailItemProps extends GridProps {
	detail: IDetail;
}

const DetailItem = React.forwardRef<
	HTMLDivElement,
	DetailItemProps & WithStyles<typeof styles>
>(({ classes, className, detail, ...gridProps }, ref) => {
	return (
		<Grid
			item
			xs={12}
			{...gridProps}
			className={clsx(classes.root, className)}
			ref={ref}
		>
			<Typography variant="caption" className={classes.caption}>
				{detail.key}
			</Typography>
			<Typography variant="body1" color="secondary">
				{detail.value}
			</Typography>
		</Grid>
	);
});

export default withStyles(styles, {
	classNamePrefix: generateClassName("DetailItem"),
})(DetailItem);
