import locales from ".";

const getCurrentLocale = (
  locale: (typeof locales)[number]["locale"]
): (typeof locales)[number] => locales.find((l) => l.locale === locale)!;

export default getCurrentLocale;
