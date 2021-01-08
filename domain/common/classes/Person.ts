import {
	generateSelectableItem,
	sortAlphabetically,
} from "../../utility/utility";
import ISelectableItem from "../interfaces/ISelectableItem";

export default class Person {
	public static Genders: string[] = [
		"Female",
		"Male",
		"Non-binary",
		"Undisclosed",
	];

	public static States: string[] = [
		"Queensland",
		"Tasmania",
		"South Australia",
		"New South Wales",
		"Australian Capital Territory",
		"Western Australia",
		"Northern Territory",
	];

	public static PreferredContactMethods: string[] = [
		"Home",
		"Mobile",
		"Email",
		"Fax",
		"SMS",
	];

	public static getSelectableGenders(): ISelectableItem[] {
		const array: ISelectableItem[] = [];

		Person.Genders.forEach((gender: string) => {
			array.push(generateSelectableItem(gender));
		});

		return array;
	}

	public static getSelectableStates(): ISelectableItem[] {
		const array: ISelectableItem[] = [];

		Person.States.sort(sortAlphabetically).forEach((gender: string) => {
			array.push(generateSelectableItem(gender));
		});

		return array;
	}

	public static getSelectablePreferredContactMethods(): ISelectableItem[] {
		const array: ISelectableItem[] = [];

		Person.PreferredContactMethods.sort(sortAlphabetically).forEach(
			(gender: string) => {
				array.push(generateSelectableItem(gender));
			}
		);

		return array;
	}
}
