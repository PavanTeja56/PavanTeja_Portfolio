const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-10 text-center text-slate-500 px-6">

      <p className="mb-4">
        © 2026 Pavan Teja. All rights reserved.
      </p>

      <div className="flex justify-center gap-6 text-sm">

        <a
          href="https://github.com/PavanTeja56"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/pavan-teja-599191291/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400"
        >
          LinkedIn
        </a>

      </div>

    </footer>
  );
};

export default Footer;