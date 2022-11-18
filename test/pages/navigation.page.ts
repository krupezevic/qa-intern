import Actions from "../utils/actions"
class navigation{
    
    public get navBar() {
        return $(".desktopNavigation");
        // return $(".scrollbar-container");
    }

    public get tagsButton(){
        return $('.desktopNavigation a[href="/tags"]');
    }

    public async tags() {
        await Actions.clickOn(this.navBar);
        // await this.tagsButton.moveTo();
        // await this.tagsButton.click();
        await Actions.clickOn(this.tagsButton);
        await browser.pause(1000);
    }

}
export default new navigation();