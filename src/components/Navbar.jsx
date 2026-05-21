const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <h1 className="text-2xl font-bold">
          Pavan Teja
        </h1>

        <ul className="flex gap-4 md:gap-8 text-xs md:text-sm text-slate-300">

  <li>
    <a href="#about" className="hover:text-cyan-400 hover:-translate-y-1 transition duration-300 transition">
      About
    </a>
  </li>

  <li>
    <a href="#skills" className="hover:text-cyan-400 hover:-translate-y-1 transition duration-300 transition">
      Skills
    </a>
  </li>

  <li>
    <a href="#projects" className="hover:text-cyan-400 hover:-translate-y-1 transition duration-300 hover:-translate-y-1 transition">
      Projects
    </a>
  </li>

  <li>
    <a href="#contact" className="hover:text-cyan-400 hover:-translate-y-1 transition duration-300 transition">
      Contact
    </a>
  </li>

</ul>

      </div>

    </nav>
  );
};

export default Navbar;