import { RenameInfo } from 'typescript';
import actions from '../utils/actions';
import Actions from '../utils/actions';

class TagsPage {

  public get addNewTag() {
    return $('//button[.="New"]');
  }

  public get newTagNameInput() {
    return $('#name');
  }

  public get buttonSave() {
    return $('//button[.="save"]');
  }

  public get buttonDelete() {
    return $('//button[.="Delete"]');
  }

  public get buttonRename() {
    return $('//button[.="Rename"]');
  }

  public get buttonConfirm() {
    return $('//button[.="confirm"]');
  }

  public get buttonCombine() {
    return $('//button[.="Combine"]');
  }

  public get combineInput() {
    return $('#name');
  }

  public get selectFirstTagByName() {
    return $('.SpTableTbody tr:nth-child(1) td:nth-child(2)');
  }

  public get selectSecondTagByName() {
    return $('.SpTableTbody tr:nth-child(2) td:nth-child(2)');
  }

  public get firstTagCheck() {
    return $('tbody tr:nth-child(1) td:nth-child(1) span');
  }

  public get secondTagCheck() {
    return $('tbody tr:nth-child(2) td:nth-child(1) span');
  }

  public get renameField() {
    return $('#name');
  }

  public get numberOfRows() {
    return $$('//tbody//tr');
  }

  public get waitForModal() {
    return $$('.SpModalContent');
  }

  public async selectFirstTwoTags() {
    await Actions.clickOn(this.firstTagCheck);
    await Actions.clickOn(this.secondTagCheck);
    await Actions.clickOn(this.buttonCombine);
  }

  public async combineTwoTags(name: string) {
    await Actions.typeIn(this.combineInput, name);
    await Actions.clickOn(this.buttonConfirm);
  }

  public async clickOnNewTag() {
    await Actions.clickOn(this.addNewTag);
    await Actions.waitForElementToBeDisplayed(this.newTagNameInput);
  }

  public async createTags(name: string) {
    await Actions.typeIn(this.newTagNameInput, name);
    await Actions.clickOn(this.buttonSave);
  }

  public async renameFirstTag(rename: string) {
    await Actions.clickOn(this.firstTagCheck);
    await Actions.clickOn(this.buttonRename);
    await Actions.typeIn(this.renameField, rename);
    await Actions.clickOn(this.buttonConfirm);
  }

  public async deleteFirstTag() {
    await Actions.clickOn(this.firstTagCheck);
    await Actions.clickOn(this.buttonDelete);
    await Actions.waitForElementToBeDisplayed(this.buttonConfirm);
    await Actions.clickOn(this.buttonConfirm);
  }
}
export default new TagsPage();
