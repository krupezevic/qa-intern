class NavigationPage {
  public get dynamicSegmentLink() {
    return $('.desktopNavigation a[href="/segments"]');
  }

  public async navigateToDynamicSegmentAndCLick() {
    await this.dynamicSegmentLink.moveTo();
    await this.dynamicSegmentLink.click()
  }
}
export default new NavigationPage();