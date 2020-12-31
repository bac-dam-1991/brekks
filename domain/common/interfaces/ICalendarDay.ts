export default interface ICalendarDay {
	discriminator: "ICalendarDay";
	fullDate: string;
	ofCurrentMonth: boolean;
}

export const instanceOfICalendarDay = (object: any): object is ICalendarDay => {
	return object.discriminator === "ICalendarDay";
};
