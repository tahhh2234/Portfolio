import { motion } from "framer-motion";
import {
  HiOutlineCode,
  HiOutlineLightBulb,
  HiOutlineDesktopComputer,
} from "react-icons/hi";
import {
  SiJavascript,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiPython,
  SiDjango,
  SiMysql,
} from "react-icons/si";

const About = () => {
  const skills = [
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "React", icon: SiReact, color: "text-blue-400" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "Python", icon: SiPython, color: "text-blue-500" },
    { name: "Django", icon: SiDjango, color: "text-green-500" },
    { name: "MySQL", icon: SiMysql, color: "text-blue-500" },
  ];

  const features = [
    {
      icon: HiOutlineCode,
      title: "การพัฒนา",
      description:
        "พัฒนาเว็บแอปพลิเคชันด้วยเทคโนโลยีที่ทันสมัย เน้นการเขียนโค้ดที่มีคุณภาพและยั่งยืน",
    },
    {
      icon: HiOutlineLightBulb,
      title: "การแก้ปัญหา",
      description:
        "วิเคราะห์และแก้ไขปัญหาอย่างเป็นระบบ พร้อมนำเสนอวิธีแก้ไขที่มีประสิทธิภาพ",
    },
    {
      icon: HiOutlineDesktopComputer,
      title: "การออกแบบ UI/UX",
      description:
        "ออกแบบส่วนติดต่อผู้ใช้ที่สวยงามและใช้งานง่าย เน้นประสบการณ์ผู้ใช้เป็นหลัก",
    },
  ];

  return (
    <section className="min-h-screen py-28" id="about">
      <div className="max-w-7xl mx-auto px-6">
        {/* title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl mb-4">
            About me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-200 max-w-3xl mx-auto">
            I'm a Computer Engineering student with a strong passion for
            frontend development. Experienced in building web applications.
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mb-16"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-4 bg-white dark:bg-neutral-800 rounded-xl shadow-lg"
            >
              <skill.icon className={`text-4xl ${skill.color} mb-2`} />
              <span className="text-sm font-medium text-gray-600 dark:text-white">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Section */}
        {/* <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <feature.icon className="text-3xl text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-white">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div> */}

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white dark:bg-neutral-800 p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Education
            </h3>
            <div className="space-y-4">
              <div className="border-l-2 border-blue-500 pl-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Bunyawat Witthayalai School
                </h4>
                <p className="text-gray-600 dark:text-gray-100">
                  Secondary/High School
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-100">
                  2015-2020
                </p>
                <p className="text-gray-600 dark:text-gray-100">GPA: 3.53</p>
              </div>
              <div className="border-l-2 border-blue-500 pl-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Chiangmai University
                </h4>
                <p className="text-gray-600 dark:text-gray-100">
                  Bachelor of Computer Engineering
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-100">
                  2021-2024
                </p>
                <p className="text-gray-600 dark:text-gray-100">GPA: 3.31</p>
              </div>
            </div>
          </motion.div>

          {/* experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className=" bg-white dark:bg-neutral-800 p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Experience
            </h3>
            <div className="space-y-4">
              <div className="border-l-2 border-blue-500 pl-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Advance Information Technology Public Company Limited (AIT)
                </h4>
                <p className="text-gray-600 dark:text-gray-100">
                  Intern - Network Engineer
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-100">
                  June 2024 - October 2024
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
