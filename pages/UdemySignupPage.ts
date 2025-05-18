import { Page, Locator, expect } from '@playwright/test';

export class UdemySignupPage {
  private page: Page;
  
  private fullNameField: Locator;
  private emailField: Locator;
  private specialOffersCheckbox: Locator;
  private continueButton: Locator;
  private pageHeading: Locator;
  
  readonly url = 'https://www.udemy.com/join/passwordless-auth/?locale=en_US&next=https%3A%2F%2Fwww.udemy.com%2F&response_type=html&action=signup&mode=marketplace-signup';

  constructor(page: Page) {
    this.page = page;
    
    this.fullNameField = page.getByRole('textbox', { name: 'Full name' });
    this.emailField = page.getByRole('textbox', { name: 'Email' });
    this.specialOffersCheckbox = page.locator('label').filter({ hasText: 'Send me special offers,' }).locator('svg');
    this.continueButton = page.getByRole('button', { name: 'Continue with email' });
    this.pageHeading = page.locator('#auth-form-heading');
  }

  async goto(): Promise<void> {
    await this.page.goto(this.url);
  }

  async verifyPageLoaded(): Promise<void> {
    await expect(this.fullNameField).toBeVisible();
    await expect(this.emailField).toBeVisible();
    await expect(this.pageHeading).toContainText('Sign up with email');
    await expect(this.page.getByRole('main')).toContainText('Continue with email');
  }

  async fillFullName(name: string): Promise<void> {
    await this.fullNameField.click();
    await this.fullNameField.fill(name);
  }

  async fillEmail(email: string): Promise<void> {
    await this.emailField.click();
    await this.emailField.fill(email);
  }

  async toggleSpecialOffers(): Promise<void> {
    await this.specialOffersCheckbox.click();
  }

  async clickContinueWithEmail(): Promise<void> {
    await this.continueButton.click();
  }

  async signupWithEmail(fullName: string, email: string, toggleOffers = true): Promise<void> {
    await this.fillFullName(fullName);
    await this.fillEmail(email);
    if (toggleOffers) {
      await this.toggleSpecialOffers();
    }
    await this.clickContinueWithEmail();
  }
}