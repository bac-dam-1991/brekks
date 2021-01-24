import * as React from "react";

// Components
import CalendarContainer from "../calendar/CalendarContainer.Component";
import Section from "../common/Section.Component";

// MUI
import {
	withStyles,
	WithStyles,
	createStyles,
	Theme,
} from "@material-ui/core/styles";
import {
	filterByAttributeOf,
	generateClassName,
} from "../../domain/utility/utility";
import IStaticContent from "../../domain/common/interfaces/IStaticContent";
import { Typography, TypographyProps } from "@material-ui/core";
import StaticContent from "../../domain/common/classes/StaticContent";
import navigations from "../../domain/config/navigations";
import INavigation from "../../domain/common/interfaces/INavigation";

export const styles = (theme: Theme) => createStyles({ root: {} });

export interface AboveFooterSectionProps {}

const AboveFooterSection: React.FC<
	AboveFooterSectionProps & WithStyles<typeof styles>
> = ({}) => {
	// const staticContents: IStaticContent[] = [
	// 	{
	// 		content: (
	// 			<Typography variant="h6" color="inherit">
	// 				About
	// 			</Typography>
	// 		),
	// 		link: "/about",
	// 		panelIndex: 9,
	// 	},
	// 	{
	// 		content: (
	// 			<Typography variant="h6" color="inherit">
	// 				Signup
	// 			</Typography>
	// 		),
	// 		link: "/signup",
	// 		panelIndex: 11,
	// 	},
	// ];

	const staticContents: IStaticContent[] = StaticContent.generateFromArray(
		navigations.filter((item: INavigation) =>
			filterByAttributeOf(item, "inFooter", true)
		),
		[9, 11, 23, 25],
		{ content: "displayText", link: "link" },
		["primary", "primary", "secondary", "primary"]
	);

	return (
		<Section>
			<CalendarContainer
				color="primary"
				staticContents={staticContents}
			/>
		</Section>
	);
};

export default withStyles(styles, {
	classNamePrefix: generateClassName("AboveFooterSection"),
})(AboveFooterSection);
