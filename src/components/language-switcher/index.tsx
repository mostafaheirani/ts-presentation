import { FC, useContext } from "react";
import locales from "../../locales";
import getCurrentLocale from "../../locales/get-current-locale";
import { PersistContext } from "../../contexts/persist/context";
import { ACTION_TYPES } from "../../contexts/persist/action-types";

const LanguageSwithcer: FC = () => {
  const [{ locale: currentLocale }, dispatch] = useContext(PersistContext);
  const localeObj = getCurrentLocale(currentLocale);
  return (
    <details className="dropdown dropdown-end">
      <summary className="m-1 btn btn-sm">{localeObj.title}</summary>
      <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
        {locales.map(({ locale, title }) => (
          <li
            key={locale}
            onClick={() =>
              dispatch({ type: ACTION_TYPES.SET_LOCALE, payload: locale })
            }
          >
            <a>{title}</a>
          </li>
        ))}
      </ul>
    </details>
  );
};

export default LanguageSwithcer;
