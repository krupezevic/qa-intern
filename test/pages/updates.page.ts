import actions from "../utils/actions";

class UpdatesPage {
    public get newUpdateButton() {
        return $('.cta__new-update-button')
    }

    public get savedResponse() {
        return $("//img[@alt='⚡']")
    }

    public get firstSavedResponse() {
        return $('.SpSortable >div:nth-child(1)')
    }

    public get textBox() {
        return $("div[role='textbox']")
    }

    public get updateTextField() {
        return $('.DraftEditor-root')
    }

    public get includeBrandName() {
        return $('//*[text()="Include Brand Name"]')
    }

    public get includeOptOut() {
        return $('.SpComplianceActions >div:nth-child(2)')
    }

    public get updateRecipients() {
        return $('.css-tlfecz-indicatorContainer')
    }

    public get selectAllContacts() {
        return $("//div[contains(text(),'All Contacts')]")
    }

    public get scheduledTime() {
        return $('.react-datepicker__input-container')
    }

    public get selectTime() {
        return $('.react-datepicker__time-list')
    }

    public get saveUpdate() {
        return $("//span[normalize-space()='Save']")
    }

    public get scheduleUpdate() {
        return $("//span[normalize-space()='Schedule']")
    }

    public get allUpdates() {
        return $("//span[@class='label-text']")
    }

    public get scheduledUpdates() {
        return $("//span[normalize-space()='Scheduled Updates']")
    }

    public get checkUpdate() {
        return $('.SpFilterBar .filter-label span')
    }

    public get firstUpdate() {
        return $(".SpUpdateListWrapper .update-item:nth-child(2)")
    }

    public get noResponseNumber() {
        return $('.SpAvatarContent > div:nth-child(1)')
    }

    public get responseViewButton() {
        return $('.Supper-button-text')
    }

    public get viewContacts() {
        return $('.title-content .SpHeading')
    }

    public get resendButton() {
        return $("//span[contains(text(),'Send Update')]")
    }

    public get numberOfRecipients() {
        return $('.hideRevenue >div:nth-child(1) >div:nth-child(1)')
    }

    public get allContactsLink() {
        return $('#analytic-report .SpSendToName')
    }

    public get numberOfContacts() {
        return $('.title-content .SpHeading')
    }

    public get settings() {
        return $('.nav-tabs a[href="/compliance/settings"]')
    }

    public get editBrandName() {
        return $("input[placeholder='Enter brand name']")
    }

    public get editOptOut() {
        return $('//div[@class="form-group"][2]/div/input')
    }

    public get defaultOptOut() {
        return $("//span[normalize-space()='Set to Default']")
    }

    public get saveButton() {
        return $("//span[normalize-space()='save']")
    }

    public get editorContainer() {
        return $('.DraftEditor-editorContainer')
    }

    public get charactersLimit() {
        return $("//span[@class='sc-jSYIrd Avpex SpCounterBoxText']")
    }

    public get manageButton2() {
        return $("//a[@class='manage clickable']")
    }

    public get myNewSegment() {
        return $("input[placeholder='My New Segment']")
    }

    public get segmentFilter() {
        return $('.SpFormItem #filter >div:nth-child(1)')
    }

    public get addedThisYear() {
        return $("#react-select-4-option-4")
    }

    public get segmentLabel() {
        return $('segment-label')
    }

    public async newUpdate(name: string) {
        await actions.clickOn(this.newUpdateButton);
        await actions.clickOn(this.textBox);
        await actions.typeIn(this.textBox, name);
        await actions.clickOn(this.updateRecipients);
        await actions.clickOn(this.selectAllContacts);
        await actions.clickOn(this.scheduledTime);
        await actions.clickOn(this.selectTime);
    }

    public async sendUpdate() {
        await actions.clickOn(this.saveUpdate);
        await actions.clickOn(this.scheduleUpdate);
    }

    public async checkScheduledUpdate() {
        await actions.waitForElementToBeDisplayed(this.allUpdates);
        await actions.clickOn(this.allUpdates);
        await actions.waitForElementToBeDisplayed(this.scheduledUpdates);
        await actions.clickOn(this.scheduledUpdates);
    }

    public async clickOnFirstUpdate() {
        await actions.clickOn(this.firstUpdate);
    }

    public async getNumberOfDidntResponded() {
        await actions.clickOn(this.responseViewButton);
    }

    public async resendUpdate() {
        await actions.clickOn(this.resendButton);
        await actions.clickOn(this.savedResponse);
        await actions.clickOn(this.firstSavedResponse);
        await actions.clickOn(this.includeBrandName);
        await actions.clickOn(this.includeOptOut);
        await browser.keys('Space'); //TODO remove this once the bug is fixed: The merge field is not recognized after choosing 'saved response' on Updates Page
    }

    public async getContacts() {
        await actions.clickOn(this.allContactsLink);
    }

    public async brandOptUpdate(faker: string, brand: string) {
        await actions.clickOn(this.settings);
        await actions.clickOn(this.editBrandName);
        await actions.typeIn(this.editBrandName, brand);
        await actions.clickOn(this.editOptOut);
        await actions.clearValueAndType(this.editOptOut, faker +' stop');
        await actions.clickOn(this.saveButton);
    }

    public async settingsChanges() {
        await actions.clickOn(this.newUpdateButton);
        await actions.clickOn(this.includeBrandName);
        await actions.clickOn(this.includeOptOut);
    }

    public async numberOfCharacters(message: string) {
        await actions.clickOn(this.newUpdateButton);
        await actions.clickOn(this.textBox);
        await actions.typeIn(this.textBox, message);
    }

    public async updateSegment(segment: string) {
        await actions.clickOn(this.newUpdateButton);
        await actions.clickOn(this.manageButton2);
        await actions.typeIn(this.myNewSegment, segment);
        await actions.clickOn(this.segmentFilter);
        await actions.clickOn(this.addedThisYear);
    }
}

export default new UpdatesPage();