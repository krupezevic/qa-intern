import Actions from '../utils/actions';
class Navigation {
  public get navBar() {
    return $('.desktopNavigation');
  }

  public get tagsButton() {
    return $('.desktopNavigation a[href="/tags"]');
  }

  public async tagsLink() {
    await Actions.clickOn(this.navBar);
    await Actions.clickOn(this.tagsButton);
  }
}
export default new Navigation();
