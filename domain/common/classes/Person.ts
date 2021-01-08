import { generateSelectableItem } from "../../utility/utility";
import ISelectableItem from "../interfaces/ISelectableItem";

export default class Person {
	public static Genders: string[] = [
		"Female",
		"Male",
		"Non-binary",
		"Undisclosed",
	];

	public static getSelectableGenders(): ISelectableItem[] {
		const array: ISelectableItem[] = [];

		Person.Genders.forEach((gender: string) => {
			array.push(generateSelectableItem(gender));
		});

		return array;
	}
}
