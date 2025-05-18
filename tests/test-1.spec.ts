import { test, expect } from '@playwright/test';
import { UdemySignupPage } from '../pages/UdemySignupPage';

test('Udemy signup process', async ({ page }) => {
  const signupPage = new UdemySignupPage(page);
  
  await signupPage.goto();
  await signupPage.verifyPageLoaded();
  
  await signupPage.fillFullName('testing automation');
  await signupPage.fillEmail('baubaubau@gmail.com');
  await signupPage.toggleSpecialOffers();
  await signupPage.clickContinueWithEmail();
});