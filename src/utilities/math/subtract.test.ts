import { describe, expect, it } from "vitest";
import { subtract } from ".";

describe("subtract", () => {
	it("2 - 2 = 0", () => {
		expect(subtract(2, 2)).toBe(0);
	});
});