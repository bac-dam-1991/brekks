// Types
import GenderType from "../types/GenderType";

// Interfaces
import IAddress, { InitialAddressState } from "./IAddress";
import IContactDetails, { InitialContactDetails } from "./IContactDetails";
import IOrganisation, { InitialOrganisationState } from "./IOrganisation";

export default interface IEmployee {
	employeeId: string;
	title: string;
	givenName: string;
	middleName: string;
	familyName: string;
	dob: string;
	contactDetails: IContactDetails;
	residentialAddress: IAddress;
	postalAddress: IAddress | null;
	role: string;
	gender: GenderType;
	primaryPlaceOfEmployment: IOrganisation;
}

export const InitialEmployeeState: IEmployee = {
	employeeId: "",
	title: "",
	givenName: "",
	middleName: "",
	familyName: "",
	dob: "",
	contactDetails: InitialContactDetails,
	residentialAddress: InitialAddressState,
	postalAddress: null,
	role: "",
	gender: "Undisclosed",
	primaryPlaceOfEmployment: InitialOrganisationState,
};
