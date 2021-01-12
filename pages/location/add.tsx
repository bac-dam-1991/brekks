import * as React from "react";

// Components
import Section from "../../components/common/Section.Component";
import SectionHeader from "../../components/common/SectionHeader.Component";
import StyledLoadingButton from "../../components/common/LoadingButton.Component";
import AddLocationForm from "../../components/locationPage/AddLocationForm.Component";

// MUI
import { Grid, Button } from "@material-ui/core";
import {
	createStyles,
	Theme,
	WithStyles,
	withStyles,
} from "@material-ui/core/styles";

// Next
import { useRouter } from "next/router";
import { generateClassName } from "../../domain/utility/utility";

export const styles = (theme: Theme) =>
	createStyles({
		buttonContainer: {
			display: "flex",
			flexDirection: "row-reverse",
		},
		addButton: {
			marginLeft: theme.spacing(1),
		},
	});

export interface LocationAddPageProps {}

const LocationAddPage: React.FC<
	LocationAddPageProps & WithStyles<typeof styles>
> = ({ classes }) => {
	// Router
	const router = useRouter();

	// States
	const [loading, setLoading] = React.useState<boolean>(false);

	// Handler
	const handleAddLocation = () => {
		setLoading(true);
	};

	const handleCancel = () => {
		router.push("/location");
	};
	return (
		<div>
			<Section>
				<SectionHeader text="Add location" color="primary" />
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<AddLocationForm />
					</Grid>
					<Grid item xs={12}>
						<div className={classes.buttonContainer}>
							<StyledLoadingButton
								text="Add location"
								loading={loading}
								fullWidth={false}
								onClick={handleAddLocation}
								square
								className={classes.addButton}
							/>
							<Button onClick={handleCancel}>Cancel</Button>
						</div>
					</Grid>
				</Grid>
			</Section>
		</div>
	);
};

export default withStyles(styles, {
	classNamePrefix: generateClassName("LocationAddPage"),
})(LocationAddPage);
