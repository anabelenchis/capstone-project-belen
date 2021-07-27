import { STANDARD_USER } from '../data/Roles'
import { URLS } from '../data/Constants'
import addProjectPage from '../pages/AddProjectPage'

fixture('Projects creations tests')

test
    .before(async t => {
        await t.useRole(STANDARD_USER)
        await addProjectPage.cleanUpProjects()
    })
    .meta('type', 'smoke')('As a user I want to create a new project and add it to my favorites', async t => {
        await addProjectPage.createProject()
        await t.expect(await addProjectPage.assertProjectCreation()).ok()
    })
