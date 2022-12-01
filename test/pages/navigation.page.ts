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
}

export default new NavigationPage();