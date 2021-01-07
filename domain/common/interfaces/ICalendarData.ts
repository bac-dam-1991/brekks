// NPM
import moment from "moment";

// Classes
import Calendar from "../classes/Calendar";

export default interface ICalendarData {
	year: number;
	month: number;
	fullDate: string;
}

export const InitialCalendarDataState: ICalendarData = {
	year: parseInt(moment().format("YYYY")),
	month: parseInt(moment().format("M")),
	fullDate: moment().format(Calendar.DEFAULT_DATE_FORMAT),
};
