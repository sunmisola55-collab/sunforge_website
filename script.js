
/* MOBILE NAVIGATION */

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');

    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute(
      'aria-label',
      isOpen ? 'Close navigation' : 'Open navigation'
    );
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');

      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      nav.classList.remove('is-open');

      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
    }
  });
}


/* AUTOMATIC FOOTER YEAR */

const year = document.querySelector('#year');

if (year) {
  year.textContent = new Date().getFullYear();
}


/* SERVICE LINKS: PRESELECT ENQUIRY FORM */

document.querySelectorAll('[data-service]').forEach((link) => {
  link.addEventListener('click', () => {
    const serviceSelect = document.querySelector('#service');

    if (!serviceSelect) return;

    const requested = link.getAttribute('data-service');

    const match = [...serviceSelect.options].find((option) => {
      return option.value.toLowerCase() === requested.toLowerCase() ||
        option.textContent.trim().toLowerCase() === requested.toLowerCase();
    });

    if (match) {
      serviceSelect.value = match.value;
    }
  });
});


/* CONTACT FORM: WEB3FORMS */

const form = document.querySelector('#contact-form');

if (form) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const feedback = document.querySelector('#form-feedback');
    const submitButton = form.querySelector('button[type="submit"]');
    const label = submitButton?.querySelector('.submit-label');

    if (!feedback || !submitButton) return;

    feedback.className = 'form-feedback';
    feedback.textContent = 'Sending your enquiry…';

    submitButton.disabled = true;

    if (label) {
      label.textContent = 'Sending…';
    }

    try {
      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',
          body: new FormData(form),
          headers: {
            Accept: 'application/json'
          }
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || 'The form provider did not confirm the submission.'
        );
      }

      feedback.classList.add('is-success');

      feedback.textContent =
        'Your enquiry has been submitted. Thank you — Sunforge will follow up using the contact details you provided.';

      form.reset();

    } catch (error) {
      console.error('Sunforge enquiry submission failed:', error);

      feedback.classList.add('is-error');

      feedback.textContent =
        'We could not confirm the submission. Please try again or contact Sunforge directly at Sunmi555@yahoo.com or WhatsApp +234 701 361 6459.';

    } finally {
      submitButton.disabled = false;

      if (label) {
        label.textContent = 'Send Project Enquiry';
      }
    }
  });
}
