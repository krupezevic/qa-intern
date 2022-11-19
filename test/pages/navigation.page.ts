class NavigationPage {

  public get profileLink() {
    return $('.desktopNavigation a.SpNavItem[href="/settings/profiles"]');
  }

  public async navigateToProfilePageAndClick() {
    await this.profileLink.moveTo();
    await this.profileLink.click()
  }
}
export default new NavigationPage();