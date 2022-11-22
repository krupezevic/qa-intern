import Actions from "../utils/actions"
class Navigation{
    public get dropDownMenu() {
        return $('.dropdown-button-text');
    }

    public get phoneNumersCard() {
        return $('.SpActionDropdownContent a[href="/phone-numbers"]');
    }

    public async navigationToPhoneNumbersPage(){
      await Actions.clickOn(this.dropDownMenu)
      await Actions.clickOn(this.phoneNumersCard)
    }

}
