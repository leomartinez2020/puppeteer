module.exports = class PageModel {
    constructor(page, config) {
        this.page = page;
        this.config = config;
    }
    async go() {
        await this.page.goto(this.config.baseUrl);
    }
    async title() {
        return await this.page.title();
    }
}