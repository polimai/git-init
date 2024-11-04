import { log } from "console";
import { expect } from '@playwright/test';
import {setTexts} from '../resources/index'
class setpage {
    constructor(page){
        this.page = page;
        // B
        this.username = page.locator('[name="loginName"]');         
        this.password = page.locator('[name="password"]');   
        this.usernameLabel = page.locator('[class="control-label visible-ie8 visible-ie9"]');         
        this.passwordLabel = page.locator('[class="control-label visible-ie8 visible-ie9"]');        
        this.btNLogin = page.locator('login')
        this.hyperlinKForgetpassword = page.locator('forget-password')
    }
    async openweb(){
        await page.goto(setTexts.url);

    }
    async valify(){
    // Expect a title "to contain" a substring.
        await expect(page).toHaveTitle(/Login/);

    }

    async inputusernsme(user){
        await this.username.fill(user);
    }
    async inputpassword(password){
        await this.password.fill(password);
    }
    async clickbtnlogin(){
        await this.btNLogin.click();
    }
    async clickforgetpassword(){
        await this.hyperlinKForgetpassword.click();
    }
    async validatetextlogin(expecteduser,expectedpassword){
        let getfilluserLabel = await this.usernameLabel.textContent();
        let getfillpasswordLabel = await this.usernameLabel.textContent();
        await expect(getfilluserLabel).toEqual(expecteduser);
        await expect(getfillpasswordLabel).toEqual(expectedpassword);
    }
}

    export default setpage;