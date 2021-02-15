import * as React from "react";

// Next
import Link from "next/link";

// MUI
import {
	withStyles,
	WithStyles,
	createStyles,
	Theme,
} from "@material-ui/core/styles";
import { Grid, Paper, GridProps } from "@material-ui/core";

// Utility
import { generateClassName } from "../../domain/utility/utility";

// NPM
import clsx from "clsx";

// Components
import DetailsContainer from "../detailItems/DetailsContainer.Component";
import StoreDetailItem from "../detailItems/StoreDetailItem.Component";
import EmployeeDetailItem from "../detailItems/EmployeeDetailItem.Component";

// Interfaces
import { InitialEmployeeState } from "../../domain/common/interfaces/IEmployee";

export const styles = (theme: Theme) =>
	createStyles({
		root: {},
		paper: {
			cursor: "pointer",
			padding: theme.spacing(2),
			"&:hover": {
				boxShadow: theme.shadows[1],
			},
		},
		nextPaper: {
			marginTop: theme.spacing(2),
		},
	});

export interface OrganisationSummaryProps extends GridProps {}

const OrganisationSummary = React.forwardRef<
	HTMLDivElement,
	OrganisationSummaryProps & WithStyles<typeof styles>
>(({ classes, className, ...gridProps }, ref) => {
	return (
		<Grid
			item
			xs={12}
			md={8}
			{...gridProps}
			className={clsx(classes.root, className)}
			ref={ref}
		>
			<Link href="/location">
				<Paper elevation={0} className={classes.paper} square>
					<DetailsContainer title="Your stores">
						<StoreDetailItem />
					</DetailsContainer>
				</Paper>
			</Link>
			<Link href="/employee">
				<Paper
					elevation={0}
					className={clsx(classes.paper, classes.nextPaper)}
					square
				>
					<DetailsContainer title="Your staff">
						<EmployeeDetailItem
							employeeData={InitialEmployeeState}
						/>
					</DetailsContainer>
				</Paper>
			</Link>
		</Grid>
	);
});

export default withStyles(styles, {
	classNamePrefix: generateClassName("OrganisationSummary"),
})(OrganisationSummary);
