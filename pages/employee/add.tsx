import * as React from "react";

// Components
import Section from "../../components/common/Section.Component";
import SectionHeader from "../../components/common/SectionHeader.Component";
import AddEmployeeForm from "../../components/employeePage/AddEmployeeForm.Component";
import StyledLoadingButton from "../../components/common/LoadingButton.Component";

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

export interface EmployeeIndexPageProps {}

const EmployeeIndexPage: React.FC<
	EmployeeIndexPageProps & WithStyles<typeof styles>
> = ({ classes }) => {
	// Router
	const router = useRouter();

	// States
	const [loading, setLoading] = React.useState<boolean>(false);

	// Handler
	const handleAddEmployee = () => {
		setLoading(true);
	};

	const handleCancel = () => {
		router.push("/employee");
	};
	return (
		<div>
			<Section>
				<SectionHeader text="Add staff" color="primary" />
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<AddEmployeeForm />
					</Grid>
					<Grid item xs={12}>
						<div className={classes.buttonContainer}>
							<StyledLoadingButton
								text="Add employee"
								loading={loading}
								fullWidth={false}
								onClick={handleAddEmployee}
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
	classNamePrefix: generateClassName("EmployeeIndexPage"),
})(EmployeeIndexPage);
