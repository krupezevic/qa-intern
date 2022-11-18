import Actions from "../utils/actions";

//yarn e2e-stage-win
class Tags{

    public get addNewTag() {
        return $('//button[.="New"]');
    }

      public get newTagNameInput() {
        return $('#name');
      }
    
    public get buttonSave() {
        return $('//*[.="save"]');
    }

    public get selectTagsByName() {
        return $('.SpTableTbody tr:nth-child(1)');
    }

    public get checkTag() {
        return $('//*[.="Percan"]')

    }

    public get checkTag2() {
        return $('//*[.="Yui"]')

    }

    public async selectTwoTags() {
        await Actions.clickOn(this.checkTag);
        await Actions.clickOn(this.checkTag2);
    }

    public async createTags(name: string) {
        await Actions.typeIn(this.newTagNameInput, name);
        await browser.pause(2000);
        await Actions.clickOn(this.buttonSave);
    }
    public async clickOnNewTag() {
        await Actions.waitForElementToBeDisplayed(this.addNewTag);
        await Actions.clickOn(this.addNewTag);
        await browser.pause(3000);
    }
}
export default new Tags();