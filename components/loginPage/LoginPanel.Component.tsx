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
import {
	PaperProps,
	Paper,
	TextField,
	Grid,
	Typography,
} from "@material-ui/core";

// Utility
import { generateClassName } from "../../domain/utility/utility";

// NPM
import clsx from "clsx";

// Components
import StyledPasswordInput from "../common/PasswordInput.Component";
import StyledLoadingButton from "../common/LoadingButton.Component";

// Next
import { useRouter } from "next/router";

export const styles = (theme: Theme) =>
	createStyles({
		root: {
			padding: theme.spacing(5),
			margin: theme.spacing(5, "auto"),
			maxWidth: 400,
			"&:hover": {
				boxShadow: theme.shadows[2],
			},
		},
	});

export interface LoginPanelProps extends PaperProps {}

const LoginPanel = React.forwardRef<
	HTMLDivElement,
	LoginPanelProps & WithStyles<typeof styles>
>(({ classes, className, ...paperProps }, ref) => {
	const router = useRouter();

	const handleLogin = () => {
		router.push("/profile");
	};

	return (
		<Paper
			square
			elevation={0}
			ref={ref}
			{...paperProps}
			className={clsx(classes.root, className)}
		>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<TextField
						label="Email address"
						variant="outlined"
						color="secondary"
						fullWidth
					/>
				</Grid>
				<Grid item xs={12}>
					<StyledPasswordInput label="Password" color="secondary" />
				</Grid>
				<Grid item xs={12}>
					<StyledLoadingButton
						text="Login"
						loading={false}
						onClick={handleLogin}
					/>
				</Grid>
				<Grid item xs={12}>
					<Typography variant="caption" align="right" display="block">
						Need an account?
						<Link href="signup">Sign up here</Link>
					</Typography>
				</Grid>
			</Grid>
		</Paper>
	);
});

const StyledLoginPanel = withStyles(styles, {
	classNamePrefix: generateClassName("LoginPanel"),
})(LoginPanel);

export default StyledLoginPanel;
