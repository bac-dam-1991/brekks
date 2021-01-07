import PreferredContactMethodType from "../types/PreferredContactMethodType";

export default interface IContactDetails {
	home: string;
	mobile: string;
	fax: string;
	email: string;
	preferredContactMethod: PreferredContactMethodType;
}

export const InitialContactDetails: IContactDetails = {
	home: "0391234567",
	mobile: "0401123456",
	fax: "0391234000",
	email: "john.newuser.2020@gmail.com",
	preferredContactMethod: "Email",
};
