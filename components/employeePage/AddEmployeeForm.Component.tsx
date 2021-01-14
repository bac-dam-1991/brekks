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
import ContactDetailsFormSection from "../common/ContactDetailsFormSection.Component";
import AddressDetailsFormSection from "../common/AddressDetailsFormSection.Component";
import EmploymentDetailsFormSection from "./EmploymentDetailsFormSection.Component";

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
	const [samePostalAddress, setSamePostalAddress] = React.useState<boolean>(
		true
	);

	// handlers
	const handleSamePostalAddressChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setSamePostalAddress(event.target.checked);
	};

	return (
		<form
			className={clsx(className, classes.root)}
			{...formProps}
			ref={ref}
		>
			<PersonalDetailsFormSection />
			<ContactDetailsFormSection type="Personal" />
			<AddressDetailsFormSection
				addressType="Residential"
				onSamePostalAddressChange={handleSamePostalAddressChange}
				samePostalAddress={samePostalAddress}
			/>
			{!samePostalAddress && (
				<AddressDetailsFormSection addressType="Postal" />
			)}
			<EmploymentDetailsFormSection />
		</form>
	);
});

export default withStyles(styles, {
	classNamePrefix: generateClassName("AddEmployeeForm"),
})(AddEmployeeForm);
