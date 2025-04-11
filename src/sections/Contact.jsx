import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import AnimatedText from '../components/AnimatedText.jsx'; 
import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contact = () => {
  const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Kumar Gautam',
          from_email: form.email,
          to_email: 'vishwagautam57@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Thank you for your message 😃',
            type: 'success',
          });

          setForm({
            name: '',
            email: '',
            message: '',
          });

          setTimeout(() => {
            hideAlert(false);
          }, 3000);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: 'danger',
          });
        }
      );
  };

  return (
    <section className="c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />}
      {/* Animated About Me Heading */}
      <AnimatedText text="Contact Me" />
      <div className="relative min-h-screen flex items-center justify-center flex-col">
      <img
          src="/assets/terminal.png"
          alt="terminal-bg"
          className="absolute inset-0 hidden md:block md:min-h-screen"
        />

        <div className="pt-10 sm:pt-24 pb-10 sm:pb-16 px-5 contact-container">
          <h3 className="head-text text-base sm:text-xl md:text-2xl">
            Let's Connect
          </h3>

          <p className="text-sm sm:text-base md:text-lg text-green-500 mt-3 leading-relaxed">
            Have an idea, project, or just want to connect? 
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-6 flex flex-col space-y-6 sm:space-y-7"
          >
            <label className="space-y-2">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Kumar Gautam"
              />
            </label>

            <label className="space-y-2">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="example@gmail.com"
              />
            </label>

            <label className="space-y-2">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                className="field-input"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
              <img src="/assets/arrow-up.png" alt="send" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
