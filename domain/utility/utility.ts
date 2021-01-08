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

export const generateSelectableItem = (value: string): ISelectableItem => {
	const key: string = value.toLowerCase().replace(new RegExp(" ", "g"), "-");
	return { key, value, text: value };
};
