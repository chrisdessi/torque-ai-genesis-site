import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("mx-auto max-w-6xl px-6 py-16 md:py-20", className)}>
      {children}
    </section>
  );
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={cn("rounded-2xl border border-zinc-200 bg-white p-6", className)}>
      {children}
    </div>
  );
}

interface PrimaryButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function PrimaryButton({ href, children, className }: PrimaryButtonProps) {
  const isExternal = href.startsWith("http");
  const baseClasses = cn(
    "inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-zinc-800 hover:scale-[1.02]",
    className
  );

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
        {children}
      </a>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a
        href={href}
        onClick={(e) => {
          e.preventDefault();
          document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
        }}
        className={baseClasses}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={baseClasses}>
      {children}
    </Link>
  );
}

interface SecondaryLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function SecondaryLink({ href, children, className }: SecondaryLinkProps) {
  const baseClasses = cn(
    "text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors",
    className
  );

  if (href.startsWith("#")) {
    return (
      <a
        href={href}
        onClick={(e) => {
          e.preventDefault();
          document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
        }}
        className={baseClasses}
      >
        {children}
      </a>
    );
  }

  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={baseClasses}>
      {children}
    </Link>
  );
}
