import BreakType from "../types/BreakType";

export default interface IBreak {
	scheduledStart: string;
	scheduledEnd: string;
	actualStart: string;
	actualEnd: string;
	duration: number;
	type: BreakType;
}

export const InitialBreakState: IBreak = {
	scheduledStart: "",
	scheduledEnd: "",
	actualStart: "",
	actualEnd: "",
	duration: 15,
	type: "Paid",
};
