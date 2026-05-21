import { motion } from "framer-motion";
import resume from "../assets/resume.pdf";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">

      {/* Background Glow Effects */}

      <div className="absolute top-20 left-20 w-56 h-56 bg-violet-600/20 rounded-full blur-2xl"></div>

      <div className="absolute bottom-20 right-20 w-56 h-56 bg-cyan-400/10 rounded-full blur-2xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto text-center relative z-10"
      >

        <div className="space-y-6">

          <p className="text-cyan-400 uppercase tracking-[0.25em] text-lg md:text-2xl font-semibold">

            Pavan Siva Naga Teja Setty

          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">

            Machine Learning
            <br />
            Enthusiast

          </h1>

        </div>

        <p className="text-slate-400 mt-8 max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed">

          Aspiring AI/ML Engineer skilled in building machine learning,
          deep learning, and scalable AI applications using Python
          and modern ML tools.

        </p>

        <div className="flex gap-4 justify-center mt-10 flex-wrap">

          <a href="#projects"   aria-label="View Projects"   className="bg-gradient-to-r from-violet-600 to-purple-500 px-8 py-4 rounded-2xl hover:scale-105 transition duration-300 inline-block">

            {/*<button  className="bg-gradient-to-r from-violet-600 to-purple-500 px-8 py-4 rounded-2xl hover:scale-105 transition duration-300" >*/}

              View Projects

           { /*</a></button>*/}

          </a>

          <a href="#contact">

            <button aria-label="Contact Me" className="border border-white/20 px-8 py-4 rounded-2xl hover:bg-white/10 hover:scale-105 transition duration-300" >

              Contact Me

            </button>

          </a>

          <a
  href={resume}
  download
  aria-label="Download Resume"
  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-2xl hover:bg-cyan-400 hover:text-black transition duration-300 inline-block"
>

  Download Resume

</a>
          

        </div>

      </motion.div>

    </section>
  );
};

export default Hero;