import { STANDARD_USER } from '../data/Roles'
import { DATE, NUMBER_OF_TASKS, NAME_OF_TASKS } from '../data/Constants'
import todayPage from '../pages/TodayPage'
import upcomingPage from '../pages/UpcomingPage'
import basePage from '../pages/BasePage'

fixture('Tasks creation tests')
    .beforeEach(async (t) => {
        await t.useRole(STANDARD_USER)
        await t.click(basePage.upcomingSection)
        await upcomingPage.clearUpcomingPage()
        await t.expect(upcomingPage.taskItem.exists).notOk()
    })

test
    .meta('type', 'smoke')('As a user I want to add a new task with Today as the due date', async (t) => {
        await todayPage.createTask(NAME_OF_TASKS.TODAY, NUMBER_OF_TASKS.MINIMUM, DATE.TODAY)
        await t.expect(await todayPage.assertTasksCreated(NAME_OF_TASKS.TODAY, NUMBER_OF_TASKS.MINIMUM)).ok()
    })

test('As a user I want to add a new task with Tomorrow as the due date', async (t) => {
    await todayPage.createTask(NAME_OF_TASKS.TOMORROW, NUMBER_OF_TASKS.MINIMUM, DATE.TOMORROW)
    await t.expect(await upcomingPage.assertTasksCreated(NAME_OF_TASKS.TOMORROW, NUMBER_OF_TASKS.MINIMUM, DATE.TOMORROW)).ok()
})

test('As a user I want to add 10 new tasks with Today as the due date', async (t) => {
    await todayPage.createTask(NAME_OF_TASKS.TODAY, NUMBER_OF_TASKS.MAXIMUM, DATE.TODAY)
    await t.expect(await todayPage.assertTasksCreated(NAME_OF_TASKS.TODAY, NUMBER_OF_TASKS.MAXIMUM)).ok()
})