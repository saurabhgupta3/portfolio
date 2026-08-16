"use client";

import { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  withReveal?: boolean;
  revealChildren?: boolean;
}

export default function SectionWrapper({
  id,
  children,
  className = "",
  withReveal = true,
  revealChildren = false,
}: SectionWrapperProps) {
  const ref = useScrollReveal<HTMLElement>(0.1);

  const revealClass = withReveal
    ? revealChildren
      ? "scroll-reveal-children"
      : "scroll-reveal"
    : "";

  return (
    <section
      id={id}
      ref={withReveal ? ref : undefined}
      className={`section ${revealClass} ${className}`}
    >
      <div className="container">{children}</div>
    </section>
  );
}
