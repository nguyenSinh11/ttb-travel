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
        {label} <ChevronDown size={16} className="opacity-70" />
      </button>

      {open && (
        <div className="absolute left-0 top-full mt-2 w-56 rounded-xl border border-slate-200 bg-white shadow-lg overflow-hidden z-50">
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
      )}
    </div>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="container-app h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-slate-900 text-white flex items-center justify-center font-black">
            T
          </div>

          <div className="leading-tight">
            <div className="font-extrabold tracking-wide">
              TAM THAI BAO SERVICES TOURISM JOINT STOCK COMPANY
            </div>
            <div className="text-xs text-slate-500 -mt-0.5">
              Deep Indochina journeys
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center">
          <Dropdown
            label="DESTINATIONS"
            items={[
              { href: "/tours?dest=VN", label: "Vietnam" },
              { href: "/tours?dest=SEA", label: "Southeast Asia" },
            ]}
          />

          <Dropdown
            label="EXPERIENCES"
            items={[
              { href: "/tours?type=cruise", label: "Cruise" },
              { href: "/tours?type=culture", label: "Culture" },
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
            className="ml-2 px-3 py-2 text-sm font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-2"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-600" />
            RESPONSIBLE TRAVEL
          </NavLink>
        </nav>

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
