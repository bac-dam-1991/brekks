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
import ContactDetailsFormSection from "../common/ContactDetailsFormSection.Component";
import AddressDetailsFormSection from "../common/AddressDetailsFormSection.Component";
import BusinessDetailsFormSection from "./BusinessDetailsFormSection.Component";

export const styles = (theme: Theme) =>
	createStyles({
		root: {},
	});

export interface AddLocationFormProps
	extends React.HTMLAttributes<HTMLFormElement> {}

const AddLocationForm = React.forwardRef<
	HTMLFormElement,
	AddLocationFormProps & WithStyles<typeof styles>
>(({ classes, className, ...formProps }, ref) => {
	return (
		<form
			className={clsx(className, classes.root)}
			{...formProps}
			ref={ref}
		>
			<BusinessDetailsFormSection />
			<ContactDetailsFormSection type="Business" />
			<AddressDetailsFormSection addressType="Business" />
		</form>
	);
});

export default withStyles(styles, {
	classNamePrefix: generateClassName("AddLocationForm"),
})(AddLocationForm);
