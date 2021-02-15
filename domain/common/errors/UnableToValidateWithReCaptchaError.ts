export default class UnableToValidateWithReCaptchaError extends Error {
	constructor() {
		super("Unable to validate with reCaptcha.");
	}
}
