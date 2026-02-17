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
  const [videoProgress, setVideoProgress] = useState(0);

  useEffect(() => {
    const onChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const handleTimeUpdate = () => {
      setVideoProgress((video.currentTime / video.duration) * 100);
    };
    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const bar = e.currentTarget;
    const rect = bar.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    if (videoRef.current) {
      videoRef.current.currentTime = ratio * videoRef.current.duration;
    }
  };

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
            className="object-cover w-full h-full"
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

          {/* Bottom controls — progress bar + label + fullscreen */}
          <div
            className="absolute bottom-0 left-0 right-0 px-3 pb-3 pt-6 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
            }}
          >
            {/* Progress bar */}
            <div
              className="w-full h-1.5 bg-white/30 rounded-full cursor-pointer mb-3 pointer-events-auto"
              onClick={handleSeek}
            >
              <div
                className="h-full bg-white rounded-full relative"
                style={{ width: `${videoProgress}%` }}
              >
                {/* Scrubber handle */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>

            {/* Label + fullscreen row */}
            <div className="flex items-center justify-between pointer-events-none">
              <div className={`${reversed ? "ml-auto" : ""}`}>
                <span className="text-xs font-bold uppercase tracking-widest text-white bg-black/60 px-2 py-1 rounded-sm inline-block">
                  {number} // {category}
                </span>
              </div>

              {/* Fullscreen button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (!document.fullscreenElement) {
                    videoRef.current?.requestFullscreen();
                  } else {
                    document.exitFullscreen();
                  }
                }}
                className="w-9 h-9 bg-black/50 hover:bg-black/75 text-white rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 pointer-events-auto"
                aria-label="Toggle fullscreen"
              >
                <span className="material-icons text-lg">
                  {isFullscreen ? "fullscreen_exit" : "fullscreen"}
                </span>
              </button>
            </div>
          </div>
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
