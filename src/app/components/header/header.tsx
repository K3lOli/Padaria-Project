import { RootState } from "@/app/store";
import { toggleState } from "@/app/store/reducers/abrirCarrinho";
import { AiFillHome, AiFillHeart, AiOutlineUser } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import logo from "../../../../public/assets/padaria.png";
import Image from "next/image";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from '../../services/firebase'

export default function Header() {
  const dispatch = useDispatch();
  const handleToggleClick = () => {
    console.log("Dispatching toggleState action");
    dispatch(toggleState());
  };
  const temItem = useSelector((state: RootState) => state.carrinho);

  const authenticator = () => {
    console.log('entrou');
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((result) => {console.log(result)}).catch((error) => {console.log('deu errado', error)})
  }

  return (
    <div className="w-[60vw] flex justify-between mt-[2.6vw] mb-[1vw]">
      <h1 className="text-[2.25rem] text-[#171515]">
        <Image src={logo} width={500} height={500} alt="logo padaria" className=" w-64" />
      </h1>
      <div className="flex text-[24px] text-[#545454] gap-[3.125rem] items-center">
        {/* <AiFillHome /> */}
        <div className="h-[24px] relative">
          {temItem.map((item) => (item.item)? <div key={item.id} className="bg-red-600 w-3 h-3 rounded-full absolute right-0"></div>: null 
          )}
          
          <button>
            <BsFillCartFill onClick={handleToggleClick} />
          </button>
        </div>
        <button>
        <AiOutlineUser onClick={authenticator}/>
        </button>
      </div>
    </div>
  );
}
