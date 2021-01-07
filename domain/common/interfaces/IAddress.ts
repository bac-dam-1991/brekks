export default interface IAddress {
	streetNumber: string;
	streetName: string;
	postcode: string;
	state: string;
	country: string;
}

export const InitialAddressState: IAddress = {
	streetNumber: "",
	streetName: "",
	postcode: "",
	state: "",
	country: "",
};
