import axios, { AxiosResponse } from "axios";
import IRecaptchaResponse from "../interfaces/IRecaptchaResponse";

export default class ReCaptcha {
	public static END_POINT: string = "/api/verifyRecaptcha";

	public static async verify(
		token: string
	): Promise<AxiosResponse<IRecaptchaResponse>> {
		return await axios.request<IRecaptchaResponse>({
			url: ReCaptcha.END_POINT,
			method: "POST",
			data: {
				token: token,
			},
		});
	}
}
