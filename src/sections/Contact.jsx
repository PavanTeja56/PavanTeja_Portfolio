import SectionTitle from "../components/SectionTitle";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-32 px-6"
    >

      <div className="max-w-4xl mx-auto text-center">

        <SectionTitle
          subtitle="Get In Touch"
          title="Contact"
        />

        <p className="text-slate-400 text-lg mb-12">

          Interested in collaborating, internships or full-time opportunities?

        </p>

        <div className="space-y-6 text-lg">

          <p>
  <a
    href="mailto:pavanteja0107@gmail.com"
    className="hover:text-cyan-400 transition"
  >
    pavanteja0107@gmail.com
  </a>
</p>

<p>
  <a
    href="https://github.com/PavanTeja56"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-cyan-400 transition"
  >
    GitHub
  </a>
</p>

<p>
  <a
    href="https://www.linkedin.com/in/pavan-teja-599191291/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-cyan-400 transition"
  >
    LinkedIn
  </a>
</p>

        </div>

      </div>

    </section>
  );
};

export default Contact;