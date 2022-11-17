class Actions {
  public async typeIn(element, value) {
    await this.waitForElementToBeDisplayed(element);
    //bagovao je bez pauze u edit-u imena segmenta...  
    await browser.pause(1000);  
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

}
export default new Actions();
