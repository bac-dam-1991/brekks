import INavigation from "../common/interfaces/INavigation";

const navigations: INavigation[] = [
	{
		displayText: "About",
		displayOrder: 2,
		inDrawer: true,
		inFooter: true,
		inNavbar: true,
		link: "/about",
		type: "default",
	},
	{
		displayText: "Home",
		displayOrder: 1,
		inDrawer: false,
		inFooter: true,
		inNavbar: false,
		link: "/",
		type: "default",
	},
	{
		displayText: "Sign up",
		displayOrder: 1,
		inDrawer: true,
		inFooter: true,
		inNavbar: true,
		link: "/signup",
		type: "cta",
	},
	{
		displayText: "Login",
		displayOrder: 2,
		inDrawer: true,
		inFooter: true,
		inNavbar: true,
		link: "/login",
		type: "default",
	},
];

export default navigations;
