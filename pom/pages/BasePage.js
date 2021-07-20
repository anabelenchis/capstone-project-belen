import { Selector, t } from "testcafe"

class BasePage {
    constructor() {
        this.pageTitle = Selector('h1').withText('Today')
        this.addButton = Selector('.plus_add_button').withText('Add task')
        this.dateButton = Selector('.date.date_today')
        this.tomorrowDate = Selector('.scheduler-suggestions-item-label').withText('Tomorrow')
        this.taskTitleField = Selector('.public-DraftStyleDefault-block')
        this.taskDescriptionField = Selector('.task_editor__description_field')
        this.submitTaskButton = Selector('.reactist_button')
        this.taskTitle = Selector('task_content')
        this.taskDescription = Selector('task_description')

    }

    async createTask(numberOfTasks, date) {
        await t.click(this.addButton)
        for (var i = 0; i < numberOfTasks; i++) {
            await t
                .typeText(this.taskTitleField, 'Task number ' + (i + 1), { paste: true })
                console.log(date)
            date == 'tomorrow' ?
                await t
                    .click(this.dateButton)
                    .click(this.tomorrowDate)
                    .click(this.submitTaskButton)
                    .wait(1500)
                : await t.click(this.submitTaskButton).wait(1500)
        }
        /*
        .click(basePage.addButton)
                .typeText('.public-DraftStyleDefault-block', 'hello world', {paste: true})
                .typeText('.task_editor__description_field', 'This is the task description', {paste: true})
                .click('.reactist_button')
                .wait(1500)
                .expect(Selector('.task_content').innerText).contains('hello world')
                .expect(Selector('.task_description').innerText).contains('This is the task description')
        */
    }
}

export default new BasePage