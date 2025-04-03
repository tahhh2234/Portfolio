import { FiFacebook, FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
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

  return (
    <footer className="bg-white dark:bg-neutral-900 border-t border-gray-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* description */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent"
            >
              Thadpong Sermsook
            </motion.div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              A Computer Engineering student with a strong passion for frontend
              development and software testing. Experienced in building web
              applications.
            </p>
          </div>
          {/* contact */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">
              Contact
            </h3>
            <div className="space-y-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                E-mail: thadpongsermsook@gmail.com
                <br />
                Tel: 098-748-8483
                <br />
                Address: 389 Pongsanthong, Muang, Lampang, Thailand
              </p>
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className=" text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-200 transition-colors"
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-neutral-800">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Thadpong Sermsook. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
