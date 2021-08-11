import { Role } from "testcafe";
import { URLS, CREDENTIALS } from "./Constants";
import loginPage from "../pages/LoginPage";

export const STANDARD_USER = Role(URLS.LOGIN_URL, async () => {
    await loginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
}, { preserveUrl: true })