import { CREDENTIALS, URLS, MESSAGES } from '../data/Constants'
import loginPage from '../pages/LoginPage'
import todayPage from "../pages/TodayPage"

fixture('Login feature test').page`${URLS.LOGIN_URL}`

test.meta('type', 'smoke')('As a user I want to successfully login with valid credentials', async (t) => {
    await loginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.expect(todayPage.pageTitle.exists).ok()
})

test('As a user I should not be able to log in without providing any credentials', async (t) => {
    await loginPage.submitLoginForm(null, null)
    await t.expect(loginPage.errorMessage.innerText).contains(MESSAGES.ERROR.LOGIN_PAGE.INVALID_EMAIL)
})

test('As a user I should not be able to log in with an invalid password', async (t) => {
    await loginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD)
    await t.expect(loginPage.errorMessage.innerText).contains(MESSAGES.ERROR.LOGIN_PAGE.INVALID_CREDENTIALS)
})

test.meta('type', 'smoke')('As a user I should not be able to login with invalid credentials', async (t) => {
    await loginPage.submitLoginForm(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD)
    await t.expect(loginPage.errorMessage.innerText).contains(MESSAGES.ERROR.LOGIN_PAGE.INVALID_EMAIL)
})