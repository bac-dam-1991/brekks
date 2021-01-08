import * as React from "react";

// MUI
import {
	withStyles,
	WithStyles,
	createStyles,
	Theme,
} from "@material-ui/core/styles";
import { PaperProps, Paper } from "@material-ui/core";

// NPM
import clsx from "clsx";

// Utility
import { generateClassName } from "../../domain/utility/utility";

// Components
import PersonalDetailsFormSection from "./PersonalDetailsFormSection.Component";

export const styles = (theme: Theme) =>
	createStyles({
		root: {
			marginTop: theme.spacing(5),
			padding: theme.spacing(2),
			"&:hover": {
				boxShadow: theme.shadows[2],
			},
		},
	});

export interface AddEmployeeFormProps extends PaperProps {}

const AddEmployeeForm = React.forwardRef<
	HTMLDivElement,
	AddEmployeeFormProps & WithStyles<typeof styles>
>(({ classes, className, ...paperProps }, ref) => {
	return (
		<Paper
			square
			className={clsx(classes.root, className)}
			{...paperProps}
			elevation={0}
			ref={ref}
		>
			<PersonalDetailsFormSection />
		</Paper>
	);
});

export default withStyles(styles, {
	classNamePrefix: generateClassName("AddEmployeeForm"),
})(AddEmployeeForm);
