import * as React from "react";
import IStaticContent from "../interfaces/IStaticContent";

export default class StaticContent {
	public static generateFromArray<T extends {}>(
		array: T[],
		indexList: number[],
		mapping: { content: keyof T; link: keyof T },
		themeArray?: ("primary" | "secondary")[]
	): IStaticContent[] {
		const staticContents: IStaticContent[] = [];

		array.forEach((item: T, index: number) => {
			const content: IStaticContent = {
				content: item[mapping.content],
				panelIndex: indexList[index],
				link: (item[mapping.link] as unknown) as string,
				theme: themeArray ? themeArray[index] : "primary",
			};

			staticContents.push(content);
		});

		return staticContents;
	}
}
