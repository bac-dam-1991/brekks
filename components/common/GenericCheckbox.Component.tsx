import * as React from "react";

// MUI
import {
	withStyles,
	WithStyles,
	createStyles,
	Theme,
} from "@material-ui/core/styles";
import {
	Checkbox,
	FormControlLabel,
	FormControlLabelProps,
} from "@material-ui/core";

// Utility
import { generateClassName } from "../../domain/utility/utility";

// NPM
import clsx from "clsx";

export const styles = (theme: Theme) =>
	createStyles({
		root: {},
	});

export interface GenericCheckboxProps
	extends Omit<FormControlLabelProps, "control"> {
	value: boolean;
	onValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const GenericCheckbox = React.forwardRef<
	HTMLInputElement,
	GenericCheckboxProps & WithStyles<typeof styles>
>(
	(
		{
			classes,
			className,
			label,
			value,
			onValueChange,
			...formControlLabelProps
		},
		ref
	) => {
		return (
			<FormControlLabel
				ref={ref}
				className={clsx(classes.root, className)}
				control={
					<Checkbox
						checked={value}
						onChange={onValueChange}
						name={label.toString()}
					/>
				}
				label={label}
				{...formControlLabelProps}
			/>
		);
	}
);

export default withStyles(styles, {
	classNamePrefix: generateClassName("GenericCheckbox"),
})(GenericCheckbox);
