export default interface IStaticContent {
	content: React.ReactNode;
	panelIndex: number;
	link: string;
	theme: "primary" | "secondary";
}
