import ISelectableItem from "../common/interfaces/ISelectableItem";

export const generateClassName = (name: string): string => {
	return "BTD-Tech-" + name;
};

export const generateSelectAttributes = (name: string): string[] => {
	const id: string = name + " select id";
	const label: string = name + " select label";

	const regex = new RegExp(" ", "g");

	return [
		id.replace(regex, "-").toLowerCase(),
		label.replace(regex, "-").toLowerCase(),
	];
};

export const generateSelectableItem = (
	value: string,
	textSuffix?: string
): ISelectableItem => {
	const key: string = value.toLowerCase().replace(new RegExp(" ", "g"), "-");
	return {
		key,
		value,
		text: !!textSuffix ? value + " " + textSuffix : value,
	};
};

export const generateSelectableLists = (
	values: string[],
	textSuffix?: string
): ISelectableItem[] => {
	const list: ISelectableItem[] = [];

	values
		.sort(sortAlphabetically)
		.forEach((val: string) =>
			list.push(generateSelectableItem(val, textSuffix))
		);

	return list;
};

export const sortAlphabetically = (a: string, b: string): number => {
	if (a > b) return 1;
	if (b > a) return -1;

	return 0;
};

export const sortByAttributeOf = <T extends {}>(
	a: T,
	b: T,
	key: keyof T
): number => {
	const aVal = a[key];
	const bVal = b[key];

	if (aVal > bVal) return 1;
	if (bVal > aVal) return -1;

	return 0;
};

export const filterByAttributeOf = <T extends {}>(
	item: T,
	key: keyof T,
	value: any,
	not?: boolean
): boolean => {
	if (not) return item[key] !== value;
	return item[key] === value;
};
