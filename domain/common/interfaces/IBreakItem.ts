import BreakType from "../types/BreakType";

export default interface IBreakItem {
	key: string;
	duration: number;
	numberOfBreaks: number;
	type: BreakType;
}

export const InitialBreakItemState: IBreakItem = {
	key: "",
	duration: 0,
	numberOfBreaks: 0,
	type: "Paid",
};
