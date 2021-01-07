// Types
import GenderType from "../types/GenderType";

// Interfaces
import IAddress, { InitialAddressState } from "./IAddress";
import IContactDetails, { InitialContactDetails } from "./IContactDetails";

export default interface IEmployee {
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
}

export const InitialEmployeeState: IEmployee = {
	title: "Mr",
	givenName: "John",
	middleName: "Thomas",
	familyName: "Newuser",
	dob: "1980-01-01",
	contactDetails: InitialContactDetails,
	residentialAddress: InitialAddressState,
	postalAddress: null,
	role: "Pharmacist",
	gender: "Male",
};
