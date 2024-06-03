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

function handleEmails(disallowedDomains, customMessage = 'This email domain is not allowed.') {
  document.querySelectorAll('form').forEach((form) => {
    const emailInput = form.querySelector('input[type="email"]');
    const button = form.querySelector('[type="submit"]');
    if (!emailInput || form.getAttribute('yc-no-valid') || !button) {
      return;
    }

    button.addEventListener('click', (event) => {
      const email = emailInput.value;

      if (isPersonalOrSpamEmail(email, disallowedDomains)) {
        emailInput.setCustomValidity(customMessage);
        emailInput.reportValidity();
        event.preventDefault();
      } else {
        emailInput.setCustomValidity('');
      }
    });
  });
}

window.handleEmails = handleEmails;
