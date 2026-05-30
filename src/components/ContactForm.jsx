import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const BUSINESS_EMAIL = 'echuca3d@gmail.com';

/**
 * Contact form — currently opens the user's email client via mailto.
 *
 * To connect a backend later, replace handleSubmit with:
 * - Formspree: fetch('https://formspree.io/f/YOUR_ID', { method: 'POST', body: formData })
 * - Netlify Forms: add data-netlify="true" and hidden form-name field
 * - Supabase / custom API: POST JSON to your endpoint
 */
export default function ContactForm() {
  const [searchParams] = useSearchParams();
  const productFromUrl = searchParams.get('product') ?? '';

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    product: productFromUrl,
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Enquiry from ${form.name}${form.product ? ` — ${form.product}` : ''}`
    );
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone || 'Not provided'}`,
        `Product / request: ${form.product || 'General enquiry'}`,
        '',
        'Message:',
        form.message,
      ].join('\n')
    );

    window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="contact-form__success" role="status">
        <h3>Thank you</h3>
        <p>
          Your email app should open with your enquiry ready to send to{' '}
          <a href={`mailto:${BUSINESS_EMAIL}`}>{BUSINESS_EMAIL}</a>.
          If it did not open, email us directly with the details you entered.
        </p>
        <button
          type="button"
          className="btn btn--secondary"
          onClick={() => setSubmitted(false)}
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__grid">
        <label className="field">
          <span className="field__label">Name</span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            value={form.name}
            onChange={update('name')}
            placeholder="Your name"
          />
        </label>

        <label className="field">
          <span className="field__label">Email</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={update('email')}
            placeholder="you@example.com"
          />
        </label>

        <label className="field">
          <span className="field__label">Phone number</span>
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            value={form.phone}
            onChange={update('phone')}
            placeholder="Optional"
          />
        </label>

        <label className="field">
          <span className="field__label">Product or request type</span>
          <input
            type="text"
            name="product"
            value={form.product}
            onChange={update('product')}
            placeholder="e.g. Mullet Guard, custom mount"
          />
        </label>
      </div>

      <label className="field field--full">
        <span className="field__label">Message</span>
        <textarea
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={update('message')}
          placeholder="Tell us what you need — sizes, quantities, or ideas welcome."
        />
      </label>

      <button type="submit" className="btn btn--primary contact-form__submit">
        Send enquiry
      </button>

      <p className="contact-form__note">
        Submitting opens your email app addressed to{' '}
        <a href={`mailto:${BUSINESS_EMAIL}`}>{BUSINESS_EMAIL}</a>.
      </p>
    </form>
  );
}
