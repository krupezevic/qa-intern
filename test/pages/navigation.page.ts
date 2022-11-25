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
}
export default new NavigationPage();