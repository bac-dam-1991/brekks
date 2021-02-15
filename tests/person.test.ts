import Person from "../domain/common/classes/Person";

test("Selectable genders list is created properly", () => {
	const array = Person.getSelectableGenders();

	expect(array).toStrictEqual([
		{ key: "male", value: "Male", text: "Male" },
		{ key: "female", value: "Female", text: "Female" },
		{ key: "non-binary", value: "Non-binary", text: "Non-binary" },
		{ key: "undisclosed", value: "Undisclosed", text: "Undisclosed" },
	]);
});
