import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSlider() {
  const slides = useMemo(
    () => [
      {
        img: "/images/slider/langchai1.jpg",
        title: "VIETNAM EN IMMERSION",
        subtitle: "Rencontre • Partage • Découverte",
      },
      {
        img: "/images/slider/travel1.jpeg",
        title: "SÉJOURS CHEZ L’HABITANT",
        subtitle: "Vivre au plus près des habitants",
      },
      {
        img: "/images/slider/HOANGSUPHI1.jpg",
        title: "HOANG SU PHI",
        subtitle: "Au coeur des rizières en terrasses",
      },
       {
        img: "/images/slider/canhdepvn1.jpg",
        title: "VIETNAM",
        subtitle: "Everything has beauty, but not everyone sees it",
      },
        {
        img: "/images/slider/canhdepvn2.jpg",
        title: "VietNam is the best",
        subtitle: "Work hard, dream big",
      },
         {
        img: "/images/slider/canhdepvn3.jpg",
        title: "VietNam SaPa",
        subtitle: " A winner never stops trying.",
      },
    ],
    []
  );

  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  // crossfade layer
  const [frontSrc, setFrontSrc] = useState(slides[0].img);
  const [backSrc, setBackSrc] = useState(slides[0].img);
  const [showFront, setShowFront] = useState(true);

  // parallax
  const wrapRef = useRef(null);
  const frontImgRef = useRef(null);
  const backImgRef = useRef(null);

  // preload all hero images
  useEffect(() => {
    slides.forEach((s) => {
      const im = new Image();
      im.src = s.img;
    });
  }, [slides]);

  // apply parallax to both layers (so crossfade vẫn mượt)
  useEffect(() => {
    const onScroll = () => {
      const wrap = wrapRef.current;
      if (!wrap) return;

      const rect = wrap.getBoundingClientRect();
      const vh = window.innerHeight || 800;

      // progress: -1 -> 1
      const progress = (rect.top - vh / 2) / (vh / 2);
      const translate = Math.max(-22, Math.min(22, -progress * 18));

      const t = `translateY(${translate}px) scale(1.08)`;
      if (frontImgRef.current) frontImgRef.current.style.transform = t;
      if (backImgRef.current) backImgRef.current.style.transform = t;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (nextIndex) => {
    const next = (nextIndex + slides.length) % slides.length;
    const nextImg = slides[next].img;

    // update hidden layer first, then flip opacity
    if (showFront) {
      setBackSrc(nextImg);
    } else {
      setFrontSrc(nextImg);
    }
    // small RAF ensures browser has time to paint src change before fade
    requestAnimationFrame(() => setShowFront((v) => !v));

    setIdx(next);
  };

  // autoplay
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => go(idx + 1), 3500);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, idx]);

  // touch swipe (mobile)
  const touchStartX = useRef(0);
  const onTouchStart = (e) => {
    touchStartX.current = e.touches?.[0]?.clientX ?? 0;
    setPaused(true);
  };
  const onTouchEnd = (e) => {
    const endX = e.changedTouches?.[0]?.clientX ?? 0;
    const dx = endX - touchStartX.current;
    setPaused(false);

    if (Math.abs(dx) < 40) return; // threshold
    if (dx > 0) go(idx - 1);
    else go(idx + 1);
  };

  const current = slides[idx];

  return (
    <section
      ref={wrapRef}
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="relative h-[440px] md:h-[560px] w-full">
        {/* BACK layer */}
        <img
          ref={backImgRef}
          src={backSrc}
          alt=""
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 will-change-transform ${
            showFront ? "opacity-0" : "opacity-100"
          }`}
          style={{ transform: "translateY(0) scale(1.08)" }}
          loading="eager"
        />

        {/* FRONT layer */}
        <img
          ref={frontImgRef}
          src={frontSrc}
          alt={current.title}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 will-change-transform ${
            showFront ? "opacity-100" : "opacity-0"
          }`}
          style={{ transform: "translateY(0) scale(1.08)" }}
          loading="eager"
        />

        {/* Cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.10),rgba(0,0,0,0))]" />

        {/* subtle film grain */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-overlay
                        [background-image:url('/images/ui/grain.png')]
                        [background-size:240px_240px]" />

        <div className="container-app relative h-full flex items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-2 text-white/90 text-xs tracking-[0.3em] uppercase backdrop-blur">
              Curated Journeys
              <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
              Crafted with Care
            </div>

            <h1 className="mt-5 text-white text-4xl md:text-6xl font-black tracking-tight drop-shadow">
              {current.title}
            </h1>

            <p className="mt-3 text-white/85 text-lg md:text-2xl">
              {current.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/tours"
                className="px-6 py-3 rounded-xl bg-white text-slate-900 font-black
                           shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                See more tour
              </Link>

              <Link
                to="/news"
                className="px-6 py-3 rounded-xl border border-white/25 text-white font-black
                           transition hover:bg-white/10 hover:-translate-y-0.5 backdrop-blur"
              >
                View the news
              </Link>
            </div>
          </div>
        </div>

        {/* controls */}
        <button
          type="button"
          aria-label="Prev"
          onClick={() => go(idx - 1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full
                     bg-white/15 hover:bg-white/25 text-white flex items-center justify-center backdrop-blur"
        >
          <ChevronLeft />
        </button>

        <button
          type="button"
          aria-label="Next"
          onClick={() => go(idx + 1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full
                     bg-white/15 hover:bg-white/25 text-white flex items-center justify-center backdrop-blur"
        >
          <ChevronRight />
        </button>

        {/* dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === idx ? "bg-white" : "bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
