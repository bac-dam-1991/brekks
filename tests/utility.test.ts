import {
	generateSelectableItem,
	generateSelectAttributes,
} from "../domain/utility/utility";

test("select attributes are generated properly", () => {
	const [id, label] = generateSelectAttributes("Full name");
	expect(id).toBe("full-name-select-id");
	expect(label).toBe("full-name-select-label");
});

test("selectable item object is generated properly", () => {
	const item = generateSelectableItem("New South Wales");
	expect(item).toStrictEqual({
		key: "new-south-wales",
		value: "New South Wales",
		text: "New South Wales",
	});
});
