// Contact.jsx
import { useReducer } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";
const user = {
  name: "",
  email: "",
  message: "",
};
const Contact = () => {
  const [state, dispatch] = useReducer(reducer, user);
  const notify = () => toast.success("Message Sent!");

  function handleChange(e) {
    dispatch({
      type: "SET INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  }
  function reducer(state, action) {
    if (action.type === "SET INPUT") {
      return { ...state, [action.payload.name]: action.payload.value };
    }
    if (action.type === "FORM_RESET") {
      return user;
    }
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await emailjs.sendForm("service_jrqgq6n", "template_iv7wrev", e.target, {
        publicKey: "HS8akxdUDnJ2bobad",
      });
      dispatch({ type: "FORM_RESET" });
      notify();
    } catch (error) {
      console.error("Error sending email:", error);
    }
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-900 pt-24">
      <section
        id="contact"
        className="py-10 px-5 text-gray-800 dark:text-gray-100"
      >
        <ToastContainer draggablePercent={50} />
        <h2 className="text-4xl font-bold text-center uppercase text-gray-500 dark:text-slate-50">
          Contact Me
        </h2>

        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto mt-8 space-y-1"
        >
          <label htmlFor="name" className="text-sm text-gray-600">
            Name
          </label>

          <input
            type="text"
            id="name"
            value={state.name}
            onChange={handleChange}
            name="name"
            autoFocus
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
          />
          <label htmlFor="email" className="text-sm text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={state.email}
            onChange={handleChange}
            name="email"
            required
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
          />
          <label htmlFor="message" className="text-sm text-gray-600">
            Message
          </label>
          <textarea
            rows="4"
            id="message"
            placeholder="Your Message"
            value={state.message}
            onChange={handleChange}
            name="message"
            required
            className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </section>
      <Footer/>
    </div>
  );
};

export default Contact;
