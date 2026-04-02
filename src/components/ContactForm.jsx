import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("mlgowele");

  if (state.succeeded) {
    return <p>Thanks for your message.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-row">
        <div className="f-wrap">
          <label className="f-lbl">Name</label>
          <input name="name" type="text" placeholder="Your name" required />
        </div>

        <div className="f-wrap">
          <label className="f-lbl">Email</label>
          <input
            name="email"
            type="email"
            placeholder="you@email.com"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
      </div>

      <div className="f-wrap">
        <label className="f-lbl">Subject</label>
        <input name="subject" type="text" placeholder="What's on your mind?" />
      </div>

      <div className="f-wrap">
        <label className="f-lbl">Message</label>
        <textarea
          name="message"
          placeholder="Tell me about your project..."
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      <button type="submit" className="btn-primary" disabled={state.submitting}>
        Send message →
      </button>
    </form>
  );
}

export default ContactForm;
