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
import RoleDetailsFormSection from "./RoleDetailsFormSection.Component";

export const styles = (theme: Theme) =>
	createStyles({
		root: {},
	});

export interface AddRoleFormProps
	extends React.HTMLAttributes<HTMLFormElement> {}

const AddRoleForm = React.forwardRef<
	HTMLFormElement,
	AddRoleFormProps & WithStyles<typeof styles>
>(({ classes, className, ...formProps }, ref) => {
	return (
		<form
			className={clsx(className, classes.root)}
			{...formProps}
			ref={ref}
		>
			<RoleDetailsFormSection />
		</form>
	);
});

export default withStyles(styles, {
	classNamePrefix: generateClassName("AddRoleForm"),
})(AddRoleForm);
