import moment from "moment";

export default interface ICalendarData {
	year: number;
	month: number;
}

export const InitialCalendarDataState: ICalendarData = {
	year: parseInt(moment().format("YYYY")),
	month: parseInt(moment().format("M")),
};
