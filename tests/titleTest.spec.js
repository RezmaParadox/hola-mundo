const { Builder, By, until } = require('selenium-webdriver');
    const chrome = require('selenium-webdriver/chrome');
    const assert = require('assert');

    describe('Prueba de titulo', function() {
    let driver;

    before(async function() {
        driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(new chrome.Options().addArguments(
            '--headless',
            '--no-sandbox',
            `--user-data-dir=/tmp/chrome-user-data-${Date.now()}`,
        ))
        .build();
    });

    it('Verificar el contenido del título', async function() {
        await driver.get('http://localhost:4200/');
        await driver.wait(until.elementLocated(By.tagName('h1')), 10000);
        let content = await driver.findElement(By.tagName('h1')).getText();
        assert.strictEqual(content, 'Hello World :)!');
    });

    after(async function() {
        if (driver) {
        await driver.quit();
        }
    });
});
