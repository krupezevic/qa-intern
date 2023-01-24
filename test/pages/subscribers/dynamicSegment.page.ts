import actions from "../../utils/actions";

class segmentsPage{
    public get newSegmentButton() {
        return $('.segment-settings-header .Supper-button');
    }

    public get editSegmentButton() {
        return $('tr:nth-child(1) .segment-control  >div:nth-child(1) >div:nth-child(1)');
    }

    public get deleteSegmentButton() {
        return $('tr:nth-child(1) .segment-control  >div:nth-child(1) >div:nth-child(2) button')
    }

    public get segmentName() {
        return $('.save-segment .segment-info input');
    }

    public get filterAge() {
        return $('.sp-select__menu-list >div:nth-child(6)');
    }

    public get addAge() {
        return $('.segment-text >div:nth-child(4) input');
    }

    public get isAge() {
        return $('.segment-text >div:nth-child(3) >div:nth-child(1)');
    }

    public get saveSegment() {
        return $('.text-center >div:nth-child(2) span');
    }

    public get filter() {
        return $('.SpSegmentBuilderWrapper >div:nth-child(1)');
    }

    public get filter2() {
        return $('.save-segment .builder-view >div:nth-child(2) >div:nth-child(1)');
    }

    public get allSegments() {
        return $('.SpTableTbody');
    }

    public get aboveAge() {
        return $('.segment-text .Select-menu >div:nth-child(2)');
    }

    public get addedLastMonth() {
        return $('.sp-select__menu-list >div:nth-child(1)');
    }

    public get hasBeenContacted() {
        return $('.sp-select__menu-list >div:nth-child(14)');
    }

    public get firstSegment() {
        return $('.SpTableTbody tr:nth-child(1)');
    }

    public get checkAddedLastMonth() {
        return $('.SpSegmentScrollWrapper .segment-label');
    }

    public get checkHasBeenContacted() {
        return $('.segment-dropdown .Select-value span');
    }

    public get confirmDelete() {
        return $("//span[contains(text(),'Confirm')]");
    }

    public async createSegment(name: string, age: string) {
        await actions.waitForElementToBeClickable(this.newSegmentButton);
        await actions.clickOn(this.newSegmentButton);
        await actions.clickOn(this.segmentName);
        await actions.typeIn(this.segmentName, name);
        await actions.clickOn(this.filter);
        await actions.waitForElementToBeDisplayed(this.filterAge);
        await actions.clickOn(this.filterAge);
        await actions.waitForElementToBeDisplayed(this.isAge);
        await actions.clickOn(this.isAge);
        await actions.waitForElementToBeDisplayed(this.aboveAge);
        await actions.clickOn(this.aboveAge);
        await actions.clickOn(this.addAge);
        await actions.typeIn(this.addAge, age);
    }

    public async saveNewSegment() {
        await actions.waitForElementToBeClickable(this.saveSegment);
        await actions.clickOn(this.saveSegment);
        await actions.waitForElementToBeDisplayed(this.firstSegment);
    }

    public async editSegment(name: string) {
        await actions.clickOn(this.editSegmentButton);
        await actions.clickOn(this.segmentName);
        await actions.typeIn(this.segmentName, name);
    }

    public async deleteSegment() {
        await actions.waitForElementToBeDisplayed(this.deleteSegmentButton);
        await actions.clickOn(this.deleteSegmentButton);
        await actions.waitForElementToBeClickable(this.confirmDelete);
        await actions.clickOn(this.confirmDelete);
    }

    public async addFilters(name: string) {
        await actions.waitForElementToBeClickable(this.newSegmentButton);
        await actions.clickOn(this.newSegmentButton);
        await actions.clickOn(this.segmentName);
        await actions.typeIn(this.segmentName, name);
        await actions.clickOn(this.filter);
        await actions.clickOn(this.addedLastMonth);
        await actions.clickOn(this.filter2);
        await actions.clickOn(this.hasBeenContacted);
    }
}
export default new segmentsPage();