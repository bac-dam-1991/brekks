import * as React from "react";

// MUI
import {
	withStyles,
	WithStyles,
	createStyles,
	Theme,
} from "@material-ui/core/styles";

// Components
import Section from "../common/Section.Component";
import SectionHeader from "../common/SectionHeader.Component";

// Utility
import { generateClassName } from "../../domain/utility/utility";

export const styles = (theme: Theme) =>
	createStyles({
		root: {},
	});

export interface FeatureSectionProps {}

const FeatureSection: React.FC<
	FeatureSectionProps & WithStyles<typeof styles>
> = ({ classes }) => {
	return (
		<Section className={classes.root}>
			<SectionHeader
				text="Efficiency at your finger tips"
				color="primary"
			/>
		</Section>
	);
};

export default withStyles(styles, {
	classNamePrefix: generateClassName("FeatureSection"),
})(FeatureSection);
