import Actions from "../utils/actions";

class DynamicSegmentsPage {
    public get addNewLink() {
        return $('.SpSettingsHeader .SpSuperButtonContent')
    }

    public get segmentNameInput() {
        return $('[placeholder="My New Segment"]');
    }

    public get addFilterLink() {
        return $('//descendant::*[.="Add filter"][5]');
    }

    public get optionAddedThisMonth() {
        return $('//div[.="Added This Month")]');
    }

    public get saveButton() {
        return $('//button[.="Save"]');
    }

    public get selectSegmentByName() {
        return $('.SpTableTbody tr:nth-child(1) a');
    }

    public get editSegmentButton() {
        return $('.SpTableTbody tr:nth-child(1) div:nth-child(1) button');
    }

    public get deleteSegmentButton() {
        return $('.SpTableTbody tr:nth-child(1) div:nth-child(2) button');
    }

    public get confirmButton() {
        return $('//div[.="Confirm"]');
    }

    public async addNewSegment(name: string) {
        await Actions.clickOn(this.addNewLink);
        await Actions.typeIn(this.segmentNameInput, name);
        await Actions.clickOn(this.addFilterLink);
        await Actions.clickOn(this.optionAddedThisMonth);
        await Actions.clickOn(this.saveButton);
    }

    public async deleteSegment() {
        await Actions.clickOn(this.deleteSegmentButton);
        await Actions.clickOn(this.confirmButton);
    }

    public async editSegment(name: string) {
        await Actions.clickOn(this.editSegmentButton);
        await Actions.typeIn(this.segmentNameInput, name);
        await Actions.clickOn(this.saveButton);
    }
}
export default new DynamicSegmentsPage();