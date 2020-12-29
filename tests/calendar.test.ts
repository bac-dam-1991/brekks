import Calendar from "../domain/common/classes/calendar";
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
