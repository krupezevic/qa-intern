import actions from "../utils/actions";
import navigationPage from "./navigation.page";

class conversation {

    public get composeMsgBtn(){
        return $('#compose-icon');
    }


    public get contactContainer(){
        return $('.sp-select__placeholder');
    }

    public get contact(){
        return $('.contact-name');
    }

    // public get contact(){
    //     return $('//span[.="Edmund Goodwin"]');
    // }
    

    public get textBox(){
        return $('//*[@id="app"]/section[2]/div/div[2]/div/div/div[3]/section/div[2]/div/div/div/div[2]/section/div/div[2]/div/div/div');
    }


    public get sendBtn(){
        return $('//*[@id="app"]/section[2]/div/div[2]/div/div/div[3]/section/div[5]/div/button');
    }


    public get succesMsgConfirmation(){
        return $('//span[.="Message sent successfully."]');
    }



    public get savedResponseBtn(){
        return $('//span[.="⚡"]');
    }

    public get savedResponseMsg(){
        return $('//span[.="Hello"]');
    }



    public async sendMessage(message: String){
        await actions.clickOn(this.contact);
        await actions.clickOn(this.composeMsgBtn);
        console.log('11111111111111111');
        await actions.typeIn(this.textBox, message);
        console.log('2222222222222222');
        await actions.clickOn(this.sendBtn);
        console.log('3333333333333333333');
    }

    public async sendSavedResponse(){
        await actions.clickOn(this.contact);
        await actions.clickOn(this.composeMsgBtn);
        console.log('111111111111111111111111');
        await actions.clickOn(this.savedResponseBtn);
        console.log('22222222222222222222222');
        await actions.clickOn(this.savedResponseMsg);
        console.log('333333333333333333333333');
        await actions.clickOn(this.textBox);
        console.log('4444444444444444444444444');
        await actions.clickOn(this.sendBtn);
        console.log('55555555555555555555555555');

    }


}
export default new conversation(); 