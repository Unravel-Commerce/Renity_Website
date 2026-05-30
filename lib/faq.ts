export interface FaqItem {
  question: string;
  answer: string;
}

// Single source of truth for the FAQ section UI and the FAQPage JSON-LD.
// Answers are written as concise, quotable facts for AI answer engines.
export const FAQ_ITEMS: readonly FaqItem[] = [
  {
    question: "What is Renity?",
    answer:
      "Renity is a meal-planning app built for households. It lets you save and organize recipes, plan the week's meals together, cook with guided step-by-step instructions, and generate shopping lists — all shared in real time with the people you live with.",
  },
  {
    question: "Which platforms is Renity available on?",
    answer:
      "Renity is coming soon to the Apple App Store and Google Play for iPhone and Android devices.",
  },
  {
    question: "How much does Renity cost?",
    answer:
      "Renity is free to download and includes a free tier. Optional paid plans for individuals and families unlock higher limits, with billing handled securely through the App Store or Google Play.",
  },
  {
    question: "How does shared meal planning work?",
    answer:
      "Create a household, invite the people you live with, and build a weekly plan together. You can assign who's cooking each meal, quick-add recipes, and everyone sees changes instantly thanks to real-time sync.",
  },
  {
    question: "Can my whole household use the same recipes and plans?",
    answer:
      "Yes. Renity is designed around households rather than single users. Members share one recipe collection, meal plan, and shopping list, with roles (admin, editor, viewer) so everyone has the right level of access.",
  },
  {
    question: "What is AI cook mode?",
    answer:
      "Cook mode turns a recipe into AI-assisted, step-by-step guidance with built-in timers, scaled serving sizes, and the ability to cook multiple recipes at once. You can save your progress and pick up where you left off.",
  },
  {
    question: "How do I add recipes to the app?",
    answer:
      "Three ways: add a recipe manually by typing in the ingredients and steps; import one automatically by pasting a URL, and Renity builds a structured recipe for you; or snap a photo of a recipe from your cookbook and let Renity turn it into a digital recipe. You can edit any recipe and use your own image.",
  },
  {
    question: "How is my data handled?",
    answer:
      "Renity is provided by Unravel AS, based in Moss, Norway, and follows a GDPR-compliant privacy policy. You control your content and can delete your account at any time.",
  },
];
