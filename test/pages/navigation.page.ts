import { findAncestor } from "typescript";
import Actions from "../utils/actions";
import loginPage from "./login.page";

class NavigationPage {
    public get dynamicSegmentLink() {
        return $("//body/div[@id='app']/div[1]/div[1]/div[1]/div[2]/section[1]/div[1]/div[1]/nav[1]/div[2]/div[1]/a[2]/span[1]")
    }
   public async moveToElement(element){
      await element.moveTo();
    }
    
   public async moveToElementAndCLick(element){
     await this.moveToElement(element);
     element.click()
    }
}
export default new NavigationPage();