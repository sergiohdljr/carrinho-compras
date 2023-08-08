import { NavStore } from "../../store";
import { ButtonClick, SubmitButton } from "..";

export interface PaymentProps {
  qntProducts?: number;
  subTotal?: number;
  shippingTotal?: number;
  discount?: number;
  total?: number;
}

export const PaymentDetails = ({
  qntProducts,
  discount,
  shippingTotal,
  subTotal,
  total,
}: PaymentProps) => {
  const { active } = NavStore();

  const ButtonType = active === "Sacola" ? <ButtonClick /> : <SubmitButton />;

  return (
    <section className="w-full h-64  bg-white p-7 flex flex-col gap-4">
      <div className="w-full flex justify-between">
        <span>Produtos: {`(${qntProducts} items)`}</span>
        <span>R$ {subTotal}0</span>
      </div>
      <div className="w-full  flex justify-between">
        <span>Frete: </span>
        <span>R$ {shippingTotal}0</span>
      </div>
      <div className="w-full flex justify-between">
        <span>Desconto: </span>
        <span className="font-semibold text-purple-700">R$ {discount},00</span>
      </div>
      <div className="w-full flex justify-between">
        <h2 className="text-xl font-semibold ">Subtotal: </h2>
        <h2 className="text-xl font-semibold ">R$ {total}0</h2>
      </div>
      {ButtonType}
    </section>
  );
};
