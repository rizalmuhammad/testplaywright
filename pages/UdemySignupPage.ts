import { Page, Locator, expect } from '@playwright/test';

export class UdemySignupPage {

  private page: Page;
  
  /**
   * Locators for various UI elements on the signup page
   */
  private fullNameField: Locator;
  private emailField: Locator;
  private specialOffersCheckbox: Locator;
  private continueButton: Locator;
  private pageHeading: Locator;
  
  /**
   * URL of the Udemy signup page
   */
  readonly url = 'https://www.udemy.com/join/passwordless-auth/?locale=en_US&next=https%3A%2F%2Fwww.udemy.com%2F&response_type=html&action=signup&mode=marketplace-signup';

  constructor(page: Page) {
    this.page = page;
    
    // Initialize locators using Playwright's selector strategies
    this.fullNameField = page.getByRole('textbox', { name: 'Full name' });
    this.emailField = page.getByRole('textbox', { name: 'Email' });
    this.specialOffersCheckbox = page.locator('label').filter({ hasText: 'Send me special offers,' }).locator('svg');
    this.continueButton = page.getByRole('button', { name: 'Continue with email' });
    this.pageHeading = page.locator('#auth-form-heading');
  }

  /**
   * Navigate to the Udemy signup page
   */
  async goto(): Promise<void> {
    await this.page.goto(this.url);
  }

  /**
   * Verify that the signup page has loaded properly
   */
  async verifyPageLoaded(): Promise<void> {
    await expect(this.fullNameField).toBeVisible();
    await expect(this.emailField).toBeVisible();
    await expect(this.pageHeading).toContainText('Sign up with email');
    await expect(this.page.getByRole('main')).toContainText('Continue with email');
  }

  /**
   * Fill in the full name field on the signup form
   */
  async fillFullName(name: string): Promise<void> {
    await this.fullNameField.click();
    await this.fullNameField.fill(name);
  }

  /**
   * Fill in the email field on the signup form
   */
  async fillEmail(email: string): Promise<void> {
    await this.emailField.click();
    await this.emailField.fill(email);
  }

  /**
   * Toggle the special offers checkbox
   */
  async toggleSpecialOffers(): Promise<void> {
    await this.specialOffersCheckbox.click();
  }

  /**
   * Click the "Continue with email" button to proceed with signup
   */
  async clickContinueWithEmail(): Promise<void> {
    await this.continueButton.click();
  }

  /**
   * Complete the entire signup process with a single method call
   */
  async signupWithEmail(fullName: string, email: string, toggleOffers = true): Promise<void> {
    await this.fillFullName(fullName);
    await this.fillEmail(email);
    if (toggleOffers) {
      await this.toggleSpecialOffers();
    }
    await this.clickContinueWithEmail();
  }
}
