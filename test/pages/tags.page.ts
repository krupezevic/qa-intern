import Actions from "../utils/actions";

//yarn e2e-stage-win
class Tags{

    public get addNewTag() {
        return $('//button[.="New"]');
    }

      public get newTagNameInput() {
        return $('//input[@id="name"]');
    }
    
    public async createTags(name: string) {
        await Actions.clickOn(this.addNewTag);
        await browser.pause(5000);
        await Actions.typeIn(this.newTagNameInput, name);
    }
    public async clickOnNewTag() {
        console.log('dosao ovde');
        await Actions.waitForElementToBeDisplayed(this.addNewTag);
        await Actions.clickOn(this.addNewTag);
        console.log('zavrsio ovde');
        await browser.pause(3000);
    }
}
export default new Tags();