import { Facebook, Youtube, Linkedin, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f2e24] text-white">
      <div className="container-app py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* COL 1 */}
          <div>
            <h3 className="font-extrabold tracking-wide text-lg text-white">
              TTB TRAVEL
            </h3>

            <ul className="mt-6 space-y-3 text-emerald-100/70">
              <li>
                <a className="hover:text-white transition" href="#">
                  About us
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="#">
                  Terms of sale
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="#">
                  Privacy policy
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="#">
                  Covid-19
                </a>
              </li>
            </ul>
          </div>

          {/* COL 2 */}
          <div>
            <h3 className="font-extrabold tracking-wide text-lg text-white">
              OUR RESPONSIBLE APPROACH
            </h3>

            <ul className="mt-6 space-y-3 text-emerald-100/70">
              <li>
                <a className="hover:text-white transition" href="#">
                  Manifesto
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="#">
                  Our partners
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="#">
                  Vietnam pledge
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="#">
                  Sustainable tourism criteria
                </a>
              </li>
            </ul>
          </div>

          {/* COL 3 */}
          <div>
            <h3 className="font-extrabold tracking-wide text-lg text-white">
              BROCHURE
            </h3>

            <a
              href="#"
              className="mt-6 block rounded-2xl overflow-hidden border border-emerald-400/20 hover:border-emerald-300/40 transition"
            >
              <div className="aspect-[4/3] bg-emerald-900/30 flex items-center justify-center text-emerald-100/60 text-sm tracking-wide">
                Brochure Image
              </div>
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
                <span>
                  204 Pho Duc Chinh <br />
                  Ba Dinh District <br />
                  Hanoi, Vietnam
                </span>
              </p>

              <p className="flex gap-3 items-center">
                <Phone size={18} className="opacity-80" />
                <span>Tel: (+84) – 906288031</span>
              </p>

              <a
                className="inline-block mt-2 font-semibold text-emerald-200 hover:text-white transition"
                target="_blank"
                rel="noreferrer"
                href="https://www.google.com/maps"
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
          <div>© 2026 TTB-Travel. All rights reserved</div>
          <div className="text-xs opacity-70">Crafted with care · Sustainable journeys</div>
        </div>
      </div>
    </footer>
  );
}
