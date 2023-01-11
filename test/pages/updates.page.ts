import actions from "../utils/actions";

class UpdatesPage {
    public get newUpdateButton() {
        return $('.cta__new-update-button')
    }

    public get savedResponse() {
        return $("//img[@alt='⚡']")
    }

    public get firstSavedResponse() {
        return $('.sc-fpyFWH.bcPHss.SpSortableItem:nth-child(1)')
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
        return $('//*[text()="Include Opt Out"]')
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
        return $('.filter-label span')
    }

    public get firstUpdate() {
        return $('.SpUpdateListWrapper >div:nth-child(1) >div:nth-child(2)')
    }

    public get numberOfDidntRespond() {
        return $('.SpAvatarContent > div:nth-child(1)')
    }

    public get viewNumberOfDidntRespond() {
        return $('.Supper-button-text')
    }

    public get verifyNumberOfDidntRespond() {
        return $("//div[@class='sc-dtDOqo gMcGwr SpHeading']")
    }

    public get resendButton() {
        return $("//span[contains(text(),'Send Update')]")
    }

    public get numberOfRecipients() {
        return $('//*[text()="196 Recipients"]')
    }

    public get allContactsLink() {
        return $("//b[@class='sc-evQXBP bGGIBJ SpSendToName']")
    }

    public get numberOfContacts() {
        return $("//div[@class='sc-dtDOqo gMcGwr SpHeading']")
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

    public async checkNumberOfDidntResponded() {
        await actions.clickOn(this.firstUpdate);
    }

    public async verifyNumberOfDidntResponded() {
        await actions.clickOn(this.viewNumberOfDidntRespond);
    }

    public async resendUpdate() {
        await actions.clickOn(this.resendButton);
        await actions.clickOn(this.savedResponse);
        await actions.clickOn(this.firstSavedResponse);
        await actions.clickOn(this.includeBrandName);
        await actions.clickOn(this.includeOptOut);
        await browser.keys('Space'); //TODO remove this ones the bug is fixed: The merge field is not recognized after choosing 'saved response' on Updates Page
    }

    public async verifyRecipients() {
        await actions.clickOn(this.firstUpdate);
    }

    public async verifyContacts() {
        await actions.clickOn(this.allContactsLink);
    }

}

export default new UpdatesPage();