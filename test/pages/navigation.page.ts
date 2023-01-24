import actions from "../utils/actions";

class NavigationPage {

  public get tagsLinkButton() {
    return $('.desktopNavigation .SpNavGroup:nth-child(2) [href="/tags"]');
  }

  public get contactsLink() {
    return $('.desktopNavigation .SpNavGroupContent a[href="/contacts"]');
  }
 
  public get profileLink() {
    return $('.desktopNavigation a.SpNavItem[href="/settings/profiles"]');
  }

  public get dynamicSegmentLink() {
    return $('.desktopNavigation a[href="/segments"]');
  }

  public get updatesLink() {
    return $('.desktopNavigation a[href="/updates"]')
  }

  public get complianceLink() {
    return $('.desktopNavigation a[href="/compliance"]')
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

  public get navBar() {
    return $('.desktopNavigation');
  }

  public get formsButton() {
    return $('.desktopNavigation a[href="/forms"]');
  }

  public get tagsButton() {
    return $('.desktopNavigation a[href="/tags"]');
  }

  public async navigationToPhoneNumbersPage() {
    await actions.clickOn(this.dropDownMenu);
    await actions.clickOn(this.phoneNumersCard);
  }

  public async formsLink() {
    await actions.waitForPageLoad();
    await actions.clickOn(this.navBar);
    await actions.waitForPageLoad();
    await actions.clickOn(this.formsButton);
  }

  public async tagsLink() {
    await actions.clickOn(this.navBar);
    await actions.clickOn(this.tagsButton);
  }
  
  public async navigateToContactsPage() {
    await this.contactsLink.moveTo();
    await this.contactsLink.click();
  }

  public async navigateToProfilePage() {
    await this.profileLink.moveTo();
    await actions.clickOn(this.profileLink);
  }

  public async navigateToDynamicSegmentAndCLick() {
    await this.dynamicSegmentLink.moveTo();
    await this.dynamicSegmentLink.click();
  }

  public async navigateToUpdatesPage() {
    await this.updatesLink.moveTo();
    await this.updatesLink.click();
  }

  public async navigateToCompliancePage() {
    await this.complianceLink.moveTo();
    await this.complianceLink.click();
  }

  public async navigateToTagsPage() {
    await this.tagsLinkButton.moveTo();
    await this.tagsLinkButton.click();
  }
  
}
export default new NavigationPage();