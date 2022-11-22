import Actions from "../utils/actions";

class NavigationPage {
    public get widgetsPageLink() {
        return $('.desktopNavigation a[href="/widgets"]');
      }
    
      public async navigateToWidgetsPage() {
        await this.widgetsPageLink.moveTo();
        await Actions.clickOn(this.widgetsPageLink);
      }
}
export default new NavigationPage();