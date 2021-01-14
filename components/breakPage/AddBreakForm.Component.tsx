import * as React from "react";

// MUI
import {
	withStyles,
	WithStyles,
	createStyles,
	Theme,
} from "@material-ui/core/styles";

// NPM
import clsx from "clsx";

// Utility
import { generateClassName } from "../../domain/utility/utility";

// Components
import BreakDetailsFormSection from "./BreakDetailsFormSection.Component";

export const styles = (theme: Theme) =>
	createStyles({
		root: {},
	});

export interface AddBreakFormProps
	extends React.HTMLAttributes<HTMLFormElement> {}

const AddBreakForm = React.forwardRef<
	HTMLFormElement,
	AddBreakFormProps & WithStyles<typeof styles>
>(({ classes, className, ...formProps }, ref) => {
	return (
		<form
			className={clsx(className, classes.root)}
			{...formProps}
			ref={ref}
		>
			<BreakDetailsFormSection />
		</form>
	);
});

export default withStyles(styles, {
	classNamePrefix: generateClassName("AddBreakForm"),
})(AddBreakForm);
