"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { personalInfo, aboutStats } from "@/data/portfolio";

const aboutPoints = [
  "I'm a dedicated Software Developer and Computer Science graduate specialized in Artificial Intelligence.",
  "I specialize in full-stack development and have a strong foundation in Data Structures & Algorithms and Competitive Programming.",
  "I turn complex problems into clean, efficient, and scalable solutions.",
];

// ─── Typewriter Hook (faster) ──────────────────────────────────────────────
function useTypewriter(lines: string[], charSpeed = 1, lineDelay = 33) {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [completedLines, setCompletedLines] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setIsTyping(true), 100);

    return () => clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    if (!isTyping) return;
    if (currentLine >= lines.length) return;

    const line = lines[currentLine];

    if (currentChar < line.length) {
      const timer = setTimeout(() => {
        setCurrentChar((c) => c + 1);
      }, charSpeed);

      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setCompletedLines((prev) => [...prev, line]);
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, lineDelay);

      return () => clearTimeout(timer);
    }
  }, [isTyping, currentLine, currentChar, lines, charSpeed, lineDelay]);

  const activeLine =
    currentLine < lines.length
      ? lines[currentLine].slice(0, currentChar)
      : null;

  const isDone = currentLine >= lines.length;

  return {
    completedLines,
    activeLine,
    isDone,
  };
}

// ─── Main About Component ──────────────────────────────────────────────────
export default function About() {
  const { completedLines, activeLine, isDone } =
    useTypewriter(aboutPoints);

  const sectionRef = useRef<HTMLElement>(null);

  // Animation phases:
  // vibrating → transitioning → settled
  const [phase, setPhase] = useState<
    "vibrating" | "transitioning" | "settled"
  >("vibrating");

  const [isFlipped, setIsFlipped] = useState(false);

  const frameRef = useRef<HTMLDivElement>(null);

  // ─── Vibration + Photo Transition ───────────────────────────────────────
  useEffect(() => {
    // Total vibration duration
    const vibrationDuration = 2200; // 2.2 seconds

    // Start flipping the photo when vibration reaches 65%
    const transitionStart = 0.44;

    const startTime = performance.now();

    let animId: number;
    let transitionStarted = false;
    let settleTimer: ReturnType<typeof setTimeout> | undefined;

    function vibrateFrame(now: number) {
      // Get the element inside the animation loop.
      // This prevents the TypeScript "possibly null" error.
      const frame = frameRef.current;

      if (!frame) return;

      const elapsed = now - startTime;

      const progress = Math.min(
        elapsed / vibrationDuration,
        1
      );

      if (progress < 1) {
        // ─── Vibration decay ─────────────────────────────────────────────
        // Starts strong and gradually becomes stable.
        const intensity = Math.pow(1 - progress, 3);

        // ─── Maximum vibration strength ─────────────────────────────────
        const maxTranslate = 14; // px
        const maxRotate = 5; // degrees
        const maxScale = 0.06;

        // ─── Rapid organic movement ─────────────────────────────────────
        const time = elapsed * 0.05;

        const tx =
          Math.sin(time * 7.3 + 1.2) *
            maxTranslate *
            intensity +
          Math.sin(time * 13.7 + 3.8) *
            maxTranslate *
            0.5 *
            intensity;

        const ty =
          Math.sin(time * 9.1 + 2.7) *
            maxTranslate *
            intensity +
          Math.cos(time * 11.3 + 0.5) *
            maxTranslate *
            0.4 *
            intensity;

        const rotate =
          Math.sin(time * 8.5 + 4.1) *
          maxRotate *
          intensity;

        const scale =
          1 +
          Math.sin(time * 12.2 + 1.9) *
            maxScale *
            intensity;

        frame.style.transform = `translate(${tx}px, ${ty}px) rotate(${rotate}deg) scale(${scale})`;

        // ─── Start photo transition at 65% ──────────────────────────────
        if (
          progress >= transitionStart &&
          !transitionStarted
        ) {
          transitionStarted = true;

          setPhase("transitioning");

          // The photo transition finishes while
          // the vibration is still settling.
          settleTimer = setTimeout(() => {
            setPhase("settled");
          }, 500);
        }

        animId = requestAnimationFrame(vibrateFrame);
      } else {
        // ─── Vibration completely finished ──────────────────────────────
        frame.style.transform =
          "translate(0, 0) rotate(0deg) scale(1)";
      }
    }

    animId = requestAnimationFrame(vibrateFrame);

    return () => {
      cancelAnimationFrame(animId);

      if (settleTimer) {
        clearTimeout(settleTimer);
      }
    };
  }, []);

  // ─── Manual Card Flip ──────────────────────────────────────────────────
  const handleCardClick = () => {
    if (phase === "settled") {
      setIsFlipped((prev) => !prev);
    }
  };

  return (
    <section
      id="about"
      className="about-section"
      ref={sectionRef}
    >
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Behind the{" "}
            <span className="gradient-text">
              Code
            </span>
          </h2>
        </div>

        <div className="about-grid">
          <div
            className={`photo-card-scene ${
              phase === "vibrating"
                ? "vibrating"
                : ""
            }`}
            ref={frameRef}
          >
            <div
              className={`photo-card ${
                phase === "transitioning"
                  ? "photo-transitioning"
                  : ""
              } ${
                phase === "settled"
                  ? "photo-settled"
                  : ""
              } ${
                isFlipped
                  ? "flipped"
                  : ""
              }`}
              onClick={handleCardClick}
              role={
                phase === "settled"
                  ? "button"
                  : undefined
              }
              tabIndex={
                phase === "settled"
                  ? 0
                  : undefined
              }
              aria-label={
                phase === "settled"
                  ? "Click to flip photo card"
                  : undefined
              }
              onKeyDown={(e) => {
                if (
                  phase === "settled" &&
                  (e.key === "Enter" ||
                    e.key === " ")
                ) {
                  e.preventDefault();
                  handleCardClick();
                }
              }}
            >
              {/* Front face — Photo 2 */}
              <div className="photo-card__face">
                <Image
                  src={personalInfo.profileImageAlt}
                  alt={`${personalInfo.name} profile photo`}
                  width={300}
                  height={300}
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* Back face — Photo 1 */}
              <div className="photo-card__face photo-card__face--back">
                <Image
                  src={personalInfo.profileImage}
                  alt={`${personalInfo.name} alternate photo`}
                  width={300}
                  height={300}
                  priority
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>

            {/* Flip hint */}
            <span
              className={`flip-hint ${
                phase === "settled"
                  ? "visible"
                  : ""
              }`}
            >
              Click to flip
            </span>
          </div>

          <div className="about-text">
            <div className="about-points">
              {completedLines.map((line, i) => (
                <p
                  key={i}
                  className="about-point"
                >
                  {line}
                </p>
              ))}

              {activeLine !== null && (
                <p className="about-point">
                  {activeLine}
                  <span className="typewriter-cursor">
                    |
                  </span>
                </p>
              )}
            </div>

            <div
              className={`about-stats ${
                isDone
                  ? "about-stats--visible"
                  : ""
              }`}
            >
              {aboutStats.map((stat) => (
                <div
                  className="about-stat"
                  key={stat.label}
                >
                  <span className="about-stat-value">
                    {stat.value}
                  </span>

                  <span className="about-stat-label">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}