import Actions from "../utils/actions";

class NavigationPage {

 
  public get contactsLink() {
    return $('.desktopNavigation .SpNavGroupContent a[href="/contacts"]');
  }
 
  public get profileLink() {
    return $('.desktopNavigation a.SpNavItem[href="/settings/profiles"]');
  }

  public get dynamicSegmentLink() {
    return $('.desktopNavigation a[href="/segments"]');
  }

  public get widgetsPageLink() {
    return $('.desktopNavigation a[href="/widgets"]');
  }

  public get dropDownMenu() {
    return $('.userName');
  }

  public get phoneNumersCard() {
    return $('.SpActionDropdownContent a[href="/phone-numbers"]');
  }

  public get navBar() {
    return $('.desktopNavigation');
  }

  public get formsButton() {
    return $('.desktopNavigation a[href="/forms"]');
  }

  public get tagsButton() {
    return $('.desktopNavigation a[href="/tags"]');
  }

  public async navigationToPhoneNumbersPage() {
    await Actions.clickOn(this.dropDownMenu);
    await Actions.clickOn(this.phoneNumersCard);
  }

  public async formsLink() {
    await Actions.waitForPageLoad();
    await Actions.clickOn(this.navBar);
    await Actions.waitForPageLoad();
    await Actions.clickOn(this.formsButton);
  }

  public async tagsLink() {
    await Actions.clickOn(this.navBar);
    await Actions.clickOn(this.tagsButton);
  }
  
  public async navigateToContactsPage() {
    await this.contactsLink.moveTo();
    await this.contactsLink.click();
  }

  public async navigateToProfilePage() {
    await this.profileLink.moveTo();
    await Actions.clickOn(this.profileLink);
  }

  public async navigateToDynamicSegmentAndCLick() {
    await this.dynamicSegmentLink.moveTo();
    await this.dynamicSegmentLink.click();
  }
  
}
export default new NavigationPage();