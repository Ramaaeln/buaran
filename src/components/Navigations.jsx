import { useEffect, useState } from "react";

export default function Navigations() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`w-full flex justify-between items-center p-4 sticky top-0 z-50 transition-all duration-300
          ${
            scrolled
              ? "bg-white/80 backdrop-blur-md shadow-sm"
              : "bg-transparent"
          }
        `}
      >
        <a href="#" className="flex items-center gap-2">
          <img src="/src/assets/img/logos.png" alt="App Logo" className="w-10" />
          <span
            className={`font-semibold text-lg transition ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            SAPABUARAN
          </span>
        </a>

        <ul
          className={`hidden md:flex gap-6 items-center transition
            ${scrolled ? "text-gray-700" : "text-white"}
          `}
        >
          <li><a href="#features" className="hover:text-blue-600 transition">Features</a></li>
          <li><a href="#about" className="hover:text-blue-600 transition">About</a></li>
          <li><a href="#faq" className="hover:text-blue-600 transition">FAQ</a></li>
        </ul>

        <a
          href="#download"
          className="hidden md:inline-block px-4 py-2 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition"
        >
          Download
        </a>

        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden text-2xl transition ${
            scrolled ? "text-gray-800" : "text-white"
          }`}
        >
          ☰
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity md:hidden
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        onClick={() => setOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 z-50 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 md:hidden
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="p-6 space-y-6">
          <button
            onClick={() => setOpen(false)}
            className="text-xl font-bold text-gray-600"
          >
            ✕
          </button>

          <nav className="flex flex-col gap-4 text-gray-700 font-medium">
            <a href="#features" onClick={() => setOpen(false)}>Features</a>
            <a href="#about" onClick={() => setOpen(false)}>About</a>
            <a href="#faq" onClick={() => setOpen(false)}>FAQ</a>
            <a
              href="#download"
              onClick={() => setOpen(false)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-xl text-center"
            >
              Download
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
