export default interface ICalendarHead {
	discriminator: "ICalendarHead";
	text: string;
}

export const instanceOfICalendarHead = (
	object: any
): object is ICalendarHead => {
	return object.discriminator === "ICalendarHead";
};

export const MOCK_CALENDAR_HEAD_EN_MON: ICalendarHead[] = [
	{
		discriminator: "ICalendarHead",
		text: "Monday",
	},
	{
		discriminator: "ICalendarHead",
		text: "Tuesday",
	},
	{
		discriminator: "ICalendarHead",
		text: "Wednesday",
	},
	{
		discriminator: "ICalendarHead",
		text: "Thursday",
	},
	{
		discriminator: "ICalendarHead",
		text: "Friday",
	},
	{
		discriminator: "ICalendarHead",
		text: "Saturday",
	},
	{
		discriminator: "ICalendarHead",
		text: "Sunday",
	},
];

export const MOCK_CALENDAR_HEAD_EN_SUN: ICalendarHead[] = [
	{
		discriminator: "ICalendarHead",
		text: "Sunday",
	},
	{
		discriminator: "ICalendarHead",
		text: "Monday",
	},
	{
		discriminator: "ICalendarHead",
		text: "Tuesday",
	},
	{
		discriminator: "ICalendarHead",
		text: "Wednesday",
	},
	{
		discriminator: "ICalendarHead",
		text: "Thursday",
	},
	{
		discriminator: "ICalendarHead",
		text: "Friday",
	},
	{
		discriminator: "ICalendarHead",
		text: "Saturday",
	},
];
