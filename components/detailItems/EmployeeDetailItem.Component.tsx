import * as React from "react";

// MUI
import {
	withStyles,
	WithStyles,
	createStyles,
	Theme,
} from "@material-ui/core/styles";

// Utility
import { generateClassName } from "../../domain/utility/utility";

// NPM
import DetailItem from "./DetailItem.Component";
import IEmployee from "../../domain/common/interfaces/IEmployee";
import Employee from "../../domain/common/classes/employee";

export const styles = (theme: Theme) =>
	createStyles({
		root: {},
		caption: {
			color: "#ADADAD",
		},
	});

export interface EmployeeDetailItemProps {
	employeeData: IEmployee;
}

const EmployeeDetailItem = React.forwardRef<
	HTMLDivElement,
	EmployeeDetailItemProps & WithStyles<typeof styles>
>(({ employeeData }, ref) => {
	return (
		<React.Fragment>
			<DetailItem
				detail={{
					key: "Full name",
					value: Employee.generateFullName(employeeData, true),
				}}
			/>
			<DetailItem
				detail={{
					key: "Role",
					value: employeeData.role,
				}}
			/>
		</React.Fragment>
	);
});

export default withStyles(styles, {
	classNamePrefix: generateClassName("EmployeeDetailItem"),
})(EmployeeDetailItem);
