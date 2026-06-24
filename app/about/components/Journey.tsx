"use client";

import { useState } from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa6";

type JourneyTab = "work" | "education";

interface JourneyItem {
  title: string;
  organization: string;
  date: string;
  subtitle?: string;
  link?: string;
}

interface JourneyProps {
  workplaces: JourneyItem[];
  education: JourneyItem[];
}

interface JourneyListProps {
  heading: string;

  items: JourneyItem[];
}

function JourneyList({ heading, items }: JourneyListProps) {
  return (
    <div>
      <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
        {heading}
      </p>

      <div className="flex flex-col gap-7">
        {items.map((item) => (
          <article key={`${item.title}-${item.organization}`}>
            <div className="flex items-start justify-between gap-6">
              <div className="min-w-0">
                <h3 className="font-medium text-primary">{item.title}</h3>

                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="decoration-secondary mt-1 block w-fit text-primary underline underline-offset-4 transition-opacity hover:opacity-70"
                  >
                    {item.organization}
                  </a>
                ) : (
                  <p className="mt-1 text-primary">{item.organization}</p>
                )}

                {item.subtitle && (
                  <p className="mt-1 text-sm text-secondary">{item.subtitle}</p>
                )}
              </div>

              <span className="shrink-0 pt-0.5 text-sm text-secondary">
                {item.date}
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default function Journey({ workplaces, education }: JourneyProps) {
  const [activeTab, setActiveTab] = useState<JourneyTab>("education");

  return (
    <div className="w-full max-w-2xl">
      {/* Toggle buttons */}
      <div
        className="group/tabs mb-10 grid grid-cols-2 gap-3"
        role="tablist"
        aria-label="Work and education"
      >
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "work"}
          aria-controls="journey-panel"
          onClick={() => setActiveTab("work")}
          className={`
            flex items-center gap-3 rounded-lg bg-secondary p-4 text-left
            transition-[background-color,opacity]
            duration-200
            hover:!opacity-100
            group-hover/tabs:opacity-40
            ${
              activeTab === "work"
                ? "text-primary opacity-100"
                : "text-secondary opacity-60"
            }
          `}
        >
          <FaBriefcase className="h-5 w-5 shrink-0" />

          <span className="font-medium">Work</span>
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "education"}
          aria-controls="journey-panel"
          onClick={() => setActiveTab("education")}
          className={`
            flex items-center gap-3 rounded-lg bg-secondary p-4 text-left
            transition-[background-color,opacity]
            duration-200
            hover:!opacity-100
            group-hover/tabs:opacity-40
            ${
              activeTab === "education"
                ? "text-primary opacity-100"
                : "text-secondary opacity-60"
            }
          `}
        >
          <FaGraduationCap className="h-5 w-5 shrink-0" />

          <span className="font-medium">Education</span>
        </button>
      </div>

      {/* Content */}
      <div
        id="journey-panel"
        role="tabpanel"
        className="fade-in slide-in-from-bottom-1 animate-in duration-300"
      >
        <div className="flex flex-col gap-7">
          <div className="grid">
            <div
              role="tabpanel"
              aria-hidden={activeTab !== "work"}
              className={`col-start-1 row-start-1 transition-opacity duration-300 ${
                activeTab === "work"
                  ? "visible opacity-100"
                  : "pointer-events-none invisible opacity-0"
              }`}
            >
              <JourneyList heading="Experience" items={workplaces} />
            </div>

            <div
              role="tabpanel"
              aria-hidden={activeTab !== "education"}
              className={`col-start-1 row-start-1 transition-opacity duration-300 ${
                activeTab === "education"
                  ? "visible opacity-100"
                  : "pointer-events-none invisible opacity-0"
              }`}
            >
              <JourneyList heading="Education" items={education} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
