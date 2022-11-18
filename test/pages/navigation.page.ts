import Actions from "../utils/actions"
class navigation{
    
    public get navBar() {
        return $(".desktopNavigation");
        // return $(".scrollbar-container");
    }

    public get tagsButton(){
        return $(".desktopNavigation a[href='/tags']");
    }

    public async Tags() {
        await Actions.clickOn(this.navBar);
        await Actions.clickOn(this.tagsButton);
        await browser.pause(3000);
    }

}
export default new navigation();