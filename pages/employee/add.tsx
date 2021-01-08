import * as React from "react";

// Components
import Section from "../../components/common/Section.Component";
import SectionHeader from "../../components/common/SectionHeader.Component";
import AddEmployeeForm from "../../components/employeePage/AddEmployeeForm.Component";

export interface EmployeeIndexPageProps {}

const EmployeeIndexPage: React.FC<EmployeeIndexPageProps> = () => {
	return (
		<div>
			<Section>
				<SectionHeader text="Add staff" color="primary" />
				<AddEmployeeForm />
			</Section>
		</div>
	);
};

export default EmployeeIndexPage;
