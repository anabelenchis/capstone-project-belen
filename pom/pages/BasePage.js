import { Selector } from "testcafe"

class BasePage {
    constructor() {
        this.pageTitle = Selector('h1').withText('Today')
        this.addButton = Selector('.plus_add_button').withText('Add task')
    }
}

export default new BasePage