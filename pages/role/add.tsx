import * as React from "react";

// Next
import { useRouter } from "next/router";

// Components
import Section from "../../components/common/Section.Component";
import SectionHeader from "../../components/common/SectionHeader.Component";
import AddRoleForm from "../../components/rolePage/AddRoleForm.Component";
import StyledLoadingButton from "../../components/common/LoadingButton.Component";

// MUI
import { Grid, Button } from "@material-ui/core";
import {
	createStyles,
	Theme,
	WithStyles,
	withStyles,
} from "@material-ui/core/styles";

// Utility
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

export interface RoleIndexPageProps {}

const RoleIndexPage: React.FC<
	RoleIndexPageProps & WithStyles<typeof styles>
> = ({ classes }) => {
	// Router
	const router = useRouter();

	// States
	const [loading, setLoading] = React.useState<boolean>(false);

	// Handler
	const handleAddRole = () => {
		setLoading(true);
	};

	const handleCancel = () => {
		router.push("/role");
	};

	return (
		<div>
			<Section>
				<SectionHeader text="Add role" color="primary" />
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<AddRoleForm />
					</Grid>
					<Grid item xs={12}>
						<div className={classes.buttonContainer}>
							<StyledLoadingButton
								text="Create role"
								loading={loading}
								fullWidth={false}
								onClick={handleAddRole}
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
	classNamePrefix: generateClassName("RoleIndexPage"),
})(RoleIndexPage);
