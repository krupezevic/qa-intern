import Actions from "../utils/actions";

//yarn e2e-stage-win
class Tags{

    public get newTag() {
        return $('//span[contains(text(),"New")]');
    }
    public async createTags() {
        await Actions.clickOn(this.newTag);
    }
}
export default new Tags();