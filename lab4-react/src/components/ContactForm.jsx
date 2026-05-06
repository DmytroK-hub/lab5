import { useEffect, useState } from "react";

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Зв'язатися зі мною</h2>

        <form
          action="https://formspree.io/f/mykojjnp"
          method="POST"
        >
          <input type="text" name="name" placeholder="Ім'я" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="tel" name="phone" placeholder="Телефон" />
          <textarea name="message" placeholder="Повідомлення" required />

          <button type="submit">Відправити</button>
        </form>

        <button className="close-btn" onClick={() => setIsOpen(false)}>
          Закрити
        </button>
      </div>
    </div>
  );
}

export default ContactForm;