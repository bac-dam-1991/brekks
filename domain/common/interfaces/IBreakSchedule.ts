import IBreakItem from "./IBreakItem";

export default interface IBreakSchedule {
	minimumShiftDuration: number;
	breakItems: IBreakItem[];
}

export const InitialBreakScheduleState: IBreakSchedule = {
	minimumShiftDuration: 0,
	breakItems: [],
};
