// NPM
import moment from "moment";
import ICalendarHead from "../interfaces/ICalendarHead";

// Types
import { FirstDayOfWeekType } from "../types/FirstDayOfWeekType";

export default class Calendar {
	public static getDaysOfWeek(
		startingDay: FirstDayOfWeekType
	): ICalendarHead[] {
		const calendarHeads: ICalendarHead[] = [];

		const currentMoment: moment.Moment = moment().isoWeekday(startingDay);

		for (let i = 0; i < 7; i++) {
			const currentHead: ICalendarHead = {
				discriminator: "ICalendarHead",
				text: currentMoment.format("dddd"),
			};

			calendarHeads.push(currentHead);

			currentMoment.add(1, "day");
		}

		return calendarHeads;
	}
}
