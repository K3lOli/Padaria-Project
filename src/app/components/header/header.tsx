import { toggleState } from "@/app/store/reducers/abrirCarrinho";
import { AiFillHome, AiFillHeart, AiOutlineUser } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();
  const handleToggleClick = () => {
    console.log("Dispatching toggleState action");
    dispatch(toggleState());
  };

  return (
    <div className="w-[60vw] flex justify-between mt-[2.6vw] mb-[1vw]">
      <h1 className="text-[2.25rem] text-[#171515]">
        Panificadora
        <br />
        Pão Nosso
      </h1>
      <div className="flex text-[24px] text-[#545454] gap-[3.125rem] items-center">
        <AiFillHome />
        <BsFillCartFill onClick={handleToggleClick} />
        <AiOutlineUser />
      </div>
    </div>
  );
}
