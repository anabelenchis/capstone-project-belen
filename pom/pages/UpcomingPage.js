import { Selector, t } from "testcafe"
import basePage from './BasePage'
import { NAME_OF_TASKS, WAIT } from '../data/Constants'

class UpcomingPage {
    constructor() {
        this.taskTitle = Selector("section[aria-label='Aug 11 ‧ Tomorrow']").child('.task_list_item__content')
        this.taskItem = Selector('.task_list_item__content__wrapper')
        this.taskCheckbox = Selector('.task_checkbox__circle')
        this.deleteButton = Selector('.icon_menu_item__content').withText('Delete task')
        this.confirmDeleteButton = Selector('.ist_button.ist_button_red').withText('Delete')
        this.sectionWraper = Selector('.section__wrapper')
        this.taskListItemStyle = '.task_list_item'
    }

    async assertTasksCreated(taskName, numberOfTasksCreated, dueDate) {
        await t.click(basePage.upcomingSection)
        for (let i = 0; i < numberOfTasksCreated; i++) {
            let targetText = await this.sectionWraper.withText(dueDate).find(this.taskListItemStyle).nth(i).innerText
            if (targetText.includes(taskName+(i+1))==false) {
                return false
            }
        }
        return true;
    }

    async clearUpcomingPage() {
        var tasksCount = await this.taskItem.count
        if (tasksCount > 0) {
            for (let i = 0; i < tasksCount; i++) {
                await t
                    .rightClick(this.taskItem.nth(0))
                    .click(this.deleteButton)
                    .click(this.confirmDeleteButton).wait(WAIT.LOADPAGE)
            }
        }
    }
}

export default new UpcomingPage