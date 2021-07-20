//Create a new task with Today as the due date and validate it was created correctly.
//Create a single task selecting tomorrow as the due date and validate it was created correctly.
//Create 10 new tasks with Today as the due date and validate they were created correctly. Task Names should be dynamic.
import {STANDARD_USER} from '../data/Roles'
import {CREDENTIALS, URLS, MESSAGES} from '../data/Constants'
import basePage from '../pages/BasePage'
import { Selector } from 'testcafe'

fixture ('Tasks creation tests').page `${URLS.LOGIN_URL}`

test.only('As a user I want to add a new task with Today as the due date', async t => {
    await t.useRole(STANDARD_USER)
    await basePage.createTask(3, 'tomorrow')
    /*
    await t
        .click(basePage.addButton)
        .typeText('.public-DraftStyleDefault-block', 'hello world', {paste: true})
        .typeText('.task_editor__description_field', 'This is the task description', {paste: true})
        .click('.reactist_button')
        .wait(1500)
        .expect(Selector('.task_content').innerText).contains('hello world')
        .expect(Selector('.task_description').innerText).contains('This is the task description')
        */
})