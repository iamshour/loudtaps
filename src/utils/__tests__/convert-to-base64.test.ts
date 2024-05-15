//#region Import
import { describe, expect, it } from "vitest"

import convertToBase64 from "../convert-to-base64"
//#endregion

describe("convertToBase64", () => {
	it("converts a file to a Base64 string", async () => {
		const file = new File(["test content"], "test.txt", { type: "text/plain" })

		const result = await convertToBase64(file)

		expect(result).toBe("data:text/plain;base64,dGVzdCBjb250ZW50")
	})

	it("rejects on error", async () => {
		const file = new File(["test content"], "test.txt", { type: "text/plain" })

		// Mock FileReader to throw an error
		const originalFileReader = global.FileReader

		global.FileReader = class {
			onerror: ((ev: ProgressEvent) => void) | null = null

			readAsDataURL() {
				if (this.onerror) {
					this.onerror(new ProgressEvent("error"))
				}
			}
		} as any

		await expect(convertToBase64(file)).rejects.toBeInstanceOf(Error)

		// Restore the original FileReader
		global.FileReader = originalFileReader
	})
})
