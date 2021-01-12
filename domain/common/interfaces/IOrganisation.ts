import IAddress, { InitialAddressState } from "./IAddress";

export default interface IOrganisation {
	name: string;
	address: IAddress;
}

export const InitialOrganisationState: IOrganisation = {
	name: "",
	address: InitialAddressState,
};
