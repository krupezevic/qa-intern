import actions from "../utils/actions";
import navigationPage from "./navigation.page";

class Conversation {

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


}
export default new Conversation(); 