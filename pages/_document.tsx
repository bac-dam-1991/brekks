import * as React from "react";

// Next
import { DocumentContext } from "next/dist/next-server/lib/utils";
import Document, { Html, Head, Main, NextScript } from "next/document";

// MUI
import { ServerStyleSheets } from "@material-ui/core/styles";

// Domain
import theme from "../domain/common/theme";

export default class EnhancedDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta
						name="theme-color"
						content={theme.palette.primary.main}
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

EnhancedDocument.getInitialProps = async (context: DocumentContext) => {
	const sheets = new ServerStyleSheets();
	const originalRenderPage = context.renderPage;

	context.renderPage = () =>
		originalRenderPage({
			enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
		});

	const initialProps = await Document.getInitialProps(context);

	return {
		...initialProps,
		styles: [
			...React.Children.toArray(initialProps.styles),
			sheets.getStyleElement(),
		],
	};
};
