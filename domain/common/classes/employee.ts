import { generateSelectableLists } from "../../utility/utility";
import IEmployee from "../interfaces/IEmployee";
import ISelectableItem from "../interfaces/ISelectableItem";

export default class Employee {
	public static EmploymentType: string[] = [
		"Full-time",
		"Part-time",
		"Casual",
	];

	public static generateFullName(
		employeeData: IEmployee,
		withTitle: boolean
	): string {
		const fullName: string = `${employeeData.familyName.toUpperCase()}, ${
			employeeData.givenName
		} ${employeeData.middleName}`;

		return withTitle ? `${employeeData.title} ${fullName}` : fullName;
	}

	public static getEmploymentTypes(): ISelectableItem[] {
		return generateSelectableLists(Employee.EmploymentType);
	}
}
