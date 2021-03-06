import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#335C81",
		},
		secondary: {
			main: "#DB6C79",
		},
	},
});

export const invertedTheme = createMuiTheme({
	palette: {
		primary: {
			main: "#DB6C79",
		},
		secondary: {
			main: "#335C81",
		},
	},
});

export default theme;
