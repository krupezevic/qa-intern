import actions from "../../utils/actions";

class TagsPage {

    public get combineButton() {
        return $('.action-buttons .button-wrapper:nth-child(2)');
    }

    public get firstTagSelect() {
        return $('tbody tr:nth-child(1) td:nth-child(1) span');
    }

    public get secondTagSelect() {
        return $('tbody tr:nth-child(2) td:nth-child(1) span');
    }

    public get firstTagNameForAssertion() {
        return $('.SpTableTbody tr:nth-child(1) td:nth-child(2)');
    }

    public get newTagButton() {
        return $('//button[.="New"]');
    }

    public get newTagNameInput() {
        return $('.sp-modal-tag-manage .input-field input');
    }

    public get saveButton() {
        return $('//button[.="save"]');
    }

    public get deleteButton() {
        return $('//button[.="Delete"]');
    }

    public get confirmButton() {
        return $('//button[.="confirm"]');
    }

    public get renameButton() {
        return $('//button[.="Rename"]');
      }

    public async createNewTags(tagName: string) {
        await actions.clickOn(this.newTagButton);
        await actions.typeIn(this.newTagNameInput, tagName);
        await actions.clickOn(this.saveButton);
    }

    public async deleteFirstTag() {
        await actions.clickOn(this.firstTagSelect);
        await actions.clickOn(this.deleteButton);
        await actions.clickOn(this.confirmButton);
    }

    public async renameFirstTag(newTagName: string){
        await actions.clickOn(this.firstTagSelect);
        await actions.clickOn(this.renameButton);
        await actions.typeIn(this.newTagNameInput, newTagName);
        await actions.clickOn(this.confirmButton);
    }

    public async combineTags(combineTagName: string){
        await actions.clickOn(this.firstTagSelect);
        await actions.clickOn(this.secondTagSelect);
        await actions.clickOn(this.combineButton);
        await actions.typeIn(this.newTagNameInput, combineTagName);
        await actions.clickOn(this.confirmButton);
    }
}
export default new TagsPage();