import IEmployee from "../interfaces/IEmployee";

export default class Employee {
	public static generateFullName(
		employeeData: IEmployee,
		withTitle: boolean
	): string {
		const fullName: string = `${employeeData.familyName.toUpperCase()}, ${
			employeeData.givenName
		} ${employeeData.middleName}`;

		return withTitle ? `${employeeData.title} ${fullName}` : fullName;
	}
}
