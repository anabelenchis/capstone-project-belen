import { Selector, t } from "testcafe"
import basePage from './BasePage'
import { NAME_OF_TASKS, WAIT } from '../data/Constants'

class UpcomingPage {
    constructor() {
        this.taskTitle = Selector('.task_list_item__content__wrapper')
        this.taskCheckbox = Selector('.task_checkbox__circle')
        this.deleteButton = Selector('.icon_menu_item__content').withText('Delete task')
        this.confirmDeleteButton = Selector('.ist_button.ist_button_red').withText('Delete')
    }

    async assertTasksCreated(numberOfTasksCreated) {
        await t.click(basePage.upcoming).wait(WAIT.LOADPAGE)
        for (let i = 0; i < numberOfTasksCreated; i++) {
            await t.expect(this.taskTitle.nth(i).innerText).contains(NAME_OF_TASKS.TOMORROW + (i + 1))
        }
        return true;
    }

    async clearUpcomingPage() {
        var tasksCount = await this.taskTitle.count
        if (tasksCount > 0) {
            for (let i = 0; i < tasksCount; i++) {
                await t
                    .rightClick(this.taskTitle.nth(0))
                    .click(this.deleteButton)
                    .click(this.confirmDeleteButton).wait(WAIT.LOADPAGE)
            }
        }
    }
}

export default new UpcomingPage