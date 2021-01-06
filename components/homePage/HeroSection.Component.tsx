import * as React from "react";

// Components
import Section from "../common/Section.Component";

// MUI
import {
	withStyles,
	WithStyles,
	createStyles,
	Theme,
} from "@material-ui/core/styles";

// Next
import Link from "next/link";

// Utility
import { generateClassName } from "../../domain/utility/utility";

// Components
import SectionHeader from "../common/SectionHeader.Component";
import RoundedButtonComponent from "../common/RoundedButton.Component";

export const styles = (theme: Theme) =>
	createStyles({
		root: {},
	});

export interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps & WithStyles<typeof styles>> = ({
	classes,
}) => {
	return (
		<Section className={classes.root}>
			<SectionHeader text="Manage rosters" color="primary" />
			<Link href="/about">
				<RoundedButtonComponent
					text="Learn more"
					color="secondary"
					variant="contained"
				/>
			</Link>
		</Section>
	);
};

export default withStyles(styles, {
	classNamePrefix: generateClassName("HeroSection"),
})(HeroSection);
