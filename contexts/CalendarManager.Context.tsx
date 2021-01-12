import * as React from "react";

// Interfaces
import ICalendarData, {
	InitialCalendarDataState,
} from "../domain/common/interfaces/ICalendarData";

// Types
import { FirstDayOfWeekType } from "../domain/common/types/FirstDayOfWeekType";
import { ThemeColor } from "../domain/common/types/ThemeColorType";

export interface ICalendarContext {
	firstDayOfWeek: FirstDayOfWeekType;
	toggleFirstDayOfWeek: () => void;
	expandAll: boolean;
	toggleExpandAll: () => void;
	color: ThemeColor;
	calendarData: ICalendarData;
	handleCalendarDataChange: (newData: ICalendarData) => void;
	addShiftDialogOpen: boolean;
	handleAddShiftDialogOpenChange: (val: boolean) => void;
}

export const CalendarContext = React.createContext<ICalendarContext>({
	firstDayOfWeek: "Monday",
	toggleFirstDayOfWeek: () => {},
	expandAll: false,
	toggleExpandAll: () => {},
	color: "default",
	calendarData: InitialCalendarDataState,
	handleCalendarDataChange: (newData: ICalendarData) => {},
	addShiftDialogOpen: false,
	handleAddShiftDialogOpenChange: (val: boolean) => {},
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
	const [calendarData, setCalendarData] = React.useState<ICalendarData>(
		InitialCalendarDataState
	);
	const [addShiftDialogOpen, setAddShiftDialogOpen] = React.useState<boolean>(
		false
	);

	// Handler
	const toggleFirstDayOfWeek = () => {
		setFirstDayOfWeek((prevState: FirstDayOfWeekType) =>
			firstDayOfWeek === "Monday" ? "Sunday" : "Monday"
		);
	};

	const toggleExpandAll = () => {
		setExpandAll((prevState: boolean) => !prevState);
	};

	const handleCalendarDataChange = (newData: ICalendarData) => {
		setCalendarData(newData);
	};

	const handleAddShiftDialogOpenChange = (val: boolean) => {
		setAddShiftDialogOpen(val);
	};

	return (
		<CalendarContext.Provider
			value={{
				firstDayOfWeek,
				toggleFirstDayOfWeek,
				expandAll,
				toggleExpandAll,
				color,
				calendarData,
				handleCalendarDataChange,
				addShiftDialogOpen,
				handleAddShiftDialogOpenChange,
			}}
		>
			{children}
		</CalendarContext.Provider>
	);
};

export const useCalendarManager = () => React.useContext(CalendarContext);

export default CalendarManager;
