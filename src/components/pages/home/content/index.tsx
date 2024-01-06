import Button from "../../../../components/button";
import { FC } from "react";
import { useTranslations } from "use-intl";

const HomeContent: FC = () => {
  const t = useTranslations();
  return (
    <Button
      tagName="a"
      href="https://google.com"
      target="_blank"
      color="accent"
      variant="outline"
      fullWidth
    >
      {t("hello")}
    </Button>
  );
};

export default HomeContent;
