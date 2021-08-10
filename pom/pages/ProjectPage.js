import { Selector, t } from "testcafe"
import basePage from './BasePage'
import { PROJECT_ATTRIBUTES, WAIT } from '../data/Constants'

class ProjectPage {
    constructor() {
        this.projectOptions = Selector("button[aria-label='Project options menu']")
        this.editProject = Selector('.icon_menu_item__content').withText('Edit project')
        this.editProjectTitle = Selector('#edit_project_modal_field_name')
        this.editColor = Selector('.color_dropdown_toggle')
        this.favoritesSwitch = Selector('.reactist_switch')
    }

    async assertProjectCreation(projectName, projectColor, isFavorite=false) {
        let favoriteFlag = isFavorite
        await t
            .click(this.projectOptions)
            .click(this.editProject)
        let projectCreated = {
            title: await this.editProjectTitle.value,
            color: await this.editColor.innerText,
            isFavorite: await this.favoritesSwitch.hasClass('reactist_switch--checked')
        }
        if (projectCreated.title == projectName && projectCreated.color == projectColor 
            && projectCreated.isFavorite && favoriteFlag) {
                return true;
            } else {
                return false
            }
    }
}

export default new ProjectPage