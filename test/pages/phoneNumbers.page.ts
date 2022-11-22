import actions from "../utils/actions";


class phoneNumbers {

    public get buttonNew() {
        return $('//button[.="New"]');
    }

    public get buttonAdd() {
        return $('//button[.="Add"]');
    }

    public get buttonConfirm() {
        return $('//button[.="Confirm"]');
    }

    public get firstNumberOfSix() {
        return $('.SpNumberOptions div:nth-child(1)');
    }

    public async createNewPhoneNumber() {
        await actions.clickOn(this.buttonNew);
        await actions.clickOn(this.firstNumberOfSix);
        await actions.clickOn(this.buttonAdd);
        await actions.clickOn(this.buttonConfirm);
    }
}
export default new phoneNumbers();