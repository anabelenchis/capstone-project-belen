import { Selector, t } from "testcafe"
import { DATE, NAME_OF_TASKS, WAIT } from '../data/Constants'


class TodayPage {
    constructor() {
        this.pageTitle = Selector('h1').withText('Today')
        this.addButton = Selector('#quick_add_task_holder')
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

    async createTask(numberOfTasks, date) {
        let TASK_TITLE = (date == DATE.TODAY) ? NAME_OF_TASKS.TODAY : NAME_OF_TASKS.TOMORROW
        for (let i = 0; i < numberOfTasks; i++) {
            await t.click(this.addButton).wait(WAIT.LOADVIEW)
            await t.typeText(this.taskTitleField, TASK_TITLE + (i + 1), { paste: true })
            date == DATE.TOMORROW ?
                await t
                    .click(this.dateButton)
                    .click(this.tomorrowDate)
                    .click(this.submitTaskButton)
                    .wait(WAIT.LOADPAGE)
                : await t.click(this.submitTaskButton).wait(WAIT.LOADPAGE)
        }
    }
    async assertTasksCreated(numberOfTasksCreated) {
        for (let i = 0; i < numberOfTasksCreated; i++) {
            await t.expect(this.taskTitle.nth(i).innerText).contains(NAME_OF_TASKS.TODAY + (i + 1))
        }
        return true;
    }
    async clearTodayPage(numberOfTasksCreated) {
        for (let i = 0; i < numberOfTasksCreated; i++) {
            await t
                .rightClick(this.taskTitle)
                .click(this.deleteButton)
                .click(this.confirmDeleteButton).wait(WAIT.LOADPAGE)

        }
    }
}

export default new TodayPage