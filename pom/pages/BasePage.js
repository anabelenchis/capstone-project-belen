import { Selector, t } from "testcafe"
import { DATE } from '../data/Constants'


class BasePage {
    constructor() {
        // Sections
        this.upcomingSection = Selector('.item_content').withText('Upcoming')
        this.todaySection = Selector('.item_content').withText('Today')
        this.projectsPanel = Selector('.sidebar_expansion_panel')
        // Projects Modal
        this.projectTitle = Selector('#edit_project_modal_field_name')
        this.addProject = Selector("button[aria-label='Add Project']")
        this.colorSelectionDropdown = Selector('.color_dropdown_toggle')
        this.colorSelectionButton = Selector('.color_dropdown_select__name')
        this.favoriteSwitch = Selector('.reactist_switch--handle')
        // Projects
        this.projectElement = Selector("li[data-type='project_list_item']")
        this.favoriteListItem = Selector("ul[aria-label='Favorites']")
        // Buttons
        this.deleteButton = Selector('#menu_delete_text')
        this.addTaskButton = Selector('#quick_add_task_holder')
        this.confirmDelete = Selector('.ist_button.ist_button_red').withText('Delete')
        this.submitProject = Selector('.ist_button').withText('Add')
        // Task creation modal
        this.taskTitleField = Selector('.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr')
        this.dateButton = Selector('.date_today')
        this.tomorrowDate = Selector('.scheduler-suggestions-item-label').withText('Tomorrow')
        this.submitTaskButton = Selector('.reactist_button')

    }

    async createTask(taskName, numberOfTasks, date) {
        for (let i = 0; i < numberOfTasks; i++) {
            await t
                .hover(this.addTaskButton)
                .click(this.addTaskButton)
                .typeText(this.taskTitleField, taskName + (i + 1), { paste: true })
            if (date == DATE.TOMORROW) {
                await t
                    .click(this.dateButton)
                    .click(this.tomorrowDate) 
            }
            await t.click(this.submitTaskButton)
        }
    }

    async cleanUpProjects() {
        let projectsCount = await this.projectElement.count
        if (projectsCount > 0) {
            do {
                await t
                    .rightClick(this.projectElement.nth(projectsCount - 1))
                    .click(this.deleteButton)
                    .click(this.confirmDelete)
                projectsCount = await this.projectElement.count
            }
            while (projectsCount > 0);
        }
    }

    async createProject(projectName, projectColor, isFavorite = false) {
        await t
            .hover(this.projectsPanel)
            .click(this.addProject)
            .typeText(this.projectTitle, projectName)
            .click(this.colorSelectionDropdown)
            .click(this.colorSelectionButton.withText(projectColor))
        if (isFavorite == true) {
            await t.click(this.favoriteSwitch)
        }
        await t
            .click(this.submitProject)
    }
}

export default new BasePage