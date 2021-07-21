import { Selector, t } from "testcafe"
import basePage from './BasePage'

class UpcomingPage {
    constructor() {
        this.taskTitle = Selector('.task_list_item__content__wrapper')
    }

    async assertTasksCreated (numberOfTasksCreated){
        await t.click(basePage.upcoming).wait(1000)
        for (var i = 0; i < numberOfTasksCreated; i++) {
            await t.expect(this.taskTitle.nth(i).innerText).contains('Task number ' + (i + 1))
        }

    }
}

export default new UpcomingPage