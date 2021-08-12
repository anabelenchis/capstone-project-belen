import { Selector, t } from "testcafe"
import basePage from './BasePage'


class TodayPage {
    constructor() {
        this.pageTitle = Selector('h1').withText('Today')
        this.taskDescriptionField = Selector('.task_editor__description_field')
        this.taskTitle = Selector('.task_list_item__content__wrapper')
        this.taskDescription = Selector('.task_description')
        this.taskCheckbox = Selector('.task_checkbox__circle')
        this.deleteButton = Selector('.icon_menu_item__content').withText('Delete task')
        this.confirmDeleteButton = Selector('.ist_button_red').withText('Delete')
    }

    async assertTasksCreated(taskName, numberOfTasksCreated) {
        await t.click(basePage.todaySection)
        for (let i = 0; i < numberOfTasksCreated; i++) {
            await t.expect(this.taskTitle.nth(i).innerText).contains(taskName + (i + 1))
        }
        return true;
    }
    async clearTodayPage() {
        const tasksCount = await this.taskTitle.count;
        if (tasksCount > 0) {
            for (let i = 0; i < tasksCount; i++) {
                await t
                    .rightClick(this.taskTitle.nth(0))
                    .click(this.deleteButton)
                    .click(this.confirmDeleteButton)
            }
        }

    }
}

export default new TodayPage