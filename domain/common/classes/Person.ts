import {
	generateSelectableItem,
	generateSelectableLists,
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
		return generateSelectableLists(Person.Genders);
	}

	public static getSelectableStates(): ISelectableItem[] {
		return generateSelectableLists(Person.States);
	}

	public static getSelectablePreferredContactMethods(): ISelectableItem[] {
		return generateSelectableLists(Person.PreferredContactMethods);
	}
}
