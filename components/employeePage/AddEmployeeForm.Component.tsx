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
import PersonalDetailsFormSection from "./PersonalDetailsFormSection.Component";
import ContactDetailsFormSection from "./ContactDetailsFormSection.Component";
import AddressDetailsFormSection from "./AddressDetailsFormSection.Component";

export const styles = (theme: Theme) =>
	createStyles({
		root: {},
	});

export interface AddEmployeeFormProps
	extends React.HTMLAttributes<HTMLFormElement> {}

const AddEmployeeForm = React.forwardRef<
	HTMLFormElement,
	AddEmployeeFormProps & WithStyles<typeof styles>
>(({ classes, className, ...formProps }, ref) => {
	return (
		<form
			className={clsx(className, classes.root)}
			{...formProps}
			ref={ref}
		>
			<PersonalDetailsFormSection />
			<AddressDetailsFormSection />
			<ContactDetailsFormSection />
		</form>
	);
});

export default withStyles(styles, {
	classNamePrefix: generateClassName("AddEmployeeForm"),
})(AddEmployeeForm);
