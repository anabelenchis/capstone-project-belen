import { Selector, t } from "testcafe"

class BasePage {
    constructor() {
        this.upcoming = Selector('.item_content').withText('Upcoming')
    }
}

export default new BasePage