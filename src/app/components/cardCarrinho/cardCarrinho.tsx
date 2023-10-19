import { RootState } from "@/app/store";
import {
  decrementarCarrinho,
  incrementarCarrinho,
  addCarrinho,
  removeCarrinho,
} from "@/app/store/reducers/carrinho";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

interface CardProps {
  title: string;
  price: number;
  photo: string;
  id: number;
  carrinho?: boolean;
  quantidade?: number;
}

export default function CardCarrinho(props: CardProps) {
  const { title, price, photo, id, carrinho, quantidade } = props;
  const cart = useSelector((state: RootState) =>
    state.carrinho.filter((item) => item.id === props.id)
  );
  const dispatch = useDispatch();

  function resolverCarrinho() {
    dispatch(addCarrinho({ ...props, item: true, quantidade: quantidade || 1 }));
  }
  function incrementaCarrinho(id: number) {
    dispatch(incrementarCarrinho(id));
  }
  function decrementaCarrinho(id: number) {
    dispatch(decrementarCarrinho(id));
  }
  function remCarrinho(id: number) {
    dispatch(removeCarrinho(id));
  }

  return (
    <div className="flex justify-between gap-4">
      <div className="w-[412px] h-[136px] bg-[#342A35] rounded-[1.25rem] flex items-center justify-between mt-6 pl-4 ml-4">
        <div className="flex">
          <img
            src={photo}
            alt={title}
            className="w-[83px] h-[79px] rounded-lg object-cover"
          />
          <div className="flex flex-col ml-3">
            <h1 className="text-[20px] text-white mb-2 mt-1">{title}</h1>
            <h2 className="text-[24px] text-white">R${price}</h2>
          </div>
        </div>
        <div className="w-auto h-[70px] bg-[#453C47] rounded-full flex flex-col justify-between items-center mr-4">
          <button
            className="bg-white w-[40px] h-8 rounded-full flex justify-center items-center"
            onClick={() => incrementaCarrinho(id)}
          >
            <AiOutlinePlus size={20} className="text-[#171515]" />
          </button>
          {cart.map((item, index) => (
            <div key={index}>{item.quantidade}</div>
          ))}
          <button
            className="bg-white w-[40px] h-8 rounded-full flex justify-center items-center"
            onClick={() => decrementaCarrinho(id)}
          >
            <AiOutlineMinus size={20} className="text-[#171515]" />
          </button>
        </div>
      </div>
      <button
        className="bg-red-700 w-[93px] h-[136px] mt-6 mr-4 rounded-[1.25rem] flex justify-center items-center"
        onClick={() => remCarrinho(id)}
      >
        <BsFillTrashFill size={40} className="text-white" />
      </button>
    </div>
  );
}
