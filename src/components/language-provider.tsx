import { FC, PropsWithChildren, useContext, useLayoutEffect } from "react";
import { IntlProvider } from "use-intl";
import getCurrentLocale from "../locales/get-current-locale";
import { PersistContext } from "../contexts/persist/context";

const LanguageProvider: FC<PropsWithChildren> = ({ children }) => {
  const [{ locale: currentLocale }] = useContext(PersistContext);
  const { messages, locale, direction } = getCurrentLocale(currentLocale);
  useLayoutEffect(() => {
    document.querySelector("html")?.setAttribute("dir", direction);
  }, [direction]);
  return (
    <IntlProvider messages={messages} locale={locale}>
      {children}
    </IntlProvider>
  );
};

export default LanguageProvider;
