import Actions from "../utils/actions";

//yarn e2e-stage-win
class Tags{
    i:Number;
    public get addNewTag() {
        return $('//button[.="New"]');
    }

      public get newTagNameInput() {
        return $('#name');
      }
    
    public get buttonSave() {
        return $('//*[.="save"]');
    }
    public get deleteButton() {
        return $('//*[.="Delete"]')
    }

    public get selectTagsByName() {
        return $('.SpTableTbody tr:nth-child(1) td:nth-child(2)');
    }

    public get timeCreated() {
        return $('.SpTableTbody tr:nth-child(1) td:nth-child(3)')
    }
    
    public get checkers() {
        return ("tbody use");
       
    }
    public get firstChecker() {
        return $('tbody tr:nth-child(1) td:nth-child(1)')
    }
    public async checkAny(userToBeSelected) {
        return $('tbody tr:nth-child("'+ userToBeSelected +'") td:nth-child(1)')
    }
    public async selectByUserName(userName) {
      
        await Actions.clickOn((await (await $("//*[.='" + userName + "']")).parentElement()).previousElement());
        // let span = $("//*[.='" + userName + "']");
        // let tdField = span.parentElement();
        // await Actions.clickOn(tdField.previousElement())
        
    }

    public async selectTwoTags(user1,user2) {
        await this.selectByUserName(user1);
        await this.selectByUserName(user2);
    }
    public async anyButton(buttonName) {

        await Actions.clickOn($('//*[.="' + buttonName + '"]'));
        
    }

    public get numberOfRows() {
        return  $$("//tbody//tr").length;
    }
    public async deleteFirstUser() {
        this.i= Number(this.numberOfRows);
        this.anyButton("Delete");
        await browser.pause(1000);
        this.anyButton("confirm");
        await browser.pause(1000);
        
    }
    
    public async checkNUmberOfRowsAfterDelete() {
        await expect(Number(this.numberOfRows)).toEqual(Number(this.i) - 1)
        await browser.pause(1000)
    }
    
    public async createTags(name: string) {
        await Actions.typeIn(this.newTagNameInput, name);
        await browser.pause(2000);
        await this.anyButton("save");
        
    }
    
    public async clickOnNewTag() {
        await Actions.waitForElementToBeDisplayed(this.addNewTag);
        await Actions.clickOn(this.addNewTag);
        await browser.pause(3000);
    }
}
export default new Tags();