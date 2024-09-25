import { FAQItem } from "@/types/faqItems";

export const TEST_MODE_ENABLED = ["true", "True", "TRUE"].includes(
  process.env.NEXT_PUBLIC_TEST_MODE_ENABLED ?? ""
);

export const CONTACT_EMAIL = "contact@mivro.org";

export const faqData: FAQItem[] = [
  {
    question: "What does Mivro mean?",
    answer:
      "The name Mivro is inspired by 'Micro,' reflecting our focus on delivering in-depth information about packaged product nutrients and ingredients, to help you make informed decisions.",
  },
  {
    question: "Can the app be used offline?",
    answer:
      "Yes, you can scan products and access basic information offline by downloading additional packages from the settings. However, product search and AI-driven features need online access.",
  },
  {
    question: "Does the app support international product scans?",
    answer:
      "Yes, you can scan products from various regions, although the detail of information may vary based on the product’s origin.",
  },
  {
    question: "What new features are coming soon?",
    answer:
      "Support for cosmetics, medicines, pet foods, live product recognition, marketplace, and a meal tracker are coming soon to expand your scanning experience and help manage your nutrition.",
  },
  {
    question: "How is my health data used by the app?",
    answer:
      "You can choose to enable health data sharing for personalized recommendations and nutrient insights tailored to your specific needs. If this option is not enabled, the app will provide general recommendations based on standard daily nutritional guidelines for an average person.",
  },
  {
    question:
      "Can I rely on the app’s AI for precise health recommendations and risk identification?",
    answer:
      "The AI model uses data and algorithms to provide general guidance on product recommendations and health risks. Accuracy improves with detailed input, but always seek professional medical advice for important health decisions.",
  },
  {
    question:
      "What if a product I scanned is not recognized or provides incorrect information?",
    answer:
      "If a product isn't recognized or the information appears incorrect, you can submit it for review. We will verify and update the database accordingly. Soon, you'll also be able to add new products directly for verification.",
  },
  {
    question: "Can I use the app on multiple devices with the same account?",
    answer:
      "Yes, all your data is synchronized and accessible on any device where you log in with your account.",
  },
  {
    question: "Can I connect the app with other health or fitness platforms?",
    answer:
      "No, integration with other health or fitness platforms isn't available at the moment, but it’s coming soon. Keep an eye on the app’s settings or our website for updates.",
  },
  {
    question: "How is my data protected in the app?",
    answer:
      "We secure your data with AES-256 encryption and adhere to industry-standard privacy practices to keep your information safe.",
  },
];
