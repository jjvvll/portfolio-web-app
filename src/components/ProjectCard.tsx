import React from "react";
import type { Project } from "../types";
import { useState, useRef, useEffect } from "react";

interface ProjectCardProps extends Project {}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  number,
  title,
  category,
  videoUrl,
  videoUrlAlt,
  techStack,
  role,
  outcome,
  reversed = false,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const onChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="grid lg:grid-cols-12 gap-12 items-center mb-40">
      {/* Video */}
      <div className={`lg:col-span-8 ${reversed ? "order-1 lg:order-2" : ""}`}>
        <div
          className="relative group rounded-xl overflow-hidden bg-slate-800 aspect-video shadow-2xl cursor-pointer"
          onClick={handlePlayPause}
        >
          <video
            ref={(el) => {
              if (el) videoRef.current = el;
            }}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-1000"
            src={videoUrl}
            aria-label={videoUrlAlt}
            muted
            loop
            playsInline
          />

          {/* Play/pause overlay — hidden while playing */}
          <div
            className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300 ${
              isPlaying ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="w-20 h-20 bg-[var(--primary)]/90 text-white rounded-full flex items-center justify-center shadow-xl">
              <span className="material-icons text-4xl">
                {isPlaying ? "pause" : "play_arrow"}
              </span>
            </div>
          </div>

          {/* Category label */}
          <div
            className={`absolute bottom-6 ${
              reversed ? "right-6 text-right" : "left-6"
            } pointer-events-none`}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-white bg-black/60 px-2 py-1 rounded-sm inline-block">
              {number} // {category}
            </span>
          </div>

          {/* Fullscreen button */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // don't trigger play/pause
              if (!document.fullscreenElement) {
                videoRef.current?.requestFullscreen();
              } else {
                document.exitFullscreen();
              }
            }}
            className="absolute bottom-4 right-4 w-9 h-9 bg-black/50 hover:bg-black/75 text-white rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-10"
            aria-label="Toggle fullscreen"
          >
            <span className="material-icons text-lg">
              {isFullscreen ? "fullscreen_exit" : "fullscreen"}
            </span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div
        className={`lg:col-span-4 ${reversed ? "order-2 lg:order-1 lg:text-right" : ""} flex flex-col justify-center`}
      >
        <h3 className="text-3xl font-black mb-6">{title}</h3>
        <div className="space-y-8">
          {/* Tech Stack */}
          <div>
            <p className="text-xs font-black text-[var(--primary)] uppercase tracking-widest mb-2">
              Tech Stack
            </p>
            <div
              className={`flex flex-wrap gap-2 ${reversed ? "lg:justify-end" : ""}`}
            >
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 border border-[var(--primary)]/20 bg-[var(--primary)]/10 rounded text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Role */}
          <div>
            <p className="text-xs font-black text-[var(--primary)] uppercase tracking-widest mb-2">
              My Role
            </p>
            <p
              className={`text-slate-400 font-light italic ${reversed ? "text-right" : ""}`}
            >
              {role}
            </p>
          </div>

          {/* Outcome */}
          <div>
            <p className="text-xs font-black text-[var(--primary)] uppercase tracking-widest mb-2">
              Outcome
            </p>
            <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              {outcome}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
