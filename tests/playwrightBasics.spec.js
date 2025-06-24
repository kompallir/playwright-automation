import { expect, test } from "@playwright/test"

test.describe("Playwright test to demonstrate basic actions", { tag: "@logintest" }, () => {


    test("Verify Login functionality", async ({ page }) => {
        await page.goto("https://www.saucedemo.com/");
        await page.getByPlaceholder("Username").fill("standard_user");
        await page.getByPlaceholder("Password").fill("secret_sauce");
        await page.getByRole("button", { name: "Login" }).click();
        expect(await page.title()).toBe("Swag Labs");
        console.log("Verify Login functionality");
    });

    test("Verify Form filling", async ({ page }) => {
        await page.goto("https://demoqa.com/text-box");
        await page.locator(".menu-list").getByText("Text Box").click(); //chaining locator
        expect(await page.locator("h1").textContent()).toContain("Text Box");

        const name = "Radhakrishna Kompalli";
        const email = "radhakrishnakompalli@mailinator.com";
        const currentAddress = "Hyderabad, Telangana, India.";
        const permanentAddress = "Vijayawada, Andhra Pradesh, India.";

        await page.getByPlaceholder("Full Name").fill(name);
        await page.getByPlaceholder("name@example.com").fill(email);
        await page.getByPlaceholder("Current Address").fill(currentAddress);
        await page.locator("#permanentAddress").fill(permanentAddress);

        await page.getByRole("button", { name: "Submit" }).click();

        const output = page.locator("#output");
        expect(await output.locator("#name").textContent()).toContain(name);
        expect(await output.locator("#email").textContent()).toContain(email);
        expect(await output.locator("#currentAddress").textContent()).toContain(currentAddress);
        expect(await output.locator("#permanentAddress").textContent()).toContain(permanentAddress);
        console.log("Verify Form filling");
    });
});