import { Selector, t } from "testcafe"

class BasePage {
    constructor() {
        this.upcoming = Selector('.item_content').withText('Upcoming')
        this.addProject = Selector("button[aria-label='Add Project']")
        this.favoritesList = Selector("button[aria-label='Toggle list of Favorites']")
    }
}

export default new BasePage