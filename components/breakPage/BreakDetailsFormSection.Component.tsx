import * as React from "react";

// MUI
import {
	withStyles,
	WithStyles,
	createStyles,
	Theme,
} from "@material-ui/core/styles";
import {
	Button,
	Grid,
	Paper,
	PaperProps,
	TextField,
	Typography,
} from "@material-ui/core";

// NPM
import clsx from "clsx";

// Utility
import { generateClassName } from "../../domain/utility/utility";

// Interfaces
import IBreakSchedule, {
	InitialBreakScheduleState,
} from "../../domain/common/interfaces/IBreakSchedule";
import IBreakItem, {
	InitialBreakItemState,
} from "../../domain/common/interfaces/IBreakItem";
import StyledBreakItem from "./BreakItem.Component";

export const styles = (theme: Theme) =>
	createStyles({
		root: {
			marginTop: theme.spacing(5),
			padding: theme.spacing(2),
			"&:hover": {
				boxShadow: theme.shadows[2],
			},
		},
	});

export interface BreakDetailsFormSectionProps extends PaperProps {}

const BreakDetailsFormSection = React.forwardRef<
	HTMLDivElement,
	BreakDetailsFormSectionProps & WithStyles<typeof styles>
>(({ classes, className, ...paperProps }, ref) => {
	// States
	const [breakSchedule, setBreakSchedule] = React.useState<IBreakSchedule>(
		InitialBreakScheduleState
	);

	const handleAddBreakItem = () => {
		setBreakSchedule((prevState: IBreakSchedule) => ({
			...prevState,
			breakItems: [
				...prevState.breakItems,
				{
					...InitialBreakItemState,
					key: prevState.breakItems.length.toString(),
				},
			],
		}));
	};

	const handleRemove = (key: string) => {
		setBreakSchedule((prevState: IBreakSchedule) => {
			const copy: IBreakItem[] = prevState.breakItems.filter(
				(item: IBreakItem) => item.key !== key
			);

			return {
				...prevState,
				breakItems: copy,
			};
		});
	};

	return (
		<Paper
			square
			className={clsx(classes.root, className)}
			{...paperProps}
			elevation={0}
			ref={ref}
		>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Typography variant="h6" color="secondary">
						<strong>Break schedule details</strong>
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<TextField
						type="number"
						label="Minimum shift duration (Hours)"
						variant="outlined"
						fullWidth
					/>
				</Grid>
				<Grid item xs={12}>
					<Button
						variant="outlined"
						color="primary"
						onClick={handleAddBreakItem}
					>
						Add break
					</Button>
				</Grid>
				{breakSchedule.breakItems.map((item: IBreakItem) => (
					<StyledBreakItem
						key={item.key}
						data={item}
						onRemove={handleRemove}
					/>
				))}
			</Grid>
		</Paper>
	);
});

export default withStyles(styles, {
	classNamePrefix: generateClassName("BreakDetailsFormSection"),
})(BreakDetailsFormSection);
