import { log } from "console";
import { expect } from '@playwright/test';
import {setpage} from '../keyword'
import {setTexts} from '../resources/index'

class setfeatures {
    constructor(page){
        this.page = page;
        // B
        this.forcustomerTitleFlag = page.locator('[class="Navbar_navbar-center__5VNaA"]');         

    }
    async openwebandvelify(){
        await setpage.openweb();
        await setpage.valify();

    }
    async loginuser(user,password){
        await setpage.inputusernsme();
        await setpage.inputpassword();
        await setpage.clickbtnlogin();
    }
}

    export default setfeatures;