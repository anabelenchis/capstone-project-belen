import { Selector, t } from "testcafe"
import basePage from '../pages/BasePage'
import { PROJECT_ATTRIBUTES } from '../data/Constants'

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
            .wait(1000)
    }

    async assertProjectCreation() {
        await t
            .expect(basePage.favoritesList.exists).ok()
            .expect(this.projectInFavorites.exists).ok()
        return true;
    }

    async cleanUpProjects() {
        await t
            .rightClick(this.projectsList)
            .click(this.deleteButton)
            .click(this.confirmDelete)
            .wait(1000)
    }
}

export default new AddProjectPage