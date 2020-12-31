export default class Utility {
	public static zeroPad(val: number): string {
		return val < 10 ? "0" + val.toString() : val.toString();
	}
}
