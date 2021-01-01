import * as React from "react";

// Next
import { AppProps } from "next/app";
import Head from "next/head";

// Components
import Layout from "../components/common/Layout.Component";

// MUI
import {
	ThemeProvider,
	createGenerateClassName,
	StylesProvider,
} from "@material-ui/core/styles";

// Domain
import theme from "../domain/common/theme";

const generateClassName = createGenerateClassName({
	productionPrefix: "BTD-Tech-",
});

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
	React.useEffect(() => {
		const jssStyles = document.querySelector("jss-server-side");
		if (jssStyles && jssStyles.parentNode) {
			jssStyles.parentNode.removeChild(jssStyles);
		}
	}, []);
	return (
		<React.Fragment>
			<Head>
				<title>My page</title>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
			</Head>
			<StylesProvider generateClassName={generateClassName} injectFirst>
				<ThemeProvider theme={theme}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</ThemeProvider>
			</StylesProvider>
		</React.Fragment>
	);
};

export default App;
