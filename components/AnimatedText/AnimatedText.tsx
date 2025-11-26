"use client";
import * as motion from "motion/react-client";
import { ReactNode } from "react";

type TextBlockProps = {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "div";
};

type TextLabelProps = {
  children: ReactNode;
  className?: string;
  as?: "p" | "span" | "div";
};

const animateFromBottom = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
      duration: 0.5,
    },
  },
};

export const TextHeading = ({ children, className, as = "h1" }: TextBlockProps) => {
  const MotionComponent = motion[as];
  
  return (
    <MotionComponent 
      className={className}
      variants={animateFromBottom}
    >
      {children}
    </MotionComponent>
  );
};

export const TextParagraph = ({ children, className, as = "p" }: TextLabelProps) => {
  const MotionComponent = motion[as];
  
  return (
    <MotionComponent 
      className={className}
      variants={animateFromBottom}
    >
      {children}
    </MotionComponent>
  );
};