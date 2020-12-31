import * as React from "react";
import { FirstDayOfWeekType } from "../domain/common/types/FirstDayOfWeekType";

export interface ICalendarContext {
	firstDayOfWeek: FirstDayOfWeekType;
	toggleFirstDayOfWeek: () => void;
	expandAll: boolean;
	toggleExpandAll: () => void;
}

export const CalendarContext = React.createContext<ICalendarContext>({
	firstDayOfWeek: "Monday",
	toggleFirstDayOfWeek: () => {},
	expandAll: false,
	toggleExpandAll: () => {},
});

export interface CalendarManagerProps {}

const CalendarManager: React.FC<CalendarManagerProps> = ({ children }) => {
	// States
	const [
		firstDayOfWeek,
		setFirstDayOfWeek,
	] = React.useState<FirstDayOfWeekType>("Monday");
	const [expandAll, setExpandAll] = React.useState<boolean>(false);

	// Handler
	const toggleFirstDayOfWeek = () => {
		setFirstDayOfWeek((prevState: FirstDayOfWeekType) =>
			firstDayOfWeek === "Monday" ? "Sunday" : "Monday"
		);
	};

	const toggleExpandAll = () => {
		setExpandAll((prevState: boolean) => !prevState);
	};

	return (
		<CalendarContext.Provider
			value={{
				firstDayOfWeek,
				toggleFirstDayOfWeek,
				expandAll,
				toggleExpandAll,
			}}
		>
			{children}
		</CalendarContext.Provider>
	);
};

export const useCalendar = () => React.useContext(CalendarContext);

export default CalendarManager;
