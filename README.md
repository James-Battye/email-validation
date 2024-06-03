# Email Validation for Webflow

This script helps B2B startups filter out form submissions and call bookings from personal email domains (e.g., gmail.com, yahoo.com), ensuring that your sales team only receives leads from valid company email addresses.

## Features

- Blocks form submissions from specified personal email domains.
- Customizable error message for blocked email domains.

## Installation

1. **Include the Script**: Add the following script to your Webflow site. You can include this in the page settings under the "Before </body> tag" section.

    ```html
    <script src="https://cdn.jsdelivr.net/npm/@yes-chef/yc-email-validation@0.0.2/dist/index.js"></script>
    ```

2. **Add the Validation Code**: Add the following script tag to your Webflow page settings, within the "Before </body> tag" section. This script sets up the disallowed domains and custom error message.

    ```html
    <script>
    const disallowedDomains = [
      'gmail.com',
      'gmail.',
      'gmail.net',
      'gmail.io',
      'yahoo.co.uk',
      'yahoo.com',
    ];

    handleEmails(disallowedDomains, 'Please use a valid company email address')
    </script>
    ```

## Customization

- **Disallowed Domains**: The `disallowedDomains` array contains the email domains that you want to block. You can add or remove domains as needed.
- **Error Message**: The second parameter of the `handleEmails` function is the error message that will be displayed when a disallowed domain is detected. You can customize this message to fit your needs.

## Benefits
Implementing this email validation script can save your sales team a significant amount of time by ensuring that they only receive leads from potential customers with valid company email addresses. This allows for more efficient research and follow-up using tools like Apollo or other data enrichment tools.
