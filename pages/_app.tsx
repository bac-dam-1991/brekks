import * as React from "react";

// Next
import { AppProps } from "next/app";
import Head from "next/head";

// Components
import Layout from "../components/common/Layout.Component";

// MUI
import { ThemeProvider } from "@material-ui/core/styles";

// Domain
import theme from "../domain/common/theme";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
	React.useEffect(() => {
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
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
			<ThemeProvider theme={theme}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</React.Fragment>
	);
};

export default App;
