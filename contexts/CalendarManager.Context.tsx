import * as React from "react";

// Types
import { FirstDayOfWeekType } from "../domain/common/types/FirstDayOfWeekType";
import { ThemeColor } from "../domain/common/types/ThemeColorType";

export interface ICalendarContext {
	firstDayOfWeek: FirstDayOfWeekType;
	toggleFirstDayOfWeek: () => void;
	expandAll: boolean;
	toggleExpandAll: () => void;
	color: ThemeColor;
}

export const CalendarContext = React.createContext<ICalendarContext>({
	firstDayOfWeek: "Monday",
	toggleFirstDayOfWeek: () => {},
	expandAll: false,
	toggleExpandAll: () => {},
	color: "default",
});

export interface CalendarManagerProps {
	color: ThemeColor;
}

const CalendarManager: React.FC<CalendarManagerProps> = ({
	children,
	color,
}) => {
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
				color,
			}}
		>
			{children}
		</CalendarContext.Provider>
	);
};

export const useCalendarManager = () => React.useContext(CalendarContext);

export default CalendarManager;
