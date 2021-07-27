import { Selector, t } from "testcafe"
import basePage from '../pages/BasePage'
import { PROJECT_ATTRIBUTES, WAIT } from '../data/Constants'

class AddProjectPage {
    constructor() {
        this.projectTitle = Selector('#edit_project_modal_field_name')
        this.favoriteSwitch = Selector('.reactist_switch--handle')
        this.colorSelectionDropdown = Selector('.color_dropdown_toggle')
        this.colorSelectionButton = Selector('.color_dropdown_select__name').withText(PROJECT_ATTRIBUTES.PROJECT_COLOR)
        this.addButton = Selector('.ist_button.ist_button_red').withText('Add')
        this.projectInFavorites = Selector("li[data-type='project_list_item']")
            .nth(0)
            .withText(PROJECT_ATTRIBUTES.PROJECT_TITLE)
        this.projectsList = Selector("li[data-type='project_list_item']")
            .nth(1)
            .withText(PROJECT_ATTRIBUTES.PROJECT_TITLE)
        this.projectElement = Selector("li[data-type='project_list_item']")
        this.deleteButton = Selector('#menu_delete_text')
        this.confirmDelete = Selector('.ist_button.ist_button_red').withText('Delete')
    }

    async createProject() {
        await t
            .doubleClick(basePage.addProject)
            .typeText(this.projectTitle, PROJECT_ATTRIBUTES.PROJECT_TITLE)
            .click(this.colorSelectionDropdown)
            .click(this.colorSelectionButton)
            .click(this.favoriteSwitch)
            .click(this.addButton)
            .wait(WAIT.LOADPAGE)
    }

    async assertProjectCreation() {
        await t
            .expect(basePage.favoritesList.exists).ok()
            .expect(this.projectInFavorites.exists).ok()
        return true;
    }

    async cleanUpProjects() {
        var projectsCount = await this.projectElement.count
        console.log('===========',projectsCount)
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
}

export default new AddProjectPage