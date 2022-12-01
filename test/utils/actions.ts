class Actions {

  public async typeIn(element, value) {
    await this.waitForElementToBeClickable(element);
    await element.doubleClick();
    await browser.keys('Delete');
    await element.setValue(value);
  }

  public async clickOn(element) {
    await this.waitForElementToBeClickable(element);
    await element.click();
  }

  public async waitForElementToBeDisplayed(element) {
    await element.waitForExist();
    await element.waitForDisplayed();
  }

  public async waitForElementToBeClickable(element) {
    await this.waitForElementToBeDisplayed(element);
    await element.waitForClickable();
  }

  public async waitForPageLoad() {
    browser.waitUntil(
      () => browser.execute(() => document.readyState === 'complete'),
      {
        timeout: 60 * 1000,
        timeoutMsg: 'Page not loaded!'
      });
  }

  public async waitForButtonSaveToBeEnabled(element) {
    await browser.waitUntil(
      async () => (await element.getAttribute("class")) !==
        ("sc-dvQaRk hfkeMz Supper-button Supper-button-button  disabled"), { timeout: 3000, timeoutMsg: "Element still disabled" });
  }
}
export default new Actions();