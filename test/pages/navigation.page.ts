import actions from "../utils/actions";

class NavigationPage {

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
}
export default new NavigationPage();