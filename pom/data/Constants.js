import dotenv from 'dotenv'
dotenv.config()

export const URLS = {
    LOGIN_URL: `${process.env.BASE_URL}/users/showlogin`
}

export const CREDENTIALS = {
    INVALID_USER: {
        PASSWORD: 'INVALID PASSWORD',
        USERNAME: 'INVALID USERNAME'
    },

    VALID_USER: {
        PASSWORD: process.env.VALID_USER_PASSWORD,
        USERNAME: process.env.VALID_USER
    }
}

export const MESSAGES = {
    ERROR: {
        LOGIN_PAGE: {
            INVALID_CREDENTIALS: 'Wrong email or password.',
            INVALID_EMAIL: 'Invalid email address.'
        }
    }
}

export const DATE = {
    TODAY: 'Today',
    TOMORROW: 'Tomorrow'
}

export const NUMBER_OF_TASKS = {
    MAXIMUM: 10,
    MINIMUM: 1
}

export const NAME_OF_TASKS = {
    TODAY: 'Tarea para hoy ',
    TOMORROW: 'Tarea para maniana '
}

export const PROJECT_ATTRIBUTES = {
    FAVORITE_PROJECT: true,
    PROJECT_COLOR: 'Orange',
    PROJECT_TITLE: 'experimento',
    REGULAR_PROJECT: false
}

export const WAIT = {
    LOADPAGE: 1500,
    LOADVIEW: 500
}