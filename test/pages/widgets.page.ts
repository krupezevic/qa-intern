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

    public get saveButtonAfterEditWidget() {
        return $('//descendant::button[.="save"][2]')
    }

    public get nameOfTheFirstElementInList() {
        return $('.SpTableTbody tr:nth-child(1) b');
    }

    public get alertMessage() {
        return $('div[type="success"]');
    }

    public get backToListOfWidgets() {
        return $('.SpLayoutContent .title');
    }

    public get editOfTheFirstRowInList() {
        return $('tr:nth-child(1) td:last-child a');
    }

    public get selectWidgetTypePageSection() {
        return $('//descendant::img[3]');
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
        await Actions.waitForElementToBeDisplayed(this.alertMessage);
        await Actions.clickOn(this.backToListOfWidgets);
    }

    public async editWidget(name: string) {
        await Actions.clickOn(this.editOfTheFirstRowInList);
        await Actions.waitForElementToBeDisplayed(this.widgetName);
        await Actions.typeIn(this.widgetName, name);
        await Actions.clickOn(this.selectWidgetTypePageSection);
        await Actions.clickOn(this.saveButtonAfterEditWidget);
        await Actions.waitForElementToBeDisplayed(this.alertMessage);
        await Actions.clickOn(this.backToListOfWidgets);
    }
}
export default new WidgetsPage();