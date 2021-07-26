import dotenv from 'dotenv'
dotenv.config()

export const URLS = {
    LOGIN_URL: process.env.BASE_URL + '/users/showlogin'
}

export const CREDENTIALS = {
    VALID_USER: {
        USERNAME: process.env.VALID_USER,
        PASSWORD: process.env.VALID_USER_PASSWORD
    },

    INVALID_USER: {
        USERNAME: 'INVALID USERNAME',
        PASSWORD: 'INVALID PASSWORD'
    }
}

export const MESSAGES = {
    ERROR: {
        LOGIN_PAGE: {
            INVALID_EMAIL: 'Invalid email address.',
            INVALID_CREDENTIALS: 'Wrong email or password.'
        }
    }
}

export const DATE = {
    TODAY: 'TODAY',
    TOMORROW: 'TOMORROW'
}

export const NUMBER_OF_TASKS = {
    MINIMUM: 1,
    MAXIMUM: 10
}

export const NAME_OF_TASKS = {
    TODAY: 'Tarea para hoy ',
    TOMORROW: 'Tarea para maniana '
}

export const PROJECT_ATTRIBUTES = {
    PROJECT_TITLE: 'This is the title',
    PROJECT_COLOR: 'Orange'
}

export const WAIT = {
    LOADPAGE: 1500,
    LOADVIEW: 500
}