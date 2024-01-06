import English from "./en.json";
import Farsi from "./fa.json";

/// Application locales configuratio
const locales = [
  {
    locale: "en",
    title: "English",
    direction: "ltr",
    messages: English,
  },
  {
    locale: "fa",
    title: "Farsi",
    direction: "rtl",
    messages: Farsi,
  },
] as const;

export default locales;
