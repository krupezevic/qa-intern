import Actions from "../utils/actions";

class dynamicSegmentPage {
    public get addNewLink() {
        return $('//*[.="New"]')
    }

    public get segmentNameInput() {
        return $('.SpFieldInputWrapper input');
    }

    public get filters() {
        return $('.SpFormItem:nth-child(1)');
    }

    public get oneOfFilters() {
        return $('//div[contains(text(),"Added This Month")]');
    }

    public get saveButton() {
        return $('//button[.="Save"]');
    }

    public get selectSegmentByName() {
        return $('.SpTableTbody tr:nth-child(1) a');
    }

    public get editSegmentButton(){
        return $('.SpTableTbody tr:nth-child(1) div:nth-child(1) button');
    }

    public get deleteSegmentButton(){
        return $('.SpTableTbody tr:nth-child(1) div:nth-child(2) button');
    }

    public get confirmButton(){
        return $('//div[.="Confirm"]');
    }

    public async addNewSegment(name: string) {
        await Actions.clickOn(this.addNewLink);
        await Actions.typeIn(this.segmentNameInput, name);
        await Actions.clickOn(this.filters);
        await Actions.clickOn(this.oneOfFilters);
        await Actions.clickOn(this.saveButton);
    }

    public async deleteSegment(){
        await Actions.clickOn(this.deleteSegmentButton);
        await Actions.clickOn(this.confirmButton);
    }

    public async editSegment(name: string){
        await Actions.clickOn(this.editSegmentButton);
        await Actions.typeIn(this.segmentNameInput, name);
        await Actions.clickOn(this.saveButton);
    }
}
export default new dynamicSegmentPage();