// Classes
import Calendar from "../domain/common/classes/Calendar";

// Interfaces
import ICalendarDay from "../domain/common/interfaces/ICalendarDay";
import {
	MOCK_CALENDAR_HEAD_EN_MON,
	MOCK_CALENDAR_HEAD_EN_SUN,
} from "../domain/common/interfaces/ICalendarHead";

test("create calendar head array starting on Sunday.", () => {
	expect(Calendar.getDaysOfWeek("Sunday")).toEqual(MOCK_CALENDAR_HEAD_EN_SUN);
});

test("create calendar head array starting on Monday.", () => {
	expect(Calendar.getDaysOfWeek("Monday")).toEqual(MOCK_CALENDAR_HEAD_EN_MON);
});

test("first day of calendar grid starting on Monday is correct.", () => {
	expect(Calendar.getFirstDateOfCalendarGrid(2021, 1, "Monday")).toBe(
		"2020-12-28"
	);
});

test("first day of calendar grid starting on Sunday is correct.", () => {
	expect(Calendar.getFirstDateOfCalendarGrid(2021, 1, "Sunday")).toBe(
		"2020-12-27"
	);
});

test("date is formatted properly.", () => {
	expect(Calendar.formatDate(2021, 12, 1)).toBe("2021-12-01");
});

test("calendar body data is generated correctly.", () => {
	const mock: ICalendarDay = {
		discriminator: "ICalendarDay",
		fullDate: "2021-01-01",
		ofCurrentMonth: true,
	};

	expect(Calendar.generateCalendarBodyData("2021-01-01", 1)).toStrictEqual(
		mock
	);
});
