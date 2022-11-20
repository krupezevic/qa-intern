import Actions from "../utils/actions";

class NavigationPage {

  public get profileLink() {
    return $('.desktopNavigation a.SpNavItem[href="/settings/profiles"]');
  }

  public async navigateToProfilePageAndClick() {
    await this.profileLink.moveTo();
    await Actions.clickOn(this.profileLink);
  }
}
export default new NavigationPage();