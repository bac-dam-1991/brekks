import PreferredContactMethodType from "../types/PreferredContactMethodType";

export default interface IContactDetails {
	home: string;
	mobile: string;
	fax: string;
	email: string;
	business: string;
	preferredContactMethod: PreferredContactMethodType;
}

export const InitialContactDetails: IContactDetails = {
	home: "",
	mobile: "",
	fax: "",
	email: "",
	preferredContactMethod: "Email",
	business: "",
};
