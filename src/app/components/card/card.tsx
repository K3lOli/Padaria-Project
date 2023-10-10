import { RootState } from "@/app/store";
import cardapio from "../itens/itens.json";
import {AiOutlinePlus} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { mudarCarrinho } from "@/app/store/reducers/carrinho";

type Props = (typeof cardapio)[0];

interface CardProps extends Props {
  carrinho?: boolean;
}

export default function Card(props: CardProps) {
  const { title, price, photo, id, carrinho } = props;
  const dispatch = useDispatch();
  const estaNoCarrinho = useSelector((state : RootState) => state.carrinho.some((item) => item.id === props.id))

  function resolverCarrinho() {
    dispatch(mudarCarrinho(id));
  }
  
  return (
    <div>
      <div className="w-[240px] h-[290px] bg-[#342A35] rounded-[1.25rem] flex flex-col items-center mt-6 justify-between">
        <img
          src={photo}
          alt={title}
          className="w-[258px] h-[150px] rounded-lg object-cover"
        />
        <h1 className="text-[16px] text-white mb-2 mt-1">{title}</h1>
        <div className="w-[11.45vw] bg-[#453C47] rounded-full flex justify-between items-center mb-6">
          <h2 className="text-[24px] text-white ml-3">R${price}</h2>
          <div className="bg-white w-[3.81vw] h-10 rounded-full flex justify-center items-center" onClick={resolverCarrinho}>
            <AiOutlinePlus size={24} className='text-[#171515]'/>
          </div>
        </div>
      </div>
    </div>
  );
}
