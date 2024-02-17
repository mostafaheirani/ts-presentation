import Product from "../../../../components/product";
import Loading from "../../../../components/loading";
import { FC, useEffect, useState } from "react";
import { api } from "../../../../constant";
import useCall from "../../../../hooks/use-call";
import { ProductType } from "@/global/interface";

const HomeContent: FC = () => {
  const [data, setData] = useState<ProductType[]>();
  const call = useCall();
  const getProducts = async () => {
    setData(await call.get<ProductType[]>(api.products));
  };
  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
      {data ? (
        data.map((product) => <Product key={product.id} data={product} />)
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default HomeContent;
