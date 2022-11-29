import actions from "../utils/actions";

class formsPage {

    public get buttonNew() {
        return $('//button[.="New"]');
    }

    public get newFormsInput() {
        return $('#domain');
    }

    public get editFormsInput() {
        return $('#domain');
    }

    public get formSubmissionInput() {
        return $('.rdw-editor-main .DraftEditor-root');
    }

    public get buttonSave() {
        return $('//button[.="save"]');
    }

    public get buttonEdit() {
        return $('tr:nth-child(1) td:nth-child(4) span');
    }

    public get nameOfTheFirstElementInList() {
        return $('.SpForms tr:nth-child(1) td:nth-child(1) p');
    }

    public get buttonDisable() {
        return $('tr:nth-child(1) td:nth-child(4) .Supper-button-button');
    }

    public get buttonEnable() {
        return $('tr:nth-child(1) td:nth-child(4) .Supper-button-button');
    }
    public get buttonCancel() {
        return $('//button[.="cancel"]');

    }
    public get form() {
        return $('.SpForms');
    }

    public async clickOnNewForms() {
        await actions.waitForPageLoad();
        await actions.clickOn(this.buttonNew);
        await actions.waitForElementToBeDisplayed(this.newFormsInput);
    }

    public async createForms(name: string) {
        await actions.waitForPageLoad();
        await actions.typeIn(this.newFormsInput, name);
        await actions.waitForElementToBeEnabled(this.buttonSave);
        await actions.clickOn(this.buttonSave);
    }

    public async editForms(rename: string) {
        await actions.waitForPageLoad();
        await actions.clickOn(this.buttonEdit);
        await actions.typeIn(this.editFormsInput, rename);
        await actions.waitForElementToBeEnabled(this.buttonSave);
        await actions.clickOn(this.buttonSave);
        await actions.clickOn(this.buttonCancel);
        await actions.waitForElementToBeDisplayed(this.form);
    }

    public async disableForm() {
        await actions.waitForPageLoad();
        await actions.clickOn(this.buttonDisable);
    }

}
export default new formsPage(); 