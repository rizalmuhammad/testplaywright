# Udemy Signup Automation with Playwright

This project demonstrates automated testing of the Udemy signup process using Playwright and the Page Object Model (POM) pattern.

## Project Overview

The test suite automates the Udemy signup flow, verifying that the form elements are visible and can be interacted with. It implements the Page Object Model design pattern for better maintainability.

## Installation

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd testplaywright
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Running Tests

### Run All Tests

```bash
npx playwright test
```

### Run a Specific Test

```bash
npx playwright test tests/test-1.spec.ts
```

### Run Tests in UI Mode

```bash
npx playwright test --ui
```

### Run Tests in a Specific Browser

```bash
npx playwright test --project=chromium
# or
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### View Test Report

After running tests, view the HTML report with:

```bash
npx playwright show-report
```

## Project Structure

```
testplaywright/
├── pages/
│   └── UdemySignupPage.ts     # Page object for Udemy signup page
├── tests/
│   └── test-1.spec.ts         # Test file for Udemy signup process
├── playwright.config.ts       # Playwright configuration
├── package.json               # Project dependencies
└── README.md                  # Project documentation
```

## Page Object Model (POM)

This project uses the Page Object Model pattern, which:
- Separates page-specific code from test logic
- Creates reusable components that represent pages
- Makes tests more maintainable when the UI changes
- Improves readability of test scripts

Each page object contains:
- Locators for page elements
- Methods for page-specific actions
- Assertions for page-specific validations

## Key Features

- **Automated Form Interaction**: Fills in registration forms automatically
- **Page Validation**: Verifies page elements are present before interaction
- **Modular Design**: Follows POM pattern for better code organization
- **Cross-browser Testing**: Can run tests across multiple browsers

## Best Practices Implemented

1. **Explicit Waits**: Elements are verified to be visible before interaction
2. **Reusable Components**: Page objects are designed to be reused across tests
3. **Clear Naming Conventions**: Methods and variables have descriptive names
4. **Separation of Concerns**: Test logic is separated from page implementation

## Contributing

Feel free to submit issues or pull requests if you have suggestions for improvements.

## License

This project is licensed under the MIT License - see the LICENSE file for details.