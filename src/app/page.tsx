"use client";
import Image from "next/image";
import { useRef } from "react";

// Placeholder for future Framer Motion and Lottie imports

export default function Home() {
  // For scroll-to-form CTA
  const formRef = useRef<HTMLDivElement>(null);
  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0a2342] to-[#01010a] text-white font-sans">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-4 pt-24 pb-16 text-center overflow-hidden">
        {/* Animated SVG/Lottie blob placeholder */}
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          {/* TODO: Add Lottie or SVG blob */}
          <div className="w-[600px] h-[600px] bg-gradient-to-tr from-blue-900/40 to-indigo-900/10 rounded-full blur-3xl opacity-60 animate-pulse" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 animate-fade-in-up">
          Recover Lost Revenue Before You Burn More on Ads
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-8 text-white/80 animate-fade-in-up delay-100">
          We help e-com brands increase repeat sales and scale profitably by fixing the backend — before spending more on traffic.
        </p>
        <button
          onClick={scrollToForm}
          className="mt-2 px-8 py-4 rounded-full bg-white text-[#0a2342] font-semibold text-lg shadow-lg transition-all duration-200 hover:scale-105 hover:bg-blue-200/80 focus:outline-none animate-fade-in-up delay-200"
        >
          Book a Free Audit Call
        </button>
      </section>

      {/* Trust / Visual Demo Section */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-12 px-4 py-20 max-w-6xl mx-auto">
        {/* Left: MacBook mockup placeholder */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-[340px] h-[220px] md:w-[480px] md:h-[320px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-900/60 to-black/80">
            {/* TODO: Replace with real dashboard image */}
            <Image src="/macbook-mockup.png" alt="Backend Audit Demo" fill className="object-cover scale-105 transition-transform duration-700 hover:scale-110" />
          </div>
        </div>
        {/* Right: Bullet list */}
        <div className="flex-1 max-w-md">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">What We Fix</h2>
          <ul className="space-y-4 text-lg text-white/90">
            <li className="flex items-center gap-3"><span className="w-2 h-2 bg-blue-400 rounded-full" />Abandoned Cart Recovery</li>
            <li className="flex items-center gap-3"><span className="w-2 h-2 bg-blue-400 rounded-full" />Post-Purchase Upsells</li>
            <li className="flex items-center gap-3"><span className="w-2 h-2 bg-blue-400 rounded-full" />Email/SMS Flows That Convert</li>
            <li className="flex items-center gap-3"><span className="w-2 h-2 bg-blue-400 rounded-full" />Funnel Fixes That Boost LTV</li>
          </ul>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-12 px-4 py-20 max-w-6xl mx-auto border-y border-white/10">
        <div className="flex-1 text-xl md:text-2xl font-medium text-white/90">
          Most agencies focus on ads.<br />
          <span className="font-bold text-white">We focus on what happens after the click.</span>
        </div>
        <div className="flex-1 flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <span className="px-4 py-2 rounded-lg bg-white/10 text-white/80">Agency</span>
            <span className="text-white/60">High CAC, no retention</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="px-4 py-2 rounded-lg bg-blue-600/80 text-white font-semibold">Us</span>
            <span className="text-white/90">Revenue systems that compound</span>
          </div>
        </div>
      </section>

      {/* Backend Growth System */}
      <section className="px-4 py-20 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">The Backend Growth Engine</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { step: "Audit", desc: "Deep-dive into your backend & data." },
            { step: "Strategy", desc: "Custom plan for retention & LTV." },
            { step: "Implementation", desc: "We build, automate, and optimize." },
            { step: "Scale", desc: "Compound growth & profit." },
          ].map(({ step, desc }, i) => (
            <div key={step} className="flex flex-col items-center p-6 rounded-xl bg-white/5 backdrop-blur-md shadow-lg transition-transform duration-300 hover:scale-105 animate-fade-in-up" style={{ transitionDelay: `${i * 100}ms` }}>
              {/* TODO: Add icons */}
              <div className="w-12 h-12 mb-4 rounded-full bg-blue-700/80 flex items-center justify-center text-2xl font-bold">
                {i + 1}
              </div>
              <div className="font-semibold text-lg mb-2">{step}</div>
              <div className="text-white/70 text-base">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-br from-blue-900/80 to-black/90 py-20 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            { stat: "+18%", label: "cart recovery in 14 days" },
            { stat: "3.2x", label: "ROI on existing traffic" },
            { stat: "27%", label: "increase in returning customers" },
          ].map(({ stat, label }, i) => (
            <div key={stat} className="flex flex-col items-center animate-fade-in-up" style={{ transitionDelay: `${i * 120}ms` }}>
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">{stat}</div>
              <div className="text-white/80 text-lg">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section ref={formRef} className="px-4 py-24 max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Fix Your Backend Before Scaling</h2>
        <p className="text-lg md:text-xl text-white/80 mb-8">
          We'll show you where your store is leaking revenue and how to turn it into profit — no ad spend needed upfront.
        </p>
        {/* Calendly embed or booking form placeholder */}
        <div className="w-full h-[500px] bg-white/5 rounded-xl flex items-center justify-center text-white/60">
          [Calendly or Booking Form Here]
        </div>
      </section>

      {/* Sticky CTA Button */}
      <button
        onClick={scrollToForm}
        className="fixed bottom-6 right-6 z-50 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-lg hover:scale-105 hover:bg-blue-500 transition-all duration-200"
      >
        Book a Free Audit Call
      </button>
    </div>
  );
}
