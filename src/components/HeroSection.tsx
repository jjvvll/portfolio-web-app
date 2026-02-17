import React from "react";

export const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 px-6" id="intro">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none mb-6 md:mb-8">
              FULL-STACK
              <br />{" "}
              <span className="text-[var(--primary)]/90">WEB DEVELOPER.</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-500 dark:text-slate-400 max-w-2xl font-light leading-relaxed">
              I create structured, scalable web applications with Laravel and
              modern frontend technologies like React, emphasizing clean
              implementation, usability, and performance.
            </p>

            {/* Download and View CV Button */}
            <div className="mt-8 md:mt-10 flex flex-wrap gap-3">
              <a
                href="/files/CV.pdf"
                download
                className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primary)]/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-sm sm:text-base"
              >
                <span className="material-icons text-xl sm:text-2xl">
                  download
                </span>
                <span>Download CV</span>
              </a>

              <a
                href="/files/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 border-2 border-[var(--primary)] text-[var(--primary)] rounded-lg hover:bg-[var(--primary)]/10 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-sm sm:text-base"
              >
                <span className="material-icons text-xl sm:text-2xl">
                  visibility
                </span>
                <span>View CV</span>
              </a>
            </div>
            <div className="mt-8 md:mt-12 flex items-center space-x-4 sm:space-x-6">
              <div className="h-[1px] w-12 sm:w-20 bg-[var(--primary)]"></div>
              <span className="text-xs sm:text-sm uppercase tracking-widest font-bold">
                Based in Binangonan, Rizal
              </span>
            </div>
          </div>
          <div className="lg:col-span-4 hidden lg:block">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <img
                alt="Portrait"
                className="object-cover w-full h-full"
                src="/photos/profile_photo.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
