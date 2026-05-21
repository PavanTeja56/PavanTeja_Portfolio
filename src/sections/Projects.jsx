import SectionTitle from "../components/SectionTitle";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Demand Forecasting and Inventory Optimization",

    description:
      "A retail demand forecasting and inventory optimization system that predicts product demand and recommends optimal reorder points and order quantities to minimize stockouts and excess inventory.",

    tech: "LightGBM • Streamlit • Plotly",

    github: "https://github.com/PavanTeja56/retail-demand-forecasting",

    demo: "https://youtu.be/0xWcxHnS8lQ?si=lBbHH6TqEkEjdF3v",
  },

  {
    title: "LLM Performance Benchmarking Tool in Python",

    description:
      "LLM Performance Benchmark Tool to evaluate and compare large language models across latency, accuracy, throughput, and cost metrics through automated testing and interactive dashboards.",

    tech: "LLM APIs • FastAPI • ArgParser",

    github: "https://github.com/PavanTeja56/llm-benchmark",

    demo: "https://youtu.be/2mdTy36hryY?si=3yhayvGpcNJY-Bfk",
  },

  {
    title: "Reinforcement Learning Self Driving Car",

    description:
      "Developed a Reinforcement Learning–based self-driving car agent capable of learning autonomous navigation through reward-driven training in a simulated environment.",

    tech: "PPO • Pygame • Gymnasium",

    github: "https://github.com/PavanTeja56/self-driving-car-RL",

    demo: "https://youtube.com/demo3",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-32 px-6"
    >

      <div className="max-w-7xl mx-auto">

        <SectionTitle
          subtitle="Featured Work"
          title="Projects"
        />

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}

              initial={{ opacity: 0, y: 50 }}

              whileInView={{ opacity: 1, y: 0 }}

              viewport={{ once: true }}

              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}

              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400 hover:-translate-y-3 hover:bg-white/10 transition duration-300"
            >

              <div className="h-48 rounded-2xl bg-gradient-to-br from-violet-600/30 to-cyan-400/20 mb-6 flex items-center justify-center">

                <p className="text-slate-300 text-lg font-semibold">
                  AI / ML Project
                </p>

              </div>

              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-slate-400 leading-relaxed mb-6">
                {project.description}
              </p>

              <p className="text-cyan-400 text-sm mb-8">
                {project.tech}
              </p>

              <div className="flex gap-4 flex-wrap">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >

                  <button className="bg-violet-600 px-5 py-2 rounded-xl hover:bg-violet-500 hover:scale-105 transition duration-300">

                    GitHub

                  </button>

                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >

                  <button className="border border-white/20 px-5 py-2 rounded-xl hover:bg-white/10 hover:scale-105 transition duration-300">

                    Demo Video

                  </button>

                </a>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Projects;