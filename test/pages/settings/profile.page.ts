import actions from "../../utils/actions";

class ProfilePage {

    public get updatePhotoButton(){
        return $('.SpLayoutContent  .sp-shadedbox:nth-child(1) .SpImageSetButton ');
    }

    public get webSearchButton(){
        return $('//span[.="Web Search"]');
    }

    public get searchImages(){
        return $('.fsp-modal__body .fsp-url-source__form input');
    }

    public get searchButton(){
        return $('.fsp-modal__body .fsp-url-source__form .fsp-button');
    }

    public get imageToUpload(){
        return $('//span[.="Westie pups.jpg"]');
    }

    public get uploadButton(){
        return $('.fsp-content .fsp-footer--appeared .fsp-button--primary');
    }

    public get save(){
        return $('//descendant::button[.="Save"][1]');
    }

    public get firstNameField(){
        return $('[placeholder="Enter your First name"]');
    }

    public get lastNameField(){
        return $('[placeholder="Enter your Last name"]');
    }

    public get currentPasswordField(){
        return $('[placeholder="Enter current password"]');
    }

    public get newPasswordField(){
        return $('[placeholder="Enter new password"]');
    }

    public get ReEnterNewPassword(){
        return $('[placeholder="Re-enter new password"]');
    }

    public get savePasswordButton(){
        return $('//descendant::button[.="Save"][2]');
    }

    public async uploadImage(photo: string){
        await actions.clickOn(this.updatePhotoButton);
        await actions.clickOn(this.webSearchButton);
        await actions.waitForElementToBeClickable(this.searchImages);
        await actions.typeIn(this.searchImages, photo);
        await actions.clickOn(this.searchButton);
        await actions.clickOn(this.imageToUpload);
        await actions.clickOn(this.uploadButton);
    }

    public async changeFirstAndLastName(name: string, surname: string){
        await actions.clearValueAndType(this.firstNameField, name);
        await actions.clearValueAndType(this.lastNameField, surname);
    }

    public async invalidPasswordChange(pass: string, newPass: string, rePass: string){
        await actions.typeIn(this.currentPasswordField, pass);
        await actions.typeIn(this.newPasswordField, newPass);
        await actions.typeIn(this.ReEnterNewPassword, rePass);
    }

    public async passwordChange(pass: string, newPass: string, rePass: string){
        await actions.typeIn(this.currentPasswordField, pass);
        await actions.typeIn(this.newPasswordField, newPass);
        await actions.typeIn(this.ReEnterNewPassword, rePass);
        await actions.clickOn(this.savePasswordButton);
    }

}
export default new ProfilePage();