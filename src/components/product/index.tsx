import { FC } from "react";
import Button from "../button";
import { useTranslations } from "use-intl";
import { ProductType } from "@/global/interface";

interface ProductProps {
  data: ProductType;
}

const Product: FC<ProductProps> = ({ data }) => {
  const t = useTranslations();
  const { image, title, price, rating, description, category } = data;
  return (
    <div className="card bg-base-300 shadow-xl">
      <figure>
        <img src={image} alt={title} className="h-52 w-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="text-xs flex items-center gap-1">
            {rating.rate}{" "}
            <img src="/star.svg" alt="star" className="w-[16px] max-w-none" /> (
            {rating.count})
          </div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline badge-secondary">{category}</div>
        </div>
      </div>
      <div className="px-4 pb-4">
        <Button
          tagName="a"
          href="https://google.com"
          target="_blank"
          color="primary"
          fullWidth
        >
          <span className="text-lg">{t("buy")}</span>{" "}
          <span className="font-bold">( ${price} )</span>
        </Button>
      </div>
    </div>
  );
};

export default Product;
