module.exports = ({
    local: {
        baseUrl: 'https://example.cypress.io/commands/actions',
        pageTitle: 'Cypress'
    },
    test: {},
    prod: {}
})[process.env.TESTENV || 'local']