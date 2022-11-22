import Actions from "../utils/actions";

class WidgetsPage {

    public get newWidgetLink() {
        return $('//button[.="New"]');
    }

    public get widgetName() {
        return $('[placeholder="Name"]');
    }

    public get applyInboundTag() {
        return $('.Select-input input');
    }

    public get optionTag988() {
        return $('//*[.="tag988"]');
    }

    public get selectCreateTagLink() {
        return $('#react-select-4--option-0')
    }

    public get formField() {
        return $('#form');
    }

    public get optionMyTestForm() {
        return $('#react-select-2-option-4');
    }

    public get checkboxEnabledUnderAutoResponseUnknownNumbers() {
        return $('//descendant::*[@class="checkbox-text"][1]');
    }

    public get checkboxSendVCardUnderAutoResponseUnknownNumbers() {
        return $('//descendant::*[@class="checkbox-text"][2]');
    }

    public get checkboxSendVCardUnderAutoResponseKnownNumbers() {
        return $('//descendant::*[@class="checkbox-text"][4]');
    }

    public get saveButton() {
        return $('//button[.="save"]')
    }

    public get nameOfTheFirstElementInList() {
        return $('.SpTableTbody tr:nth-child(1) b');
    }

    public get alertMessage(){
        return $('SpNotificationStatusText');
    }

    public get backToListOfWidgets() {
        return $('.SpLayoutContent .title');
    }
    public async createNewWidget(name: string, searchForExistingTag: string, searchForCreateNewTag: string) {
        await Actions.clickOn(this.newWidgetLink);
        await Actions.typeIn(this.widgetName, name);
        await Actions.typeIn(this.applyInboundTag, searchForExistingTag);
        await Actions.clickOn(this.optionTag988);
        await this.applyInboundTag.addValue(searchForCreateNewTag);
        await Actions.clickOn(this.selectCreateTagLink);
        await Actions.clickOn(this.formField);
        await Actions.clickOn(this.optionMyTestForm);
        await Actions.clickOn(this.checkboxEnabledUnderAutoResponseUnknownNumbers);
        await Actions.clickOn(this.checkboxSendVCardUnderAutoResponseUnknownNumbers);
        await Actions.clickOn(this.checkboxSendVCardUnderAutoResponseKnownNumbers);
        await Actions.clickOn(this.saveButton);
        await browser.pause(1000);
        await Actions.clickOn(this.backToListOfWidgets);
        await browser.pause(5000);

    }
}
export default new WidgetsPage();