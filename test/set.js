const { test, expect } = require('@playwright/test');
import {setpage,setfeatures} from '../keyword'
import {setTexts} from '../resources/index'

test('test_display_loginpage', async ({ page }) => {
    await setfeatures.openwebandvelify(); 
    await setpage.validatetextlogin(setTexts.usernamelabel,setTexts.passwordlabel); 

  });

test('testlogin_pass', async ({ page }) => {
    await setfeatures.openwebandvelify();    
    await setfeatures.loginuser(setTexts.usernametest,setTexts.passwordtest);

  });