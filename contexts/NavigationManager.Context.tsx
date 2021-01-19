import * as React from "react";

export interface INavigationContext {
	sideDrawerOpen: boolean;
	handleSideDrawerOpenChange: (val: boolean) => void;
}

export const NavigationContext = React.createContext<INavigationContext>({
	sideDrawerOpen: false,
	handleSideDrawerOpenChange: (val: boolean) => {},
});

export interface NavigationManagerProps {}

const NavigationManager: React.FC<NavigationManagerProps> = ({ children }) => {
	const [sideDrawerOpen, setSideDrawerOpen] = React.useState<boolean>(false);

	const handleSideDrawerOpenChange = (val: boolean) => {
		setSideDrawerOpen(val);
	};

	return (
		<NavigationContext.Provider
			value={{ sideDrawerOpen, handleSideDrawerOpenChange }}
		>
			{children}
		</NavigationContext.Provider>
	);
};

export const useNavigation = () => React.useContext(NavigationContext);

export default NavigationManager;
