import SectionTitle from "../components/SectionTitle";
import { motion } from "framer-motion";
import myphoto from "../assets/myphoto.webp";

const About = () => {
  return (
    <section
      id="about"
      className="pt-40 pb-32 px-6"
    >

      <div className="max-w-6xl mx-auto">

        <SectionTitle
          title="About Me"
        />

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >

          <div>

            <img
              src={myphoto}
              alt="Pavan Teja profile photo"
              loading="lazy"
              width="500"
              height="500"
              className="rounded-3xl w-full hover:scale-[1.02] transition duration-500"
            />

          </div>

          <div className="space-y-6 text-slate-300 text-lg leading-relaxed">

            <p>
              I’m an aspiring AI/ML Engineer passionate about building intelligent and scalable real-world applications.
            </p>

            <p>
              I enjoy working with Machine Learning, Deep Learning, Computer Vision, and modern AI technologies to solve practical problems.
            </p>

            <p>
              Alongside AI/ML development, I also build responsive and user-friendly applications using modern development tools and frameworks.
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default About;