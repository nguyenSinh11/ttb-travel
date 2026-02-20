import { Link } from "react-router-dom";
import { Facebook, Youtube, Linkedin, MapPin, Phone } from "lucide-react";
import { COMPANY } from "../config/company";

const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  COMPANY.address
)}`;

export default function Footer() {
  return (
    <footer className="bg-[#0f2e24] text-white">
      <div className="container-app py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* COL 1 */}
          <div>
            <h3 className="font-extrabold tracking-wide text-lg text-white">
              {COMPANY.brand}
            </h3>

            <ul className="mt-6 space-y-3 text-emerald-100/70">
              <li>
                <Link className="hover:text-white transition" to="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" to="/terms">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" to="/privacy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" to="/covid">
                  Covid-19
                </Link>
              </li>
            </ul>
          </div>

          {/* COL 2 */}
          <div>
            <h3 className="font-extrabold tracking-wide text-lg text-white">
              COMPANY
            </h3>

            <ul className="mt-6 space-y-3 text-emerald-100/70">
              <li>
                <span className="text-emerald-100/70">
                  Legal name:{" "}
                  <span className="text-white/90">{COMPANY.legalName}</span>
                </span>
              </li>
              <li>
                <span className="text-emerald-100/70">
                  Short name:{" "}
                  <span className="text-white/90">{COMPANY.shortName}</span>
                </span>
              </li>
              <li>
                <span className="text-emerald-100/70">
                  Tax code:{" "}
                  <span className="text-white/90">{COMPANY.taxCode}</span>
                </span>
              </li>
              <li>
                <span className="text-emerald-100/70">
                  Representative:{" "}
                  <span className="text-white/90">{COMPANY.representative}</span>
                </span>
              </li>
            </ul>
          </div>

          {/* COL 3 */}
          <div>
            <h3 className="font-extrabold tracking-wide text-lg text-white">
              MAP
            </h3>

            <div className="mt-6 rounded-2xl overflow-hidden border border-emerald-400/20 bg-emerald-900/20">
              <div className="aspect-[4/3] w-full">
                <iframe
                  title="Google Map"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    COMPANY.address
                  )}&output=embed`}
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                COMPANY.address
              )}`}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block text-sm font-semibold text-emerald-200 hover:text-white transition"
            >
              OPEN IN GOOGLE MAPS →
            </a>
          </div>

          {/* COL 4 */}
          <div>
            <h3 className="font-extrabold tracking-wide text-lg text-white">
              CONTACT
            </h3>

            <div className="mt-6 space-y-4 text-emerald-100/80">
              <p className="flex gap-3">
                <MapPin size={18} className="mt-1 opacity-80" />
                <span>{COMPANY.address}</span>
              </p>

              <p className="flex gap-3 items-center">
                <Phone size={18} className="opacity-80" />
                <a
                  className="hover:text-white transition"
                  href={`tel:${COMPANY.phone}`}
                >
                  {COMPANY.phone}
                </a>
              </p>

              <a
                className="inline-block mt-2 font-semibold text-emerald-200 hover:text-white transition"
                target="_blank"
                rel="noreferrer"
                href={mapUrl}
              >
                GET DIRECTIONS »
              </a>

              <div className="mt-6">
                <div className="font-semibold tracking-wide text-white">
                  FOLLOW US
                </div>

                <div className="mt-3 flex gap-3">
                  <a
                    className="h-10 w-10 rounded-full bg-emerald-800/40 hover:bg-emerald-700/60 transition flex items-center justify-center"
                    href="#"
                  >
                    <Facebook size={18} />
                  </a>
                  <a
                    className="h-10 w-10 rounded-full bg-emerald-800/40 hover:bg-emerald-700/60 transition flex items-center justify-center"
                    href="#"
                  >
                    <Youtube size={18} />
                  </a>
                  <a
                    className="h-10 w-10 rounded-full bg-emerald-800/40 hover:bg-emerald-700/60 transition flex items-center justify-center"
                    href="#"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-emerald-400/15 text-emerald-100/60 text-sm flex flex-col md:flex-row items-center justify-between gap-3">
          <div>© 2026 {COMPANY.brand}. All rights reserved.</div>
          <div className="text-xs opacity-70">Deep Indochina journeys</div>
        </div>
      </div>
    </footer>
  );
}