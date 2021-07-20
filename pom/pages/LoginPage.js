import { Selector, t } from "testcafe"

class LoginPage {
    constructor() {
        this.usernameInput = Selector('#email')
        this.passwordInput = Selector('#password')
        this.loginButton = Selector('.submit_btn').withText('Log in')
        this.errorMessage = Selector('.error_msg')
    }

    async submitLoginForm (username, password) {
        if (username != null)
        {
            await t.typeText(this.usernameInput, username)
        }
        if (password != null) 
        {
            await t.typeText(this.passwordInput, password)
        }
        await t.click(this.loginButton)
    }
}

export default new LoginPage