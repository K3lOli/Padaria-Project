import { mudarCarrinho } from "@/app/store/reducers/carrinho";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import {BsFillTrashFill} from 'react-icons/bs'
import { useDispatch } from "react-redux";

interface CardProps {
  title: string;
  price: number;
  photo: string;
  id: number;
  carrinho?: boolean;
}

export default function CardCarrinho(props: CardProps) {
  const { title, price, photo, id, carrinho } = props;
  const dispatch = useDispatch();

  function resolverCarrinho() {
    dispatch(mudarCarrinho(id));
  }

  return (
    <div className="flex justify-between gap-4">
        <div className="w-[22vw] h-[7.3vw] bg-[#342A35] rounded-[1.25rem] flex items-center justify-between mt-6 pl-4 ml-4">
          <div className="flex">
            <img
              src={photo}
              alt={title}
              className="w-[4.4vw] h-[4.2vw] rounded-lg object-cover"
            />
            <div className="flex flex-col ml-3">
              <h1 className="text-[1vw] text-white mb-2 mt-1">{title}</h1>
              <h2 className="text-[1.2vw] text-white">R${price}</h2>
            </div>
          </div>
          <div className="w-auto h-[5.3vw] bg-[#453C47] rounded-full flex flex-col justify-between mr-4">
            <div
              className="bg-white w-[3vw] h-8 rounded-full flex justify-center items-center"
            >
              <AiOutlinePlus size={20} className="text-[#171515]" />
            </div>
            <div
              className="bg-white w-[3vw] h-8 rounded-full flex justify-center items-center"
            >
              <AiOutlineMinus size={20} className="text-[#171515]" />
            </div>
          </div>
        </div>
        <div className="bg-red-700 w-[5vw] h-[7.3vw] mt-6 mr-4 rounded-[1.25rem] flex justify-center items-center" onClick={resolverCarrinho}>
            <BsFillTrashFill size={40} className="text-white"/>
        </div>
    </div>
  );
}
