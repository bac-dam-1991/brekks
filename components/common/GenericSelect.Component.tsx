import * as React from "react";

// MUI
import {
	withStyles,
	WithStyles,
	createStyles,
	Theme,
} from "@material-ui/core/styles";
import {
	FormControl,
	FormControlProps,
	InputLabel,
	Select,
} from "@material-ui/core";

// Utility
import {
	generateClassName,
	generateSelectAttributes,
} from "../../domain/utility/utility";

// NPM
import clsx from "clsx";

// Interfaces
import ISelectableItem from "../../domain/common/interfaces/ISelectableItem";

export const styles = (theme: Theme) =>
	createStyles({
		root: {},
	});

export interface GenericSelectProps extends FormControlProps {
	selectLabel: string;
	value: string;
	onValueChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
	valuesList: ISelectableItem[];
}

const GenericSelect = React.forwardRef<
	HTMLDivElement,
	GenericSelectProps & WithStyles<typeof styles>
>(
	(
		{
			classes,
			className,
			selectLabel,
			value,
			color = "secondary",
			onValueChange,
			valuesList,
			...formControlProps
		},
		ref
	) => {
		// Attributes
		const [id, label] = generateSelectAttributes(selectLabel);

		return (
			<FormControl
				variant="outlined"
				className={clsx(classes.root, className)}
				{...formControlProps}
				ref={ref}
				fullWidth
			>
				<InputLabel id={label} color={color}>
					{selectLabel}
				</InputLabel>
				<Select
					labelId={label}
					value={value}
					onChange={onValueChange}
					fullWidth
					native
					label={selectLabel}
					inputProps={{ name: selectLabel, id: id }}
					color={color}
				>
					{valuesList.map((item: ISelectableItem) => (
						<option value={item.value} key={item.key}>
							{item.text}
						</option>
					))}
				</Select>
			</FormControl>
		);
	}
);

export default withStyles(styles, {
	classNamePrefix: generateClassName("GenericSelect"),
})(GenericSelect);
