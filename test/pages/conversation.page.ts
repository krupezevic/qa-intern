import actions from "../utils/actions";
import navigationPage from "./navigation.page";

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

    public async sendMessage(message: String){
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

}
export default new ConversationPage(); 