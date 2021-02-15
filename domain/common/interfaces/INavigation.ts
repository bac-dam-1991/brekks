import IDisplayable from "./IDisplayable";

export default interface INavigation extends IDisplayable {
	inNavbar: boolean | "authOnly";
	inFooter: boolean | "authOnly";
	inDrawer: boolean | "authOnly";
	link: string;
	type: "cta" | "default";
}
