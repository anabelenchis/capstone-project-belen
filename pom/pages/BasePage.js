import { Selector, t } from "testcafe"
import { WAIT } from '../data/Constants'


class BasePage {
    constructor() {
        //Sections
        this.upcomingSection = Selector('.item_content').withText('Upcoming')
        this.todaySection = Selector('.item_content').withText('Today')        
        //Projects Modal
        this.projectTitle = Selector('#edit_project_modal_field_name')
        this.addProject = Selector("button[aria-label='Add Project']")
        this.colorSelectionDropdown = Selector('.color_dropdown_toggle')
        this.colorSelectionButton = Selector('.color_dropdown_select__name')
        this.favoriteSwitch = Selector('.reactist_switch--handle')
        //Projects
        this.projectElement = Selector("li[data-type='project_list_item']")
        //Buttons
        this.deleteButton = Selector('#menu_delete_text')
        this.addTaskButton = Selector('#quick_add_task_holder')
        this.confirmDelete = Selector('.ist_button.ist_button_red').withText('Delete')
    }

    async cleanUpProjects() {
        var projectsCount = await this.projectElement.count
        if (projectsCount > 0) {
            do {
                await t
                    .rightClick(this.projectElement.nth(projectsCount - 1))
                    .click(this.deleteButton)
                    .click(this.confirmDelete)
                    .wait(WAIT.LOADPAGE)
                    var projectsCount = await this.projectElement.count
                }
            while (projectsCount > 0);
        }
    }

    async createProject(projectName, projectColor, isFavorite=false) {
        await t
            .doubleClick(this.addProject)
            .typeText(this.projectTitle, projectName)
            .click(this.colorSelectionDropdown)
            .click(this.colorSelectionButton.withText(projectColor))
        isFavorite == true ? await t.click(this.favoriteSwitch) : null
        await t
            .click(this.addTaskButton)
            .wait(WAIT.LOADPAGE)
    }
}

export default new BasePage