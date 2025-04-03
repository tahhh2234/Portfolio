import {
  FiFacebook,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiInstagram
} from "react-icons/fi";
import { motion } from "framer-motion";

const Contact = () => {
  const contactInfo = [
    { icon: FiMail, text: "thadpongsermsook@gmail.com", href: "#" },
    { icon: FiPhone, text: "098-748-8483", href: "#" },
    {
      icon: FiMapPin,
      text: "389 Pongsanthong, Muang, Lampang, Thailand",
      href: "#",
    },
  ];
  const socialLinks = [
    {
      icon: FiGithub,
      href: "https://github.com/tahhh2234",
      label: "Github",
    },
    {
      icon: FiLinkedin,
      href: "https://www.linkedin.com/in/thadpong-sermsook-63a439293/",
      label: "LinkedIn",
    },
    {
      icon: FiFacebook,
      href: "https://www.facebook.com/cheetah.thadpong/",
      label: "Facebook",
    },
    {
      icon: FiInstagram,
      href: "https://www.instagram.com/cheetah_thadpong/",
      label: "Instagram",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="min-h-screen py-28" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        {/* title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            Contact me
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            You can contact me by email or through my social media accounts
            below.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12">
          {/* left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-neutral-800 rounded-2xl shadow-lg p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-md font-medium text-gray-700 dark:text-gray-200 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-neutral-700 border border-gray-200 dark:border-neutral-600 focus:ring-2 text-neutral-800 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none transition-all dark:text-white"
                  placeholder="Enter your name..."
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-md font-medium text-gray-700 dark:text-gray-200 mb-2"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-neutral-700 border border-gray-200 dark:border-neutral-600 focus:ring-2 text-neutral-800 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none transition-all dark:text-white"
                  placeholder="example@gmail.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-md font-medium text-gray-700 dark:text-gray-200 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-neutral-700 border border-gray-200 dark:border-neutral-600 focus:ring-2 text-neutral-800 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none transition-all dark:text-white resize-none"
                  placeholder="Enter your message..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-700 to-blue-400 text-white rounded-lg px-6 py-3 font-medium hover:opacity-90 transition-opacity"
              >
                Send
              </motion.button>
            </form>
          </motion.div>

          {/* right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, text, href }) => (
                  <motion.a
                    key={text}
                    href={href}
                    className="flex items-center space-x-4 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    <Icon size={20} />
                    <span>{text}</span>
                  </motion.a>
                ))}
              </div>
            </div>
            {/* social media */}
            <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Social media
              </h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex p-3 bg-gray-50 dark:bg-neutral-700 rounded-lg text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-neutral-600 transition-colors gap-3"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={24} />
                    {label}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
