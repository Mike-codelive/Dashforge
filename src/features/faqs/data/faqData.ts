export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqData: FaqItem[] = [
  {
    id: "1",
    question: "What is DashForge?",
    answer:
      "DashForge is a modern admin dashboard solution built with React and Tailwind CSS designed for scalability and performance.",
  },
  {
    id: "2",
    question: "How can I add new team members?",
    answer:
      "You can add new team members directly from the Team page using the Add Members button. The changes are temporary and reset on refresh.",
  },
  {
    id: "3",
    question: "Is the dashboard responsive?",
    answer:
      "Yes. DashForge is fully responsive and optimized for desktop, tablet, and mobile devices.",
  },
  {
    id: "4",
    question: "Does it support dark mode?",
    answer:
      "Absolutely. DashForge includes built-in dark mode support with smooth theme switching.",
  },
  {
    id: "5",
    question: "Can I integrate APIs?",
    answer:
      "Yes. The architecture is designed to integrate easily with REST or GraphQL APIs.",
  },
];
