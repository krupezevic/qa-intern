import actions from "../utils/actions";

class ConversationPage {

    public get composeMessageButton(){
        return $('#compose-icon');
    }

    public get contact(){
        return $('.contact-name');
    }
    
    public get textBox(){
        return $('.messageModal-form .SpEditor [data-editor]');
    }

    public get sendButton(){
        return $('//span[.="Send"]');
    }

    public get succesMessageConfirmation(){
        return $('//span[.="Message sent successfully."]');
    }

    public get savedResponseButton(){
        return $('.message-input-container #zap');
    }

    public get savedResponseMessage(){
        return $('.SpSortableWrapper .SpSortable');
    }

    public get actionsButton(){
        return $('//button[.="Actions"]');
    }

    public get archiveDropDownButton(){
        return $('.jIagxW #archive-icon');
    }

    public get archiveButton(){
        return $('//span[.="Archive"]');
    }

    public get searchConversations(){
        return $('.sp-sidebar-search .SpSearchBarInput');
    }

    public get archivedConversation(){
        return $('.conversationarchived .item-name');
    }

    public get resultsButton(){
        return $('.SpResultsPreview .result-bar-desc');
    }

    public get archivedConversationList(){
        return $('.SpConversationListWrapper .scrollbar-container');
    }

    public get contactIcon(){
        return $('.ps--active-y .initials');
    }

    public get tagDropDownButton(){
        return $('.sp__bulk-actions #tags-icon');
    }

    public get tagField(){
        return $('.tag-contacts .is-searchable .Select-input input');
    }

    public get createTag(){
        return $('.tag-contacts .Select-menu-outer .Select-create-option-placeholder');
    }

    public get updateButton(){
        return $('span[.="Update"]');
    }

    public get taggedButton(){
        return $('.tagged .item-name');
    }

    public get removePreviousTag(){
        return $('.tag-contacts .Select-value .Select-value-icon');
    }

    public get tagNameText(){
        return $('.tags-list .SpTags');
    }

    public get taggedContact(){
        return $('.SpConversationListWrapper .sp-sidebaritem .inline');
    }

    public get chooseTag(){
        return $('.SpSegmentTagWrapper .SpSegmentTagContent .Select-input input');
    }

    public get messageBox(){
        return $('#composeMessageContainer .SpSegmentCalculator .DraftEditor-root .public-DraftEditor-content');
        
    }

    public get numberOfCharactersAfterInputMessage(){
        return $('.SpCounterBoxWrapper .SpCountBox .Avpex');
    }

    public get editIcon(){
        return $('.SpUserImage .initials');
    }

    public get nicknameInput(){
        return $('.contact-editing .form-group:nth-child(3) input');
    }

    public get saveButton(){
        return $('//span[.="Save"]');
    }

    public get nickname(){
        return $('.SpContactDetailsBar b');
    }

    public async sendMessage(message: string){
        await actions.clickOn(this.contact);
        await actions.clickOn(this.composeMessageButton);
        await actions.typeIn(this.textBox, message);
        await actions.clickOn(this.sendButton);
    }

    public async sendSavedResponse(){
        await actions.clickOn(this.contact);
        await actions.clickOn(this.composeMessageButton);
        await actions.clickOn(this.savedResponseButton);
        await actions.clickOn(this.savedResponseMessage);
        await actions.clickOn(this.textBox);
        await actions.clickOn(this.sendButton);
    }

    public async archiveConversation(){
        await actions.clickOn(this.contactIcon);
        await actions.clickOn(this.actionsButton);
        await actions.clickOn(this.archiveDropDownButton);
        await actions.clickOn(this.archiveButton);
        await actions.clickOn(this.searchConversations);
        await actions.clickOn(this.archivedConversation);
        await actions.clickOn(this.resultsButton);
    }

    public async tagConversation(tag: string){
        await actions.clickOn(this.contactIcon);
        await actions.clickOn(this.actionsButton);  
        await actions.clickOn(this.tagDropDownButton);  
        await actions.clickOn(this.tagField);
        await this.tagField.clearValue();
        await actions.waitForElementToBeClickable(this.tagField)
        await actions.typeIn(this.tagField, tag);
        await actions.waitForElementToBeClickable(this.createTag);
        await actions.clickOn(this.createTag);
        await actions.waitForElementToBeClickable(this.updateButton);
        await actions.clickOn(this.updateButton);  
        await actions.clickOn(this.searchConversations);  
        await actions.clickOn(this.taggedButton); 
        await actions.clickOn(this.chooseTag);
        await actions.typeIn(this.chooseTag, tag); 
        await actions.clickOn(this.resultsButton);
        await actions.clickOn(this.taggedContact);
    }

    public async messageCharactersDecrement(message: string){
        await actions.clickOn(this.contact);
        await actions.clickOn(this.messageBox);
        await actions.typeIn(this.messageBox, message);
    }

    public async addNicknameToContact(nickname: string){
        await actions.clickOn(this.contact);
        await actions.clickOn(this.editIcon);
        await actions.typeIn(this.nicknameInput, nickname);
        await actions.clickOn(this.saveButton);
    }

}
export default new ConversationPage(); 