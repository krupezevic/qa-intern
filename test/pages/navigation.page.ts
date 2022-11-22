import Actions from "../utils/actions";
class Navigation {

    public get dropDownMenu() {
        return $('.userName');
    }

    public get phoneNumersCard() {
        return $('.SpActionDropdownContent a[href="/phone-numbers"]');
    }

    public async navigationToPhoneNumbersPage() {
        await Actions.clickOn(this.dropDownMenu);
        await Actions.clickOn(this.phoneNumersCard);
        await browser.pause(5000);
    }


}
export default new Navigation();