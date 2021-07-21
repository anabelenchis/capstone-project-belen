import { Selector, t } from "testcafe"
import { DATE, NAME_OF_TASKS } from '../data/Constants'

class TodayPage {
    constructor() {
        this.pageTitle = Selector('h1').withText('Today')
        this.addButton = Selector('.plus_add_button').withText('Add task')
        this.dateButton = Selector('.date.date_today')
        this.tomorrowDate = Selector('.scheduler-suggestions-item-label').withText('Tomorrow')
        this.taskTitleField = Selector('.public-DraftStyleDefault-block')
        this.taskDescriptionField = Selector('.task_editor__description_field')
        this.submitTaskButton = Selector('.reactist_button')
        this.taskTitle = Selector('.task_list_item__content__wrapper')
        this.taskDescription = Selector('.task_description')
        this.taskCheckbox = Selector('.task_checkbox__circle')
    }

    async createTask(numberOfTasks, date) {
        let TASK_TITLE = (date == DATE.TODAY) ? NAME_OF_TASKS.TODAY : NAME_OF_TASKS.TOMORROW
        await t.click(this.addButton)
        for (var i = 0; i < numberOfTasks; i++) {
            await t
                .typeText(this.taskTitleField, TASK_TITLE + (i + 1), { paste: true })
            console.log(date)
            date == DATE.TOMORROW ?
                await t
                    .click(this.dateButton)
                    .click(this.tomorrowDate)
                    .click(this.submitTaskButton)
                    .wait(1000)
                : await t.click(this.submitTaskButton).wait(1500)
        }
    }
    async assertTasksCreated(numberOfTasksCreated) {
        for (var i = 0; i < numberOfTasksCreated; i++) {
            await t.expect(this.taskTitle.nth(i).innerText).contains(NAME_OF_TASKS.TODAY + (i + 1))
        }
    }
    async clearTodayPage(numberOfTasksCreated) {
        for (var i = 0; i < numberOfTasksCreated; i++) {
            await t.click(this.taskCheckbox.nth(i)).wait(1000)
        }
    }
}

export default new TodayPage