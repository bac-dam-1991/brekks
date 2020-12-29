export default interface ICalendarBody {
	discriminator: "ICalendarBody";
	date: string;
}

export const instanceOfICalendarBody = (
	object: any
): object is ICalendarBody => {
	return object.discriminator === "ICalendarBody";
};
