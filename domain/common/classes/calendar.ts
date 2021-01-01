// NPM
import moment from "moment";

// Interfaces
import ICalendarDay from "../interfaces/ICalendarDay";
import ICalendarHead from "../interfaces/ICalendarHead";

// Types
import { FirstDayOfWeekType } from "../types/FirstDayOfWeekType";

// Classes
import Utility from "./utility";

export default class Calendar {
	public static DEFAULT_DATE_FORMAT = "YYYY-MM-DD";
	public static FULL_GRID_DAY_COUNT = 42; // 7 columns x 6 rows

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

	/**
	 *
	 * @param year - desired year in YYYY format
	 * @param month - desired month (not zero-padded)
	 * @param date - desired date (not zero-padded)
	 * @return date string in YYYY-MM-DD format
	 */
	public static formatDate(
		year: number,
		month: number,
		date: number
	): string {
		const monthStr: string = Utility.zeroPad(month);
		const dateStr: string = Utility.zeroPad(date);
		return `${year}-${monthStr}-${dateStr}`;
	}

	public static getFirstDateOfCalendarGrid(
		year: number,
		month: number,
		startingDay: FirstDayOfWeekType
	): string {
		const date: string = Calendar.formatDate(year, month, 1);

		const selectedMoment: moment.Moment = moment(date);

		const isoWeekDay: number = selectedMoment.isoWeekday();

		const stepCount =
			startingDay === "Monday" ? isoWeekDay - 1 : isoWeekDay;

		return selectedMoment
			.subtract(stepCount, "days")
			.format(this.DEFAULT_DATE_FORMAT);
	}

	public static isToday(date: string): boolean {
		return (
			moment(date).format(Calendar.DEFAULT_DATE_FORMAT) ===
			moment().format(Calendar.DEFAULT_DATE_FORMAT)
		);
	}

	public static generateCalendar(
		year: number,
		month: number,
		startingDay: FirstDayOfWeekType
	): ICalendarDay[] {
		const firstDate: string = Calendar.getFirstDateOfCalendarGrid(
			year,
			month,
			startingDay
		);

		const firstDateMoment: moment.Moment = moment(firstDate);

		const days: ICalendarDay[] = [];

		for (let i = 0; i < Calendar.FULL_GRID_DAY_COUNT; i++) {
			const currentDay: ICalendarDay = Calendar.generateCalendarBodyData(
				firstDateMoment.format(Calendar.DEFAULT_DATE_FORMAT),
				month
			);

			days.push(currentDay);

			firstDateMoment.add(1, "day");
		}

		return days;
	}

	public static generateCalendarBodyData(
		date: string,
		month: number
	): ICalendarDay {
		const dateMoment: moment.Moment = moment(date);

		return {
			discriminator: "ICalendarDay",
			fullDate: dateMoment.format(Calendar.DEFAULT_DATE_FORMAT),
			ofCurrentMonth: dateMoment.month() === month - 1,
		};
	}
}
