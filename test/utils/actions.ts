class Actions {
  public async typeIn(element, value) {
    await this.waitForElementToBeDisplayed(element);   
    await element.doubleClick();
    await browser.keys('Delete');
    await element.setValue(value);
  }

  // u edit opciji segmenta bez pauze baca gresku, ne stize da 'uhvati' lokator,..
  // da ne bih usporavao login, napravio sam novu metodu samo za edit segmenta
  public async typeInEditSegment(element, value) {
    await this.waitForElementToBeDisplayed(element);  
    await browser.pause(1300);  
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
