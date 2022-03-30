import {
  DotsHorizontalIcon,
  HashtagIcon,
  UserIcon,
} from "@heroicons/react/solid";
import {
  HomeIcon,
  MailIcon,
  BellIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
} from "@heroicons/react/outline";

import Button from "../Button/Button";

const MenuBar = () => {
  return (
    <aside className="hidden vsm:flex flex-col justify-between sticky top-0 left-0 pt-[9px] px-[12px] pb-5 max-h-screen xl:w-[275px] ">
      
      <div className="flex flex-col items-center xl:items-start">
        {/* Logo */}
        <button className="containerIcon">
          <HomeIcon className="iconMenuBar" />
          <span>Página Inicial</span>
        </button>
        <button className="containerIcon">
          <HashtagIcon className="iconMenuBar" />
          <span>Explorar</span>
        </button>
        <button className="containerIcon">
          <BellIcon className="iconMenuBar" />
          <span>Notificações</span>
        </button>
        <button className="containerIcon">
          <MailIcon className="iconMenuBar" />
          <span>Mensagens</span>
        </button>
        <button className="containerIcon">
          <BookmarkIcon className="iconMenuBar" />
          <span>Itens salvos</span>
        </button>
        <button className="containerIcon">
          <CollectionIcon className="iconMenuBar" />
          <span>Listas</span>
        </button>
        <button className="containerIcon">
          <UserIcon className="iconMenuBar" />
          <span>Perfil</span>
        </button>
        <button className="containerIcon">
          <DotsCircleHorizontalIcon className="iconMenuBar" />
          <span>Mais</span>
        </button>


          <Button radius="rounded-[25px]" outlined={false} children="Tweetar" className="buttonTwettar" />
     
      </div>


      <div className="containerIconPerfil items-center justify-center xl:justify-start">

        
          <div className="w-10 h-10 rounded-[50%] shrink-0 bg-gray "></div>

          <div className="flex flex-col items-center justify-start ml-2">
            <span className="hidden xl:inline-block text-[15px]">Casimiro</span>
            <p className="hidden xl:inline-block text-[15px] text-gray">@casimiro</p>
          </div>

          <div className="hidden xl:flex grow items-end justify-end">
            <DotsHorizontalIcon className="h-5 w-5 text-white" />
          </div>
      </div>


    </aside>
  );
};

export default MenuBar;
