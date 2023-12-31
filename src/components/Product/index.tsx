import { NavStore } from "../../store";
import { formatToReal } from "../../utils";
import { IProduct } from "./interfaces";

interface productsInventory {
  produtos: IProduct[];
}

export const Products = (product: productsInventory) => {
  const { produtos } = product;
  const { active } = NavStore();

  return produtos?.map(({ name, priceSpecification, sku, imageObjects }) => {
    return imageObjects?.map(({ thumbnail }) => {
      return (
        <div
          key={sku}
          className="w-full h-16 p-1 flex gap-1 justify-between items-center"
        >
          <figure className=" w-14 h-14">
            <img src={thumbnail} alt="" className="w-full h-full" />
          </figure>
          <p className="text-xs flex flex-1">{name}</p>
          {active === "Confirmação" ? null : (
            <div className="h-5/6 flex flex-col justify-center">
              {priceSpecification.discount > 0 ? (
                <span className="text-sm line-through text-gray-400 ">
                  R$: {formatToReal(priceSpecification.maxPrice)}
                </span>
              ) : null}
              <span className="text-sm  font-semibold ">
                R$: {formatToReal(priceSpecification.price)}
              </span>
            </div>
          )}
        </div>
      );
    });
  });
};
