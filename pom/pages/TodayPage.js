import { Selector, t } from "testcafe"
import { DATE, WAIT } from '../data/Constants'
import basePage from './BasePage'


class TodayPage {
    constructor() {
        this.pageTitle = Selector('h1').withText('Today')
        this.dateButton = Selector('.date_today')
        this.tomorrowDate = Selector('.scheduler-suggestions-item-label').withText('Tomorrow')
        this.taskTitleField = Selector('.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr')
        this.taskDescriptionField = Selector('.task_editor__description_field')
        this.submitTaskButton = Selector('.reactist_button')
        this.taskTitle = Selector('.task_list_item__content__wrapper')
        this.taskDescription = Selector('.task_description')
        this.taskCheckbox = Selector('.task_checkbox__circle')
        this.deleteButton = Selector('.icon_menu_item__content').withText('Delete task')
        this.confirmDeleteButton = Selector('.ist_button_red').withText('Delete')
    }

    async createTask(taskName, numberOfTasks, date) {
        for (let i = 0; i < numberOfTasks; i++) {
            await t.click(basePage.addTaskButton)
            await t.typeText(this.taskTitleField, taskName + (i + 1), { paste: true })
            if (date == DATE.TOMORROW) {
                await t
                    .click(this.dateButton)
                    .click(this.tomorrowDate)
                    .click(this.submitTaskButton)
                    .wait(WAIT.LOADPAGE)
            } else if (date == DATE.TODAY) {
                await t
                    .click(this.submitTaskButton)
                    .wait(WAIT.LOADPAGE)
            }
        }
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
                    .click(this.confirmDeleteButton).wait(WAIT.LOADPAGE)
            }
        }

    }
}

export default new TodayPage