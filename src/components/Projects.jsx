import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";

const Projects = () => {
  const projects = [
    {
      title: "CPEnotebook",
      image: "/img/cpenotebook.png",
      description:
        "A web-based notebook to organize and document study materials for Computer Engineering courses.",
      github: "https://github.com/Suphanxth/cpe_notebook_261361",
      tags: ["Python", "React.js", "Django", "CSS", "HTML", "MySQL"],
    },
    {
      title: "Easible",
      image: "/img/easible.png",
      description:
        "An automated network configuration and verification web application.",
      github: "https://github.com/ChonlananT/Easible",
      tags: [
        "Python",
        "TypeScript",
        "Flask",
        "React.js",
        "PostgreSQL",
        "CSS",
        "HTML",
        "Docker",
        "Ubuntu",
        "Ansible",
      ],
    },
  ];

  return (
    <section className="min-h-screen py-28" id="projects">
      <div className="max-w-7xl mx-auto px-10">
        {/* title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mg-4">
            My Projects
          </h2>
        </motion.div>

        {/* projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg dark:shadow-[0_10px_15px_rgba(222,222,222,0.1)] overflow-hidden group"
            >
              {/* image */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 rounded-full hover:bg-white/25 text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiGithub size={20} />
                  </motion.a>
                </div>
              </div>

              {/* content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div>
                  {project.tags.map((tags) => (
                    <span key={tags}
                      className="inline-block bg-blue-100 text-blue-800 text-xs font-medium rounded-full px-3 py-1 mr-2 mb-2 dark:bg-blue-700/30 dark:text-blue-100"
                    >{tags}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
