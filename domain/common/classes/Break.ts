import { generateSelectableLists } from "../../utility/utility";

// Interfaces
import ISelectableItem from "../interfaces/ISelectableItem";

export default class Break {
	public static breakDurations: string[] = [
		"10",
		"15",
		"20",
		"30",
		"45",
		"60",
	];

	public static breakTypes: string[] = ["Paid", "Unpaid"];

	public static getSelectableBreakDurations(): ISelectableItem[] {
		return generateSelectableLists(Break.breakDurations, "minutes");
	}

	public static getSelectableBreakTypes(): ISelectableItem[] {
		return generateSelectableLists(Break.breakTypes);
	}
}
