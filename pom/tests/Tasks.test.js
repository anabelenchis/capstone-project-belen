import { STANDARD_USER } from '../data/Roles'
import { URLS, DATE, NUMBER_OF_TASKS } from '../data/Constants'
import todayPage from '../pages/TodayPage'
import upcomingPage from '../pages/UpcomingPage'

fixture('Tasks creation tests')
    .page`${URLS.LOGIN_URL}`
    .beforeEach(async t => {
        await t.useRole(STANDARD_USER)
    })


test.meta('type', 'smoke')('As a user I want to add a new task with Today as the due date', async t => {
    await todayPage.createTask(NUMBER_OF_TASKS.MINIMUM, DATE.TODAY)
    await t.expect(await todayPage.assertTasksCreated(NUMBER_OF_TASKS.MINIMUM)).ok()
    await todayPage.clearTodayPage(NUMBER_OF_TASKS.MINIMUM)
})

test.only('As a user I want to add a new task with Tomorrow as the due date', async t => {
    await todayPage.createTask(NUMBER_OF_TASKS.MINIMUM, DATE.TOMORROW)
    await t.expect(await upcomingPage.assertTasksCreated(NUMBER_OF_TASKS.MINIMUM)).ok()
    await upcomingPage.clearUpcomingPage(NUMBER_OF_TASKS.MINIMUM)

})

test('As a user I want to add 10 new tasks with Today as the due date', async t => {
    await todayPage.createTask(NUMBER_OF_TASKS.MAXIMUM, DATE.TODAY)
    await t.expect(await todayPage.assertTasksCreated(NUMBER_OF_TASKS.MAXIMUM)).ok()
    await todayPage.clearTodayPage(NUMBER_OF_TASKS.MAXIMUM)
})
