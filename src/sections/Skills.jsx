import SectionTitle from "../components/SectionTitle";
import { motion } from "framer-motion";

const skills = [
  "Python",
  "Machine Learning",
  "Data Science",
  "Deep Learning",
  "FastAPI",
  "Docker",
  "SQL",
  "Git",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-32 px-6"
    >

      <div className="max-w-6xl mx-auto">

        <SectionTitle
          subtitle="Technologies"
          title="Skills"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {skills.map((skill, index) => (

            <motion.div
              key={skill}

              initial={{ opacity: 0, y: 40 }}

              whileInView={{ opacity: 1, y: 0 }}

              viewport={{ once: true }}

              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}

              className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-cyan-400 hover:-translate-y-2 hover:bg-white/10 transition duration-300"
            >

              <h3 className="text-lg font-semibold">
                {skill}
              </h3>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Skills;