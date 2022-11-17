import Actions from "../utils/actions";

class dynamicSegmentPage {
    public get addNewLink() {
        return $('button .text')
    }

    public get segmentNameInput() {
        return $('input[placeholder="My New Segment"]');
    }

    public get filters() {
        return $('//*[contains(text(),"Add filter")]');
    }

    public get oneOfFilters() {
        return $('//div[contains(text(),"Added This Month")]');
    }

    public get saveButton() {
        return $('//button[.="Save"]');
    }

    public get selectSegmentByName(){
        return $('.SpTableTbody tr:nth-child(1) a');
    }

    public async addNewSegment(name: string) {
        await Actions.clickOn(this.addNewLink);
        await Actions.typeIn(this.segmentNameInput, name);
        await Actions.clickOn(this.filters);
        await Actions.clickOn(this.oneOfFilters);
        await Actions.clickOn(this.saveButton);
    }

     
}
export default new dynamicSegmentPage();