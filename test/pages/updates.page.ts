import actions from "../utils/actions";

class UpdatesPage {
    public get newUpdateButton() {
        return $('.cta__new-update-button');
    }

    public get savedResponse() {
        return $("//img[@alt='⚡']");
    }

    public get firstSavedResponse() {
        return $('.SpSortable >div:nth-child(1)');
    }

    public get textBox() {
        return $("div[role='textbox']");
    }

    public get updateTextField() {
        return $('.DraftEditor-root');
    }

    public get includeBrandName() {
        return $('//*[text()="Include Brand Name"]');
    }

    public get includeOptOut() {
        return $('.SpComplianceActions >div:nth-child(2)');
    }

    public get updateRecipients() {
        return $('.item-recipients .sp-select__indicators >div>div');
    }

    public get selectAllContacts() {
        return $("//div[contains(text(),'All Contacts')]");
    }

    public get scheduledTime() {
        return $('.react-datepicker__input-container');
    }

    public get selectTime() {
        return $('.react-datepicker__time-list');
    }

    public get saveUpdate() {
        return $(".text-center >div:nth-child(2)");
    }

    public get scheduleUpdate() {
        return $("//span[normalize-space()='Schedule']");
    }

    public get allUpdates() {
        return $("//span[@class='label-text']");
    }

    public get scheduledUpdates() {
        return $("//span[normalize-space()='Scheduled Updates']");
    }

    public get firstUpdate() {
        return $(".SpUpdateListWrapper .update-item:nth-child(1)");
    }

    public get secondUpdate() {
        return $(".SpUpdateListWrapper .update-item:nth-child(3)");
    }

    public get noResponseNumber() {
        return $('.SpAvatarContent > div:nth-child(1)');
    }

    public get responseViewButton() {
        return $('.Supper-button-text');
    }

    public get viewContacts() {
        return $('.SpHeading');
    }

    public get resendButton() {
        return $("//span[contains(text(),'Send Update')]");
    }

    public get numberOfRecipients() {
        return $('.hideRevenue >div:nth-child(1) .item-amount');
    }

    public get allContactsLink() {
        return $('#analytic-report .SpSendToName');
    }

    public get settings() {
        return $('.nav-tabs a[href="/compliance/settings"]');
    }

    public get editBrandName() {
        return $("input[placeholder='Enter brand name']");
    }

    public get editOptOut() {
        return $('.settingsViews .SpShadeBoxInner >div:nth-child(2) input');
    }

    public get defaultOptOut() {
        return $("//span[normalize-space()='Set to Default']");
    }

    public get saveButton() {
        return $("//span[normalize-space()='save']");
    }

    public get editorContainer() {
        return $('.DraftEditor-editorContainer');
    }

    public get charactersLimit() {
        return $('.update-content-wrapper .SpCounterBoxWrapper .SpCounterBox span');
    }

    public get manageButton2() {
        return $("//a[@class='manage clickable']");
    }

    public get myNewSegment() {
        return $("input[placeholder='My New Segment']");
    }

    public get segmentFilter() {
        return $('.SpFormItem #filter >div:nth-child(1)');
    }

    public get addedThisYear() {
        return $('.sp-select__menu-list >div:nth-child(5)');
    }

    public get segmentLabel() {
        return $('segment-label');
    }

    public get createSavedResponse() {
        return $('.sr-add .moon');
    }

    public get responseName() {
        return $('.sr-form .title-input');
    }

    public get saveNewResponseButton() {
        return $('.SuperModal .text-center span');
    }

    public get textboxSavedResponse() {
        return $('(//div[@class="notranslate public-DraftEditor-content"])[2]');
    }

    public get savedResponseSearch() {
        return $('.SpSavedResponseListWrapper .form-control');
    }

    public get deleteResponse() {
        return $('.SpSortableItem:nth-child(1) .tag-x');
    }

    public get savedResponseList() {
        return $('.SpSortableWrapper >div:nth-child(1)');
    }

    public get allSavedResponses() {
        return $('.SpSortable');
    }

    public get confirmDelete() {
        return $('.SpPopperTooltip .SpSortable .gold');
    }

    public get noResponseFound() {
        return $('.SpSavedResponseListWrapper .gray-center-container >div:nth-child(1)');
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

    public async firstUpdateText() {
        await this.firstUpdate.getText();
        return this.firstUpdateText();
    }

    public async secondUpdateText() {
        await this.firstUpdate.getText();
        return this.secondUpdateText();
    }

    public async noResponseText() {
        await this.noResponseNumber.getText();
        return this.noResponseText();
    }

    public async allContactsText() {
        await this.viewContacts.getText();
        return this.allContactsText();
    }

    public async numberOfRecipientsText(){
        await this.numberOfRecipients.getText();
        return this.numberOfRecipientsText();
    }

    public async charactersLimitText(){
        await this.charactersLimit.getText();
        return this.charactersLimitText();
    }

    public async resendUpdate() {
        await actions.clickOn(this.resendButton);
        await actions.clickOn(this.savedResponse);
        await actions.waitForElementToBeDisplayed(this.firstSavedResponse);
        await actions.clickOn(this.firstSavedResponse);
        await actions.clickOn(this.includeBrandName);
        await actions.clickOn(this.includeOptOut);
        await browser.keys('Space'); //TODO remove this once the bug is fixed: The merge field is not recognized after choosing 'saved response' on Updates Page
    }

    public async brandOptUpdate(faker: string, brand: string) {
        await actions.clickOn(this.settings);
        await actions.clickOn(this.editBrandName);
        await actions.typeIn(this.editBrandName, brand);
        await actions.clickOn(this.editOptOut);
        await actions.clearValueAndType(this.editOptOut, faker +' stop');
        await actions.waitForElementToBeClickable(this.saveButton);
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

    public async newSavedResponse(name: string, text: string) {
        await actions.clickOn(this.newUpdateButton);
        await actions.clickOn(this.savedResponse);
        await actions.clickOn(this.createSavedResponse);
        await actions.typeIn(this.responseName, name);
        await actions.typeIn(this.textboxSavedResponse, text);
        await actions.clickOn(this.saveNewResponseButton);
        await actions.clickOn(this.savedResponse);
    }

    public async deleteSavedResponse(name: string, text: string, response: string) {
        await actions.clickOn(this.newUpdateButton);
        await actions.clickOn(this.savedResponse);
        await actions.clickOn(this.createSavedResponse);
        await actions.waitForElementToBeClickable(this.responseName);
        await actions.typeIn(this.responseName, name);
        await actions.waitForElementToBeClickable(this.textboxSavedResponse);
        await actions.typeIn(this.textboxSavedResponse, text);
        await actions.clickOn(this.saveNewResponseButton);
        await actions.clickOn(this.savedResponseSearch);
        await actions.waitForElementToBeClickable(this.savedResponseSearch);
        await actions.typeIn(this.savedResponseSearch, response);
        await actions.waitForElementToBeDisplayed(this.savedResponseList);
        await this.savedResponseList.moveTo();
        await actions.waitForElementToBeClickable(this.deleteResponse);
        await actions.clickOn(this.deleteResponse);
        await actions.waitForElementToBeClickable(this.confirmDelete);
        await actions.clickOn(this.confirmDelete);
        await actions.clickOn(this.savedResponseSearch);
        await browser.keys('Space');
    }

}

export default new UpdatesPage();