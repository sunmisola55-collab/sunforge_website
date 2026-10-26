# Sunforge V2 — websites first, business systems next

A responsive, static marketing website for Sunforge. The site positions business websites as the accessible entry service and workflow/record systems as the higher-value service. It uses plain HTML, CSS and JavaScript; no build step is required.

## Files
- `index.html` — page structure, service copy, labelled demo concepts and enquiry form.
- `styles.css` — responsive design and visual styling.
- `script.js` — mobile navigation, current year, service preselection and asynchronous Web3Forms submission.

## Enquiry form setup
The form submits to Web3Forms at `https://api.web3forms.com/submit` using the access key that was already included in the supplied Sunforge HTML. A successful message is shown only when the provider returns a successful response. This has not been tested against the live provider from this package, so do the launch test below.

1. Open the Web3Forms dashboard for this access key and confirm the recipient email is `Sunmi555@yahoo.com` (or change it to the business inbox you decide to use).
2. Complete any email verification/activation requested by Web3Forms.
3. Publish the site over HTTPS. Static form requests may fail when opened directly from a local `file://` URL; test from the deployed URL.
4. Submit a real test enquiry using an email address you control. Confirm it appears in the intended inbox and check spam/junk.
5. If the key is no longer active or you do not control its dashboard, generate a new key in your own Web3Forms account and replace the `access_key` value in `index.html`. Treat the key as public in a static site; use provider spam controls and never put private API credentials in front-end code.
6. Keep the backup email and WhatsApp links visible in case the provider is temporarily unavailable.

## Before publishing
- Verify that `Sunmi555@yahoo.com`, WhatsApp `+234 701 361 6459`, and alternative phone `+234 801 354 0466` are still the contact details you want public.
- Confirm the WhatsApp number opens the intended account.
- The two portfolio cards are explicitly marked as demonstration concepts. Keep those labels unless you replace the concepts with genuine work and have permission to display it.
- The dashboard figures are sample values, not live business metrics.
- Confirm CAC/name, trademark and domain checks independently. Name availability does not guarantee trademark clearance.
- Add a custom domain only after checking its renewal price. The site can be hosted at low/no cost on a static host such as Cloudflare Pages, Netlify or GitHub Pages; domain registration is separate.
- Test mobile navigation, links, form validation and the successful/failed form states on a phone and desktop.

## Local preview
Open `index.html` in a browser, or run a simple local server from this directory. The enquiry form requires a network connection and a valid provider key.
