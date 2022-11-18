class Actions {
  public async typeIn(element, value) {
    await this.waitForElementToBeDisplayed(element);
    await element.doubleClick();
    await browser.keys('Delete');
    await element.setValue(value);
  }

  public async clickOn(element) {
    await this.waitForElementToBeDisplayed(element);
    await element.click();
  }

  public async waitForElementToBeDisplayed(element) {
    await element.waitForExist();
    await element.waitForDisplayed();
    await element.waitForClickable();
  }

  public async typeInVC(element, value) {
    await this.waitForElementToBeDisplayed(element);
    await element.clearValue();
    await element.setValue(value);
  }
}
export default new Actions();
