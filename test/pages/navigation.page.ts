import actions from "../utils/actions";

class NavigationPage {

  public get navBar() {
    return $('.desktopNavigation');
  }
  public get tagsButton() {
    return $('.desktopNavigation a[href="/forms"]');
  }
  public async formsLink() {
    await actions.clickOn(this.navBar);
    await actions.clickOn(this.tagsButton);
  }
}
export default new NavigationPage();