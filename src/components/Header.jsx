import { Link, NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const navItemClass = ({ isActive }) =>
  `px-3 py-2 text-sm font-semibold tracking-wide ${
    isActive ? "text-emerald-700" : "text-slate-700 hover:text-slate-900"
  }`;

function Dropdown({ label, items }) {
  const [open, setOpen] = useState(false);

return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-slate-900 flex items-center gap-1">
        {label}
        <ChevronDown size={16} className="opacity-70" />
      </button>

      {open && (
        // This wrapper creates a "hover bridge" (no gap) between the button and the menu
        <div className="absolute left-0 top-full w-56 pt-2 z-50">
          <div className="rounded-xl border border-slate-200 bg-white shadow-lg overflow-hidden">
            {items.map((it) => (
              <Link
                key={it.href}
                to={it.href}
                className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50"
              >
                {it.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="container-app h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img
            src="/images/logo-ttb.jpeg"
            alt="TTB Travel"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-2">
          <Dropdown
            label="DESTINATIONS"
            items={[
              { href: "/destinations/vietnam", label: "Vietnam" },
              { href: "/destinations/southeast-asia", label: "Southeast Asia" },
            ]}
          />

          <Dropdown
            label="EXPERIENCES"
            items={[
              { href: "/experiences/cruise", label: "Cruise" },
              { href: "/experiences/culture", label: "Culture" },
            ]}
          />

          <Dropdown
            label="RESOURCES"
            items={[
              { href: "/contact", label: "FAQ / Contact" },
              { href: "/tours", label: "All tours" },
            ]}
          />

          <NavLink to="/contact" className={navItemClass}>
            AGENCY
          </NavLink>

          <NavLink
            to="/contact"
            className="ml-2 px-4 py-2 text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition"
          >
            RESPONSIBLE TRAVEL
          </NavLink>
        </nav>

        {/* MOBILE */}
        <div className="md:hidden">
          <NavLink
            to="/tours"
            className="px-3 py-2 text-sm font-semibold text-slate-700"
          >
            Tours
          </NavLink>
        </div>
      </div>
    </header>
  );
}