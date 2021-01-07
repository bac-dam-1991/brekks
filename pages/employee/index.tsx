import * as React from "react";

// Components
import PageToolbar from "../../components/common/PageToolbar.Component";
import EmployeeUtilityToolbar from "../../components/employeePage/EmployeeUtilityToolbar.Component";

export interface EmployeeIndexPageProps {}

const EmployeeIndexPage: React.FC<EmployeeIndexPageProps> = () => {
	return (
		<div>
			<PageToolbar>
				<EmployeeUtilityToolbar />
			</PageToolbar>
		</div>
	);
};

export default EmployeeIndexPage;
