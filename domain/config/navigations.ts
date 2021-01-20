import INavigation from "../common/interfaces/INavigation";

const navigations: INavigation[] = [
	{
		displayText: "About",
		displayOrder: 1,
		inDrawer: true,
		inFooter: true,
		inNavbar: true,
		link: "/about",
	},
	{
		displayText: "Home",
		displayOrder: 1,
		inDrawer: false,
		inFooter: true,
		inNavbar: false,
		link: "/",
	},
];

export default navigations;
