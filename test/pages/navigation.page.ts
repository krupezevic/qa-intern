import Actions from "../utils/actions";

class NavigationPage {

  public get profileLink() {
    return $('.desktopNavigation a.SpNavItem[href="/settings/profiles"]');
  }

  public get dynamicSegmentLink() {
    return $('.desktopNavigation a[href="/segments"]');
  }

  public async navigateToProfilePage() {
    await this.profileLink.moveTo();
    await Actions.clickOn(this.profileLink);
  }

  public async navigateToDynamicSegmentAndCLick() {
    await this.dynamicSegmentLink.moveTo();
    await this.dynamicSegmentLink.click();
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

  public async navigationToPhoneNumbersPage() {
    await Actions.clickOn(this.dropDownMenu);
    await Actions.clickOn(this.phoneNumersCard);
  }

  public get navBar() {
    return $('.desktopNavigation');
  }

  public get formsButton() {
    return $('.desktopNavigation a[href="/forms"]');
  }

  public async formsLink() {
    await actions.waitForPageLoad();
    await actions.clickOn(this.navBar);
    await actions.waitForPageLoad();
    await actions.clickOn(this.formsButton);
  }

  public get tagsButton() {
    return $('.desktopNavigation a[href="/tags"]');
  }

  public async tagsLink() {
    await Actions.clickOn(this.navBar);
    await Actions.clickOn(this.tagsButton);
  }
}
export default new NavigationPage();