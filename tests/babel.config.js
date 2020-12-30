module.exports = (api) => {
	const isTest = api.env("test");
	console.log("babel");
	return {
		presets: [
			["@babel/preset-env", { targets: { node: "current" } }],
			"@babel/preset-typescript",
		],
	};
};
