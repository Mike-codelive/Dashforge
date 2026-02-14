import { useState } from "react";
import { faqData } from "../data/faqData";
import { ChevronDown } from "../../../icons";

export default function FaqsSection() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Frequently asked questions
        </h1>
        <p className="mt-4 text-gray-500 dark:text-gray-400">
          Find answers to common questions about DashForge.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="null"
            className="rounded-md bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Email Us
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-gray-300 px-6 py-2 text-sm font-medium hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700"
          >
            X
          </a>
        </div>
      </div>

      <div className="space-y-4">
        {faqData.map((item) => {
          const isOpen = activeId === item.id;

          return (
            <div
              key={item.id}
              className="rounded-lg border border-gray-200 dark:border-gray-700"
            >
              <button
                onClick={() => toggle(item.id)}
                className="flex w-full items-center justify-between px-6 py-4 text-left font-medium text-gray-900 dark:text-white"
              >
                {item.question}
                <span
                  className={`transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  <ChevronDown />
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-4 text-sm text-gray-600 dark:text-gray-400">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
