import { motion } from "framer-motion";
import { FiFacebook, FiGithub, FiLinkedin } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div
      className="min-h-screen relative overflow-hidden flex items-center justify-center"
      id="home"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="text-center">
          {/* top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="inline-block text-sm font-semibold text-blue-600 tracking-wide uppercase bg-blue-50 px-4 py-1 rounded-full cursor-default">
              Welcome to my portfolio.
            </h2>
          </motion.div>

          {/* middle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              <span className="block mt-2">
                <TypeAnimation
                  sequence={[
                    "Hi, I'm Thadpong Sermsook.",
                    1000,
                    "I'm a Frontend Developer.",
                    1000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                  className="bg-gradient-to-r from-blue-400 to-blue-800 bg-clip-text text-transparent cursor-default"
                />
              </span>
            </h1>
          </motion.div>

          {/* bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex justify-center items-center space-x-6"
          >
            {[
              {
                Icon: FiGithub,
                href: "https://github.com/tahhh2234",
                label: "Github",
              },
              {
                Icon: FiLinkedin,
                href: "https://www.linkedin.com/in/thadpong-sermsook-63a439293/",
                label: "LinkedIn",
              },
              {
                Icon: FiFacebook,
                href: "https://www.facebook.com/cheetah.thadpong/",
                label: "Facebook",
              },
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 text-gray-600 hover:text-blue-600 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors rounded-full"
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Home;
