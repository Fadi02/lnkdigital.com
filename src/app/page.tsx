"use client";
import React, { useRef, useEffect, useState } from "react";

// Strong blue glow background SVG
const BlueGlow = () => (
  <svg className="fixed top-[-20vw] left-[-20vw] w-[80vw] h-[80vw] -z-20 opacity-80 pointer-events-none" style={{ filter: 'blur(80px)' }} viewBox="0 0 700 700"><ellipse cx="350" cy="350" rx="350" ry="350" fill="#2563eb" fillOpacity="0.7"/></svg>
);

const Navbar = () => (
  <div className="flex items-center justify-center mt-8 mb-10">
    <img src="/linked-digital-logo.svg" alt="Linked Digital logo, performance marketing agency" className="h-16 w-auto" />
  </div>
);

const processSteps = [
  {
    title: "Audit",
    desc: "We analyze your backend: cart leaks, email gaps, and post-purchase journey.",
    icon: "🔍",
  },
  {
    title: "Fix the Leaks",
    desc: "We implement automations, flows, and smart revenue systems.",
    icon: "🛠️",
  },
  {
    title: "Scale Profitably",
    desc: "Once your backend converts, we unlock growth with paid traffic.",
    icon: "🚀",
  },
];

// useInView hook for triggering animation on scroll
function useInView(ref: React.RefObject<Element | null>, rootMargin = "0px") {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, rootMargin]);
  return inView;
}

function useCountUp(target: number, duration: number = 2500, decimals: number = 0, start: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let frame: number;
    const startTime = performance.now();
    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = (target) * progress;
      setCount(Number(value.toFixed(decimals)));
      if (progress < 1) frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [target, duration, decimals, start]);
  return count;
}

function CountUp({ value, prefix = '', suffix = '', decimals = 0, duration = 2500, start = false }: { value: number, prefix?: string, suffix?: string, decimals?: number, duration?: number, start?: boolean }) {
  const count = useCountUp(value, duration, decimals, start);
  return <>{prefix}{count}{suffix}</>;
}

export default function Home() {
  const formRef = useRef<HTMLDivElement>(null);
  const calendlyRef = useRef<HTMLDivElement>(null);
  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, "-100px");

  useEffect(() => {
    if (!calendlyRef.current) return;
    // Remove any previous script
    const prev = document.getElementById('cal-embed-script');
    if (prev) prev.remove();
    // Create script
    const script = document.createElement('script');
    script.id = 'cal-embed-script';
    script.type = 'text/javascript';
    script.innerHTML = `
      (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
      Cal("init", "15min", {origin:"https://app.cal.com"});
      Cal.ns["15min"]("inline", {
        elementOrSelector:"#my-cal-inline",
        config: {"layout":"month_view"},
        calLink: "linkeddigital/15min",
      });
      Cal.ns["15min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    `;
    calendlyRef.current.appendChild(script);
  }, []);

  return (
    <main>
      <div className="relative min-h-screen w-full font-sans overflow-x-hidden bg-gradient-to-b from-[#08172b] to-[#01010a]">
        <Navbar />
        <BlueGlow />
        {/* Main content wrapper for spacing below navbar */}
        <div className="pt-32 pb-16 px-2 md:px-0 max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="max-w-4xl mx-auto mb-32 text-center flex flex-col items-center relative overflow-visible">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[220px] bg-blue-500/20 blur-3xl rounded-full -z-10" />
            <div className="flex items-center justify-center mb-8">
              <span className="bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md tracking-wide mr-2">NEW</span>
              <span className="text-white/90 text-base font-medium bg-white/10 px-4 py-1.5 rounded-full">No. 1 Growth System for E-com Brands</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8 tracking-tight bg-gradient-to-br from-blue-200 via-white to-blue-400 bg-clip-text text-transparent drop-shadow-xl">Recover Lost Revenue Before You Burn More on Ads</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-12 text-white/80 font-medium">We help e-com brands increase repeat sales and scale profitably by fixing the backend — before spending more on traffic.</p>
            <button onClick={scrollToForm} className="px-8 py-4 rounded-xl bg-white text-blue-900 font-bold text-lg shadow-lg transition-all duration-200 focus:outline-none hover:scale-105 border border-white/20 mb-16">Book a 15–min call</button>
          </section>

          {/* New Persuasive Section: Why Most E-com Brands Plateau */}
          <section className="relative z-10 max-w-3xl mx-auto rounded-3xl px-8 py-16 mb-20 bg-white/10 backdrop-blur-2xl shadow-2xl border border-blue-400/20 overflow-hidden flex flex-col items-center">
            {/* Blue blurred glow */}
            <span className="absolute -top-24 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-blue-500/30 blur-3xl rounded-full -z-10" />
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white text-center tracking-tight">Why Most E-com Brands Plateau</h2>
            <p className="text-lg md:text-xl text-white/80 mb-8 text-center max-w-2xl font-medium">Most brands aren&apos;t struggling with traffic — they&apos;re struggling with what happens after someone visits their store.</p>
            <ul className="relative z-10 space-y-5 text-white/90 text-base md:text-lg max-w-xl mx-auto mb-8">
              {["You're running ads, but profits aren't scaling with spend", "Repeat purchase rate is low, so you keep chasing new customers", "Your backend (email, SMS, retention) is under-optimized", "You're too busy running the business to build retention systems"].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 w-3 h-3 bg-cyan-400 rounded-full shadow-md animate-pulse" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="relative z-10 text-base md:text-lg text-white/70 mt-2 text-center max-w-xl mx-auto">We help you fix what's missing behind the scenes — so revenue scales without burning ad spend.</p>
          </section>

          {/* Trust / Visual Demo Section */}
          <section className="relative flex justify-center items-center px-4 py-32 max-w-6xl mx-auto overflow-hidden" style={{ minHeight: '420px' }}>
            {/* Animated blue radial gradient background using CSS keyframes */}
            <span className="animated-bg absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[80vw] bg-blue-900/30 rounded-full blur-3xl -z-10" aria-hidden="true" />
            {/* Vertical animated blue accent bar */}
            <div className="hidden md:block relative h-full min-h-[320px] w-3 mr-12">
              <span className="absolute left-0 top-0 w-3 h-full bg-gradient-to-b from-blue-500 via-cyan-400 to-blue-700 rounded-full animate-pulse" />
            </div>
            <div className="flex-1 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-left bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600 bg-clip-text text-transparent tracking-tight">What We Fix</h2>
              <ul className="space-y-6 text-white/90 text-lg md:text-xl mb-8">
                <li className="flex items-start gap-4"><svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-cyan-400 mt-1"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> Abandoned cart & browse flows</li>
                <li className="flex items-start gap-4"><svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-cyan-400 mt-1"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> Post-purchase & winback automations</li>
                <li className="flex items-start gap-4"><svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-cyan-400 mt-1"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> Segmentation & personalized offers</li>
                <li className="flex items-start gap-4"><svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-cyan-400 mt-1"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> Deliverability & creative optimization</li>
              </ul>
              <p className="text-white/70 text-lg md:text-xl text-left">We audit, build, and optimize your backend so you keep more of every dollar you earn.</p>
            </div>
          </section>

          {/* New Section: How We Work Together */}
          <section className="max-w-5xl mx-auto px-4 py-24 flex flex-col items-center">
            {/* Blue blurred glow behind the cards */}
            <span className="absolute left-1/2 -translate-x-1/2 -top-32 w-[600px] h-[200px] bg-blue-500/20 blur-3xl rounded-full -z-10" />
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-white text-center tracking-tight">How We Work Together</h2>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10">
              {processSteps.map((step, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center p-8 rounded-2xl bg-white/10 backdrop-blur-2xl shadow-xl border border-blue-400/20 hover:scale-105 transition-transform duration-300 min-h-[260px]"
                >
                  <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-white font-bold text-xl shadow-lg">{i + 1}</div>
                  <div className="font-bold text-lg md:text-xl mb-2 text-white/90 text-center">{step.title}</div>
                  <div className="text-white/70 text-base text-center">{step.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Why We're Different */}
          <section className="flex flex-col md:flex-row items-center justify-center gap-16 px-4 py-24 max-w-6xl mx-auto border-y border-white/10 relative">
            {/* Blue blurred glow behind the card */}
            <span className="absolute left-1/2 -translate-x-1/2 -top-20 w-[400px] h-[160px] bg-blue-500/20 blur-3xl rounded-full -z-10" />
            <div className="flex-1 bg-white/10 backdrop-blur-2xl rounded-3xl shadow-xl border border-blue-400/20 p-10 flex flex-col items-center">
              <div className="text-2xl md:text-3xl font-semibold text-white/90 mb-6 text-center">
                Most agencies focus on ads.<br />
                <span className="text-blue-400 font-bold">We fix the backend first.</span>
              </div>
              <ul className="space-y-4 text-white/90 text-base md:text-lg mb-4">
                <li className="flex items-start gap-3"><span className="mt-1 w-3 h-3 bg-cyan-400 rounded-full shadow-md" /> Audit your backend for leaks</li>
                <li className="flex items-start gap-3"><span className="mt-1 w-3 h-3 bg-cyan-400 rounded-full shadow-md" /> Build retention & LTV systems</li>
                <li className="flex items-start gap-3"><span className="mt-1 w-3 h-3 bg-cyan-400 rounded-full shadow-md" /> Only scale ads when the backend is ready</li>
              </ul>
              <p className="text-white/70 text-base md:text-lg text-center">We help you scale profitably by fixing what most agencies ignore.</p>
            </div>
          </section>

          {/* Backend Growth System */}
          <section className="px-4 py-24 max-w-5xl mx-auto text-center relative">
            {/* Blue blurred glow behind the cards */}
            <span className="absolute left-1/2 -translate-x-1/2 -top-24 w-[600px] h-[180px] bg-blue-500/20 blur-3xl rounded-full -z-10" />
            <h2 className="text-2xl md:text-3xl font-bold mb-14 text-white tracking-tight">The Backend Growth Engine</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              {[
                { step: "Audit", desc: "Find every revenue leak." },
                { step: "Fix", desc: "Plug the holes & optimize flows." },
                { step: "Build", desc: "Retention & LTV systems." },
                { step: "Scale", desc: "Compound growth & profit." },
              ].map(({ step, desc }, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center p-8 rounded-2xl bg-white/10 backdrop-blur-2xl shadow-xl border border-blue-400/20 hover:scale-105 transition-transform duration-300 min-h-[180px]"
                >
                  <div className="w-10 h-10 mb-3 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-white font-bold text-lg shadow-lg">{i + 1}</div>
                  <div className="font-bold text-base md:text-lg mb-1 text-white/90 text-center">{step}</div>
                  <div className="text-white/70 text-sm text-center">{desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Stats Section */}
          <div ref={statsRef} className="rounded-3xl bg-gradient-to-br from-[#0e1a2f]/90 via-[#0a2342]/80 to-[#01010a]/90 border border-blue-400/30 shadow-2xl px-6 py-14 w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-0 justify-center items-center backdrop-blur-xl">
            {[
              { stat: 2.7, label: "revenue recovered for clients", prefix: "$", suffix: "M", decimals: 1 },
              { stat: 4.8, label: "average ROI on backend systems", prefix: "", suffix: "x", decimals: 1 },
              { stat: 27, label: "increase in returning customers", prefix: "", suffix: "%", decimals: 0 },
            ].map(({ stat, label, prefix, suffix, decimals }, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center flex-1 min-w-[220px] p-8 mx-4 rounded-2xl"
                >
                  <div className="text-5xl md:text-6xl font-extrabold text-blue-400 mb-3 drop-shadow-lg">
                    <CountUp value={stat} prefix={prefix} suffix={suffix} decimals={decimals} duration={2500} start={statsInView} />
                  </div>
                  <div className="text-white/80 text-xl font-medium">{label}</div>
                </div>
            ))}
          </div>

          {/* CTA Section (Updated) */}
          <section ref={formRef} className="px-2 py-10 w-full max-w-full md:max-w-[1000px] mx-auto text-center relative">
            {/* Blue blurred glow behind the card */}
            <span className="absolute left-1/2 -translate-x-1/2 -top-20 w-[400px] h-[160px] bg-blue-500/20 blur-3xl rounded-full -z-10" />
            <div className="bg-white/10 backdrop-blur-2xl rounded-3xl shadow-xl border border-blue-400/20 p-2 flex flex-col items-center w-full overflow-x-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white tracking-tight">Know Where You're Leaking Revenue — Before You Scale</h2>
              <p className="text-lg md:text-xl text-white/80 mb-4 font-medium">Get a free backend audit and see exactly where you can recover lost revenue before spending more on ads.</p>
              {/* Calendly Embed */}
              <div
                style={{
                  width: '100%',
                  minWidth: 0,
                  maxWidth: 1000,
                  height: 700,
                  margin: '0 auto',
                  overflow: 'scroll',
                }}
                id="my-cal-inline"
                ref={calendlyRef}
              ></div>
            </div>
          </section>
        </div>
        {/* Footer */}
        <footer className="w-full text-center text-xs text-white/60 py-6 mt-10">
          Copyright © Linked Digital 2025. All Rights Reserved. &nbsp;|&nbsp;
          <a href="/privacy-policy" className="underline hover:text-white transition">Privacy Policy</a>
        </footer>
      </div>
    </main>
  );
}
