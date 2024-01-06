import { FC, useContext, useLayoutEffect } from "react";
import classNames from "classnames";
import { PersistContext } from "../../contexts/persist/context";
import { ACTION_TYPES } from "../../contexts/persist/action-types";

type Props = {
  className?: string;
};

const htmlElement = document.querySelector("html")!;

const ThemeSwitcher: FC<Props> = ({ className }) => {
  const [{ theme }, dispatch] = useContext(PersistContext);

  const switchTheme = () =>
    dispatch({
      type: ACTION_TYPES.SET_THEME,
      payload: theme === "light" ? "dark" : "light",
    });

  useLayoutEffect(() => {
    htmlElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <label
      className={classNames(
        "cursor-pointer grid place-items-center",
        className
      )}
    >
      <input
        onClick={switchTheme}
        type="checkbox"
        checked={theme === "dark"}
        className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
      />
      <svg
        className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
      </svg>
      <svg
        className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </label>
  );
};

export default ThemeSwitcher;
