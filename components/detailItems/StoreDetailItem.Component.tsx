import * as React from "react";

// MUI
import {
	withStyles,
	WithStyles,
	createStyles,
	Theme,
} from "@material-ui/core/styles";

// Utility
import { generateClassName } from "../../domain/utility/utility";

// NPM
import DetailItem from "./DetailItem.Component";

export const styles = (theme: Theme) =>
	createStyles({
		root: {},
		caption: {
			color: "#ADADAD",
		},
	});

export interface StoreDetailItemProps {}

const StoreDetailItem = React.forwardRef<
	HTMLDivElement,
	StoreDetailItemProps & WithStyles<typeof styles>
>((props, ref) => {
	return (
		<React.Fragment>
			<DetailItem
				detail={{ key: "Store", value: "John Newuser Pharmacy" }}
			/>
			<DetailItem
				detail={{
					key: "Address",
					value: "123 Victory Rd, Melbourne VIC 3000",
				}}
			/>
		</React.Fragment>
	);
});

export default withStyles(styles, {
	classNamePrefix: generateClassName("StoreDetailItem"),
})(StoreDetailItem);
