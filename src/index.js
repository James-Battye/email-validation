// Function to determine if an email is from a personal or disallowed domain.
function isPersonalOrSpamEmail(email, disallowedDomains) {
  if (!email.includes('@')) {
    return false;
  }

  const domain = email.split('@')[1].toLowerCase();

  const isDisallowed = disallowedDomains.some(
    (disallowedDomain) => domain === disallowedDomain || domain.includes(disallowedDomain)
  );

  return isDisallowed;
}

function handleEmails(disallowedDomains) {
  document.querySelectorAll('form').forEach((form) => {
    const emailInput = form.querySelector('input[type="email"]');
    const button = form.querySelector('[type="submit"]')
    if (!emailInput) {
      console.log('no email input, function returned');
      return;
    } else if (form.getAttribute('yc-no-valid')) {
      console.log('Attribute present, function returned');
      return;
    } else if (!button) {
      console.log('no submit button, function returned');
      return;
    }
    button.addEventListener('click', (event) => {
      const email = emailInput.value;

      if (isPersonalOrSpamEmail(email, disallowedDomains)) {
        emailInput.setCustomValidity("This email domain is not allowed.");
        emailInput.reportValidity(); // This will show the custom or default error message
        event.preventDefault(); // Prevent the form from submitting
      } else {
        emailInput.setCustomValidity("");
      }
    });
  });
}

window.handleEmails = handleEmails;
