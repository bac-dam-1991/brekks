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
import { GoogleReCaptcha } from "react-google-recaptcha-v3";

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

export interface SignUpPanelProps extends PaperProps {}

const SignUpPanel = React.forwardRef<
	HTMLDivElement,
	SignUpPanelProps & WithStyles<typeof styles>
>(({ classes, className, ...paperProps }, ref) => {
	// Router
	const router = useRouter();

	// Handlers
	const handleSignUp = () => {
		// router.push("/profile");
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
						fullWidth
					/>
				</Grid>
				<Grid item xs={12}>
					<StyledPasswordInput label="Password" />
				</Grid>
				<Grid item xs={12}>
					<StyledPasswordInput label="Repeat password" />
				</Grid>
				<Grid item xs={12}>
					<GoogleReCaptcha onVerify={() => console.log("verified")} />
				</Grid>
				<Grid item xs={12}>
					<StyledLoadingButton
						text="Create account"
						loading={false}
						onClick={handleSignUp}
					/>
				</Grid>
				<Grid item xs={12}>
					<Typography variant="caption" align="right" display="block">
						Already has an account?&nbsp;
						<Link href="login">Login here</Link>
					</Typography>
				</Grid>
			</Grid>
		</Paper>
	);
});

const StyledSignUpPanel = withStyles(styles, {
	classNamePrefix: generateClassName("SignUpPanel"),
})(SignUpPanel);

export default StyledSignUpPanel;
