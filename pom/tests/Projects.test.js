import { STANDARD_USER } from '../data/Roles'
import { PROJECT_ATTRIBUTES, WAIT } from '../data/Constants'
import basePage from '../pages/BasePage'
import projectPage from '../pages/ProjectPage'

fixture('Projects creations tests')

test
    .before(async (t) => {
        await t.useRole(STANDARD_USER)
        await basePage.cleanUpProjects()
        await t.expect(basePage.projectElement.exists).notOk()
    })
    .after(async (t) => {
        await t.wait(WAIT.LOADPAGE)
    })
    .meta('type', 'smoke')('As a user I want to create a new project and add it to my favorites', async (t) => {
        await basePage.createProject(PROJECT_ATTRIBUTES.PROJECT_TITLE, PROJECT_ATTRIBUTES.PROJECT_COLOR, PROJECT_ATTRIBUTES.FAVORITE_PROJECT)
        await t.click(basePage.favoriteListItem.withText(PROJECT_ATTRIBUTES.PROJECT_TITLE))
        await t.expect(await projectPage.assertProjectCreation(PROJECT_ATTRIBUTES.PROJECT_TITLE, PROJECT_ATTRIBUTES.PROJECT_COLOR, PROJECT_ATTRIBUTES.FAVORITE_PROJECT)).ok()
    })