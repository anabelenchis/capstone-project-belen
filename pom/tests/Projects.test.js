import { STANDARD_USER } from '../data/Roles'
import { URLS } from '../data/Constants'
import addProjectPage from '../pages/AddProjectPage'

fixture('Projects creations tests')
    .page`${URLS.LOGIN_URL}`
    .beforeEach(async t => {
        await t.useRole(STANDARD_USER)
    })

test.meta('type', 'smoke')('As a user I want to create a new project and add it to my favorites', async t => {
    await addProjectPage.createProject()
    await t.expect(await addProjectPage.assertProjectCreation()).ok()
})
    .after(async t => {
        await addProjectPage.cleanUpProjects()
    })
