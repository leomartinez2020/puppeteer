module.exports = ({
    local: {
        baseUrl: 'http://www.uitestingplayground.com/textinput',
        buttonName: 'Cypress',
        launchOptions: { headless: false },
        timeout: 50000,
    },
    CI: {
        baseUrl: 'http://www.uitestingplayground.com/textinput',
        buttonName: 'Cypress',
        launchOptions: { 
            executablePath: process.env.PUPPETEER_EXEC_PATH,
            headless: true,
            args: ['--no-sandbox'],
        },
        timeout: 50000,
    },
    test: {},
    prod: {}
})[process.env.TESTENV || 'local']