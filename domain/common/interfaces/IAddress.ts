export default interface IAddress {
	buildingNumber: string;
	streetNumber: string;
	streetName: string;
	suburb: string;
	postcode: string;
	state: string;
	country: string;
}

export const InitialAddressState: IAddress = {
	buildingNumber: "",
	streetNumber: "",
	streetName: "",
	suburb: "",
	postcode: "",
	state: "",
	country: "",
};
