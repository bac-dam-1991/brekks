import * as React from "react";

// MUI
import {
	withStyles,
	WithStyles,
	createStyles,
	Theme,
} from "@material-ui/core/styles";
import { GridProps, Grid, TextField } from "@material-ui/core";

// Icons
import HighlightOffRoundedIcon from "@material-ui/icons/HighlightOffRounded";

// NPM
import clsx from "clsx";
import { animated } from "react-spring";

// Utility
import { generateClassName } from "../../domain/utility/utility";

// Component
import GenericSelect from "../common/GenericSelect.Component";

// Classes
import Break from "../../domain/common/classes/Break";
import PromptedIconButtonComponent from "../common/PromptedIconButton.Component";
import IBreakItem from "../../domain/common/interfaces/IBreakItem";

export const styles = (theme: Theme) =>
	createStyles({
		root: {},
		utility: {
			display: "flex",
			height: theme.spacing(7),
			alignItems: "center",
			flexDirection: "row-reverse",
		},
		fieldContainer: {
			flexGrow: 1,
			marginRight: theme.spacing(1),
		},
		container: { display: "flex" },
	});

export interface BreakItemProps extends GridProps {
	data: IBreakItem;
	onRemove: (key: string) => void;
}

const BreakItem = React.forwardRef<
	HTMLDivElement,
	BreakItemProps & WithStyles<typeof styles>
>(({ classes, className, data, onRemove, ...gridProps }, ref) => {
	const [breakDuration, setBreakDuration] = React.useState<string>("");
	const [breakType, setBreakType] = React.useState<string>("");

	// Handlers
	const handleBreakDurationChange = (
		event: React.ChangeEvent<{ value: unknown }>
	) => {
		setBreakDuration(event.target.value as string);
	};

	const handleBreakTypeChange = (
		event: React.ChangeEvent<{ value: unknown }>
	) => {
		setBreakType(event.target.value as string);
	};

	return (
		<Grid
			ref={ref}
			item
			xs={12}
			className={clsx(className, classes.root)}
			{...gridProps}
		>
			<div className={classes.container}>
				<div className={classes.fieldContainer}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={4}>
							<GenericSelect
								value={breakDuration}
								onValueChange={handleBreakDurationChange}
								valuesList={Break.getSelectableBreakDurations()}
								selectLabel="Break duration"
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<TextField
								type="number"
								label="Number of breaks"
								variant="outlined"
								fullWidth
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<GenericSelect
								value={breakType}
								onValueChange={handleBreakTypeChange}
								valuesList={Break.getSelectableBreakTypes()}
								selectLabel="Break type"
							/>
						</Grid>
					</Grid>
				</div>
				<div className={classes.utility}>
					<PromptedIconButtonComponent
						title="Remove"
						onClick={() => onRemove(data.key)}
					>
						<HighlightOffRoundedIcon />
					</PromptedIconButtonComponent>
				</div>
			</div>
		</Grid>
	);
});

const StyledBreakItem = withStyles(styles, {
	classNamePrefix: generateClassName("BreakItem"),
})(BreakItem);

export default StyledBreakItem;

export const AnimatedBreakItem = animated(StyledBreakItem);
