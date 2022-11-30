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
    await this.dynamicSegmentLink.click()
  }
  public get widgetsPageLink() {
    return $('.desktopNavigation a[href="/widgets"]');
  }

  public async navigateToWidgetsPage() {
    await this.widgetsPageLink.moveTo();
    await Actions.clickOn(this.widgetsPageLink);
  }
}
export default new NavigationPage();