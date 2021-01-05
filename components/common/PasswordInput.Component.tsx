import * as React from "react";

// MUI
import {
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	OutlinedInputProps,
} from "@material-ui/core";
import {
	withStyles,
	WithStyles,
	Theme,
	createStyles,
} from "@material-ui/core/styles";

// Utility
import { generateClassName } from "../../domain/utility/utility";

// NPM
import clsx from "clsx";

// Types
import { PasswordLabelType } from "../../domain/common/types/PasswordLabelType";

// Icons
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

export const styles = (theme: Theme) => createStyles({ root: {} });

export interface PasswordInputProps extends OutlinedInputProps {
	label: PasswordLabelType;
}

const PasswordInput = React.forwardRef<
	HTMLDivElement,
	PasswordInputProps & WithStyles<typeof styles>
>(({ className, classes, label, color, ...outlinedInputProps }, ref) => {
	// States
	const [showPassword, setShowPassword] = React.useState<boolean>(false);

	const togglePasswordVisibility = () => {
		setShowPassword((prevState: boolean) => !prevState);
	};

	const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
	};

	return (
		<FormControl
			className={clsx(classes.root, className)}
			variant="outlined"
			fullWidth
			ref={ref}
		>
			<InputLabel htmlFor="password-input" color={color}>
				{label}
			</InputLabel>
			<OutlinedInput
				id={label}
				type={showPassword ? "text" : "password"}
				{...outlinedInputProps}
				fullWidth
				color={color}
				endAdornment={
					<InputAdornment position="end">
						<IconButton
							aria-label="Toggle password visibility"
							onClick={togglePasswordVisibility}
							onMouseDown={handleMouseDown}
							edge="end"
						>
							{showPassword ? <Visibility /> : <VisibilityOff />}
						</IconButton>
					</InputAdornment>
				}
				labelWidth={label === "Password" ? 75 : 125}
			/>
		</FormControl>
	);
});

const StyledPasswordInput = withStyles(styles, {
	classNamePrefix: generateClassName("PasswordInput"),
})(PasswordInput);

export default StyledPasswordInput;
