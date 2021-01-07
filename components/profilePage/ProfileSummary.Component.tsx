import * as React from "react";

// MUI
import {
	withStyles,
	WithStyles,
	createStyles,
	Theme,
} from "@material-ui/core/styles";
import { Grid, Paper, GridProps, Typography } from "@material-ui/core";

// Utility
import { generateClassName } from "../../domain/utility/utility";

// NPM
import clsx from "clsx";
import DetailsContainer from "../detailItems/DetailsContainer.Component";
import DetailItem from "../detailItems/DetailItem.Component";

export const styles = (theme: Theme) =>
	createStyles({
		root: {},
		paper: {
			padding: theme.spacing(2),
			"&:hover": {
				boxShadow: theme.shadows[1],
			},
		},
	});

export interface ProfileSummaryProps extends GridProps {}

const ProfileSummary = React.forwardRef<
	HTMLDivElement,
	ProfileSummaryProps & WithStyles<typeof styles>
>(({ classes, className, ...gridProps }, ref) => {
	return (
		<Grid
			item
			xs={12}
			md={4}
			{...gridProps}
			className={clsx(classes.root, className)}
		>
			<Paper elevation={0} className={classes.paper} square>
				<DetailsContainer title="Your details">
					<DetailItem
						detail={{
							value: "JNewuser123",
							key: "Username",
						}}
					/>

					<DetailItem
						detail={{
							key: "Full name",
							value: "John Newuser",
						}}
					/>
					<DetailItem
						detail={{
							key: "Email",
							value: "new.user.2021@gmail.com",
						}}
					/>
					<DetailItem
						detail={{
							key: "User role",
							value: "Account owner",
						}}
					/>
					<DetailItem
						detail={{
							key: "Mobile",
							value: "0401 123 456",
						}}
					/>
					<DetailItem
						detail={{
							key: "Date joined",
							value: "Mon 4th Jan 2021",
						}}
					/>
				</DetailsContainer>
			</Paper>
		</Grid>
	);
});

export default withStyles(styles, {
	classNamePrefix: generateClassName("ProfileSummary"),
})(ProfileSummary);
